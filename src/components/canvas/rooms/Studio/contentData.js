/**
 * Studio Content Data
 * 
 * Custom content for Khushal's interactive monitor towers.
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '▶',
        label: 'Tech Demo',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#5BE7FF',
        accentColor: '#00D9FF',
        icon: '📝',
        label: 'Case Study',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '📱',
        label: 'Micro Motion',
        shape: 'phone', // Vertical phone
    },
    linkedin: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: 'in',
        label: 'Milestone',
        shape: 'monitor',
    },
    codrops: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '💧',
        label: 'Featured',
        shape: 'monitor',
    },
};

const RAW_CONTENT_DATA = [
    // ============ Real Projects ============
    {
        id: 'studio-autocode-agent',
        platform: 'blog',
        title: 'AutoCode Agent: Autonomous AI Script Generation Engine',
        description: 'An AI-driven coding assistant designed to interpret natural language commands, automate boilerplate scripts, and streamline developer workflows using Python and LLMs.',
        thumbnail: null,
        url: 'https://github.com/khushal3706/AutoCode-Agent',
        date: '2026-03-24',
        readTime: '8 min',
    },
    {
        id: 'studio-friday-ai',
        platform: 'youtube',
        title: 'F.R.I.D.A.Y.: Modular Python Desktop AI Assistant',
        description: 'A fully modular personal AI assistant engineered to streamline daily tasks, execute OS-level commands, and pull web data programmatically.',
        thumbnail: null,
        url: 'https://github.com/khushal3706/-F.R.I.D.A.Y',
        date: '2026-02-15',
        readTime: '7 min',
    },
    {
        id: 'studio-security-mind',
        platform: 'linkedin',
        title: 'Security-Mind: Vulnerability Analysis & Logic Auditing',
        description: 'A cybersecurity-focused application implementing cryptographic logic, input validation layers, and secure data handling protocols in Python.',
        thumbnail: null,
        url: 'https://github.com/khushal3706/Security-Mind',
        date: '2026-01-10',
        readTime: '6 min',
    },
    {
        id: 'studio-nexus-ecommerce',
        platform: 'blog',
        title: 'Nexus Full-Stack E-Commerce: Django & MongoDB Architecture',
        description: 'A comprehensive end-to-end e-commerce solution bridging a robust Django Python backend with a dynamic JavaScript frontend and secure session management.',
        thumbnail: null,
        url: 'https://github.com/khushal3706',
        date: '2025-12-18',
        readTime: '9 min',
    },
    {
        id: 'studio-synctask',
        platform: 'tiktok',
        title: 'SyncTask: Real-Time Kanban Board with Firebase Sync',
        description: 'A modern project management tool leveraging Firebase Realtime Database for instant multi-user synchronization and fluid drag-and-drop mechanics.',
        thumbnail: null,
        url: 'https://github.com/khushal3706',
        date: '2025-11-28',
        views: '4.8K',
        likes: '720',
    },
    {
        id: 'studio-sathi-ai',
        platform: 'blog',
        title: 'Sathi AI: Smart Mobile Assistant with Offline Llama Inference',
        description: 'Engineering a native smart assistant application designed for Android with offline intelligence support using localized Llama models and Firebase.',
        thumbnail: null,
        url: 'https://github.com/khushal3706',
        date: '2025-10-15',
        readTime: '10 min',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
