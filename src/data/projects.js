export const projects = [
  {
    id: "autocode-agent",
    title: "AutoCode Agent",
    category: "AI & Automation Engine",
    shortDescription: "An AI-driven coding assistant designed to automate script generation and streamline developer workflows.",
    tags: ["Python", "AI Integration", "Automation", "LLM"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "AutoCode Agent is an intelligent development tool hosted at github.com/khushal3706/AutoCode-Agent. It is designed to act as an autonomous coding assistant, interpreting developer commands and generating boilerplate code, scripts, and logic structures.",
      challenge: "Reducing the time developers spend on repetitive coding tasks while ensuring the generated code is syntactically correct and highly optimized.",
      approach: "Engineered a Python-based core that interfaces with language models to interpret natural language prompts and convert them into executable code.",
      solution: "Developed a lightweight, highly responsive terminal-based agent that seamlessly integrates into a developer's daily workflow to automate mundane tasks.",
      technologies: ["Python", "API Integration", "Automation Scripting"],
      keyFeatures: [
        "Natural language to code translation",
        "Automated boilerplate generation",
        "Seamless workflow integration",
        "Lightweight Python architecture"
      ],
      performance: "Executes code generation prompts in milliseconds with minimal overhead.",
      outcome: "Drastically reduced development time for personal and academic projects.",
      results: "Source code available at: github.com/khushal3706/AutoCode-Agent"
    }
  },
  {
    id: "friday-ai",
    title: "F.R.I.D.A.Y. AI Assistant",
    category: "Personalized AI Desktop Assistant",
    shortDescription: "A fully modular, Python-powered desktop AI assistant capable of automating OS-level tasks and web scraping.",
    tags: ["Python", "Automation", "OS Libraries"],
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "F.R.I.D.A.Y. is an automated voice and text assistant engineered to streamline daily tasks, execute commands, and pull web information programmatically. The project is actively maintained at github.com/khushal3706/-F.R.I.D.A.Y.",
      challenge: "Structuring the codebase to allow for easy future expansion into dedicated web and mobile applications while handling complex OS permissions safely.",
      approach: "Maintained a clean, version-controlled repository focusing on modular Python functions that can be repurposed as REST APIs in the future.",
      solution: "Developed distinct modules for different assistant capabilities (web scraping, file management, system diagnostics) ensuring the core logic remains independent.",
      technologies: ["Python", "Git", "Web Scraping", "OS Automation"],
      keyFeatures: [
        "Modular command execution",
        "Extensible architecture for future app integration",
        "Strict version control and documentation practices",
        "Automated task processing and file management"
      ],
      performance: "Highly optimized Python scripts minimizing memory overhead.",
      outcome: "A functional, scalable assistant ready for the next phase of UI development.",
      results: "Source code available at: github.com/khushal3706/-F.R.I.D.A.Y"
    }
  },
  {
    id: "security-mind",
    title: "Security-Mind",
    category: "Cybersecurity & Logic Analysis",
    shortDescription: "A dedicated security-focused application for analyzing vulnerabilities, managing secure logic, and data protection.",
    tags: ["Python", "Cybersecurity", "Data Protection"],
    image: "https://images.unsplash.com/photo-1510511459019-5d6cbf67ff61?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "Security-Mind is a technical project hosted at github.com/khushal3706/Security-Mind. It focuses on the defensive side of software engineering, implementing cryptographic logic and secure data handling practices.",
      challenge: "Developing logic that actively identifies bad data inputs and protects sensitive information without slowing down system performance.",
      approach: "Implemented strict validation layers, hashing algorithms, and secure coding practices entirely within a Python environment.",
      solution: "Created a robust security tool capable of auditing logic flows and securing data at rest and in transit.",
      technologies: ["Python", "Cryptography Basics", "Data Validation"],
      keyFeatures: [
        "Input validation and sanitization layers",
        "Secure algorithmic logic handling",
        "Data encryption and hashing protocols",
        "Defensive programming architecture"
      ],
      performance: "Maintains high-speed data processing while running rigorous security checks.",
      outcome: "Deepened practical knowledge of cybersecurity protocols and safe backend engineering.",
      results: "Source code available at: github.com/khushal3706/Security-Mind"
    }
  },
  {
    id: "nexus-ecommerce",
    title: "Nexus Full-Stack E-Commerce",
    category: "Full-Stack Web Application",
    shortDescription: "A comprehensive, high-performance e-commerce platform featuring a custom backend, secure authentication, and real-time inventory.",
    tags: ["Django", "Python", "MongoDB", "JavaScript"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "Nexus is a complete end-to-end e-commerce solution engineered from scratch. It bridges a robust Django Python backend with a dynamic JavaScript frontend to handle complex product filtering, user sessions, and cart management.",
      challenge: "Managing complex relational data between users, products, and transaction histories while ensuring the frontend remains lightning-fast and responsive.",
      approach: "Architected a decoupled system using Django to handle API endpoints and MongoDB to store flexible product data schemas, paired with modern CSS/JS for the UI.",
      solution: "Delivered a fully functional store with JWT authentication, a custom admin dashboard for inventory management, and seamless cart state persistence.",
      technologies: ["Python", "Django", "JavaScript", "MongoDB", "HTML5/CSS3"],
      keyFeatures: [
        "Custom Django REST framework APIs",
        "Secure user authentication and session management",
        "Dynamic product filtering and search capabilities",
        "Interactive JavaScript-driven shopping cart"
      ],
      performance: "API response times optimized to sub-200ms for heavy product queries.",
      outcome: "Demonstrated complete mastery of the Full-Stack lifecycle from database design to frontend deployment.",
      results: "Built a production-ready template for scalable online retail."
    }
  },
  {
    id: "synctask-board",
    title: "SyncTask Collaborative Board",
    category: "Real-Time Web Application",
    shortDescription: "A real-time project management and Kanban board leveraging Firebase for instant state synchronization across multiple users.",
    tags: ["JavaScript", "Firebase", "CSS3", "UI/UX"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    caseStudy: {
      overview: "SyncTask is a modern, interactive task management tool inspired by Jira and Trello. It utilizes Firebase's real-time database capabilities to ensure that when one user moves a task, it instantly updates on every other user's screen.",
      challenge: "Handling complex DOM manipulation for drag-and-drop mechanics while preventing race conditions in the database when multiple users edit simultaneously.",
      approach: "Leveraged modern JavaScript for fluid drag-and-drop UI interactions and integrated Firebase Realtime Database with strict security rules.",
      solution: "Created a flawless, highly visual task manager with instant data reflection, user authentication, and smooth micro-animations.",
      technologies: ["JavaScript", "Firebase (Auth & Realtime DB)", "HTML5", "CSS3"],
      keyFeatures: [
        "Real-time database synchronization via Firebase",
        "Fluid drag-and-drop Kanban board mechanics",
        "Secure Google and Email authentication",
        "Responsive, glassmorphism-inspired UI design"
      ],
      performance: "Zero-latency UI updates utilizing optimistic UI rendering principles.",
      outcome: "Showcased advanced frontend JavaScript skills and real-time database integration.",
      results: "Produced a highly engaging, professional-grade productivity application."
    }
  }
];