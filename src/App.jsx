import { useState, Suspense, useEffect, useCallback, lazy, useRef } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { Preload, useTexture } from '@react-three/drei';
import * as THREE from 'three';

import Preloader from './components/dom/Preloader';
import PaperTransition from './components/dom/PaperTransition';
import { AudioProvider, useAudio } from './context/AudioManager';
import { initAudio } from './utils/audioManager';
import { PerformanceProvider, usePerformance } from './context/PerformanceContext';
import { SceneProvider, useScene } from './context/SceneContext';
import { AchievementsProvider } from './context/AchievementsContext';
import NavigationUI from './components/ui/NavigationUI';
import GlobalOverlay from './components/ui/GlobalOverlay';
import ScreenReaderOverlay from './components/ui/ScreenReaderOverlay';
import { useDocumentMeta } from './hooks/useDocumentMeta';

import './styles/main.scss';

import { 
  PRELOAD_ALL, 
  PRELOAD_LOADER,
  IMAGE_ASSETS,
  filterTexturesByDevice
} from './config/texturePreloadList';
import { TextureLoader } from 'three';

// Lazy load the heavy 3D experience
const Experience = lazy(() => import('./components/canvas/Experience'));

// Standard Browser-level Image Preloader (for <img> tags)
const preloadBrowserImage = (path) => {
  if (typeof window === 'undefined') return;
  const img = new Image();
  img.src = path;
};

const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent || '');
const isWeakCPU = typeof navigator.hardwareConcurrency !== 'undefined' && navigator.hardwareConcurrency <= 4;
const isLowRAM = typeof navigator.deviceMemory !== 'undefined' && navigator.deviceMemory <= 4;
const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 450;
const isLowEnd = isMobileDevice || isWeakCPU || isLowRAM || isSmallScreen;

const supportsHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

// Precompute the filtered texture list (module-level constants are fine)
const ALL_TEXTURES = [...PRELOAD_ALL, ...PRELOAD_LOADER];
const filteredAll = filterTexturesByDevice(ALL_TEXTURES, supportsHover);

/**
 * ResponsiveCamera — lives inside <Canvas> and adjusts fov/z based on viewport.
 * Portrait / narrow screens get a wider FOV so the scene isn't clipped.
 */
function ResponsiveCamera() {
  const { camera, size } = useThree();

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const isPortrait = h > w;
      const isMobile   = w < 768;

      // Linearly interpolate FOV between 60 (desktop) and 82 (narrow mobile)
      // clamp w to [320, 768]
      const minW = 320, maxW = 768;
      const clamped = Math.max(minW, Math.min(maxW, w));
      const t = 1 - (clamped - minW) / (maxW - minW); // 0 = desktop, 1 = narrow

      const baseFov = 60;
      const mobileFov = 82;
      const targetFov = baseFov + (mobileFov - baseFov) * t;

      // Pull camera back slightly on portrait to expose more vertical space
      const baseZ  = 28;
      const mobileZ = isPortrait && isMobile ? 32 : 28;

      camera.fov = targetFov;
      camera.position.z = mobileZ;
      camera.updateProjectionMatrix();
    };

    update(); // run once on mount
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [camera]);

  return null;
}

// Helper component to handle global audio enable on interaction
const GlobalAudioEnabler = () => {
  const { enableAudio } = useAudio();
  useEffect(() => {
    const handleInteraction = () => enableAudio();
    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });
    window.addEventListener('keydown', handleInteraction, { once: true });
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [enableAudio]);
  return null;
};

// Bridge component to handle dynamic meta tags + deep link auto-teleport
function DocumentMetaBridge() {
  useDocumentMeta();
  const { initialRoom, deeplinkHandled, hasEntered, teleportTo } = useScene();

  useEffect(() => {
    if (initialRoom && hasEntered && !deeplinkHandled.current) {
      deeplinkHandled.current = true;
      setTimeout(() => teleportTo(initialRoom), 300);
    }
  }, [initialRoom, hasEntered, teleportTo, deeplinkHandled]);

  return null;
}

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const { settings, tier } = usePerformance();

  useEffect(() => {
    initAudio();
  }, []);

  // Preload all Three.js textures after mount (inside React context, not at module level)
  useEffect(() => {
    filteredAll.forEach(path => {
      try {
        useTexture.preload(path);
        useLoader.preload(TextureLoader, path);
      } catch (e) {
        // Ignore invalid paths
      }
    });
  }, []);

  const handleSceneReady = useCallback(() => {
    requestAnimationFrame(() => {
      setSceneReady(true);
    });
  }, []);

  return (
    <AudioProvider>
      <AchievementsProvider>
        <SceneProvider>
          <DocumentMetaBridge />
          <GlobalAudioEnabler />
          <div className="app">
            {/* Full screen 3D Canvas */}
            <div className="canvas-wrapper">
              <Canvas
                camera={{
                  position: [0, 0.2, 28],
                  fov: 60,
                  near: 0.1,
                  far: 150
                }}
                gl={{
                  antialias: settings.antialias,
                  alpha: false,
                  powerPreference: settings.powerPreference,
                  localClippingEnabled: true,
                  failIfMajorPerformanceCaveat: true
                }}
                dpr={settings.dpr}
                shadows={settings.shadows}
              >
                <ResponsiveCamera />
                <color attach="background" args={['#fdf8e2']} /> {/* TINTED TO DEEP PURPLE */}
                <fog attach="fog" args={['#fdf8e2', 15, 50]} /> {/* FOG TINTED TO DEEP PURPLE */}

                <Suspense fallback={null}>
                  <Experience
                    isLoaded={isLoaded}
                    onSceneReady={handleSceneReady}
                    performanceTier={tier}
                  />
                  <Preload all />
                </Suspense>
              </Canvas>
            </div>

            {/* Navigation UI - Hamburger, Map, Back, Audio */}
            {isLoaded && (
              <>
                <NavigationUI />
                <GlobalOverlay />
                <PaperTransition />
                <ScreenReaderOverlay />
              </>
            )}

            {/* 2D Preloader */}
            <Preloader
              ready={sceneReady}
              onComplete={() => setIsLoaded(true)}
            />
          </div>
        </SceneProvider>
      </AchievementsProvider>
    </AudioProvider>
  );
}

export default function App() {
  useEffect(() => {
    const filteredImages = filterTexturesByDevice([...IMAGE_ASSETS, ...filteredAll], supportsHover);
    filteredImages.forEach(path => preloadBrowserImage(path));
  }, []);

  return (
    <PerformanceProvider>
      <AppContent />
    </PerformanceProvider>
  );
}
