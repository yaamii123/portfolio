import type { Translations } from '@/types/portfolio';

export type { Translations };

export const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    certifications: 'Certifications',
    projects: 'Projects',
    contact: 'Contact',
    cv: 'CV',
    downloadCv: 'Download CV',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    badge: 'Open to Werkstudent & internship opportunities',
    titleLine1: 'Backend Engineer',
    titleLine2: 'FastAPI · SQL · AI',
    tagline: 'Backend Engineer specializing in FastAPI, PostgreSQL, and AI-powered APIs.',
    intro:
      'Information Engineering student at HAW Hamburg (6th semester). I build FastAPI backends and PostgreSQL systems — then wire in ML and LLMs when the data needs it. Open for a Werkstudent or internship role in Hamburg.',
    pipelineRaw: 'CSV / SQL',
    pipelineApi: 'FastAPI',
    pipelineDb: 'PostgreSQL',
    pipelineAi: 'ML / AI',
    pipelineAria: 'Data pipeline: CSV or SQL, through FastAPI and PostgreSQL, to ML and AI',
    viewProjects: 'View My Projects',
    downloadCv: 'Download CV',
    getInTouch: 'Get In Touch',
    scrollToProjects: 'Scroll to projects',
    github: 'GitHub profile',
    linkedin: 'LinkedIn profile',
    email: 'Send email',
  },
  about: {
    title: 'About Me',
    headingHighlight: 'Me',
    subtitle:
      "Information Engineering student at HAW Hamburg (6th semester). I build FastAPI backends and PostgreSQL systems — then wire in ML and LLMs when the data needs it.",
    education: 'Education',
    degree1: 'Information Engineering (B.Sc.)',
    school1: 'HAW Hamburg',
    period1: '2023 — Present · 6th Semester',
    spec1: 'Specialization: Software and Information Technology',
    degree2: 'Software Engineering (B.Sc.)',
    school2: 'Kyiv Polytechnic Institute',
    period2: '2021 — 2022',
    languagesTitle: 'Languages & Availability',
    languages: 'Languages',
    langUk: 'Ukrainian & Russian',
    langEn: 'English',
    langDe: 'German',
    native: 'Native',
    fluent: 'Fluent',
    intermediate: 'Intermediate (B1)',
    availability:
      'Open to Werkstudent and part-time software engineering roles in Hamburg. Available up to 20 hours/week during the semester. Strong teamwork and communication in international environments.',
  },
  skills: {
    title: 'Technical Skills',
    headingHighlight: 'Skills',
    subtitle:
      'Technologies I use in projects — backend APIs, databases, AI/ML, and modern web development.',
    categories: {
      languages: 'Languages',
      backend: 'Backend & APIs',
      databases: 'Databases',
      aiData: 'AI & Data',
      frontend: 'Frontend',
      devops: 'DevOps & Tools',
    },
  },
  experience: {
    title: 'Experience',
    headingHighlight: 'Experience',
    subtitle:
      'Backend development, AI integration, and academic systems work — from personal products to team projects.',
    viewProject: 'View project',
    types: {
      collaborative: 'Collaborative',
      personal: 'Personal',
      academic: 'Academic',
    },
    items: {
      atelier: {
        title: 'Full-Stack Developer',
        organization: 'Atelier — Visual Fashion Search',
        description:
          'Built a visual search product that detects garments in a photo, embeds them with CLIP, and retrieves similar catalog items from PostgreSQL + pgvector. Hybrid ranking combines visual, semantic, and attribute signals; demo mode runs offline without a commercial AI API.',
        highlights: [
          'Swap-friendly detection, embedding, and ranking providers behind FastAPI',
          'pgvector HNSW retrieval so search never loops the catalog in Python',
          'Next.js UI over a live retailer catalog with real product-page links',
        ],
      },
      aiXrays: {
        title: 'ML Engineer',
        organization: 'ChestX-Ray AI — Personal Project',
        description:
          'Educational full-stack system for multi-label chest X-ray findings with Grad-CAM explainability. Three inference modes (fine-tuned ConvNeXt-B, TorchXRayVision DenseNet, 90/10 ensemble) plus a metrics dashboard for ROC-AUC and F1.',
        highlights: [
          'FastAPI inference API with ConvNeXt, DenseNet, and ensemble backends',
          'Grad-CAM heatmaps and side-by-side model comparison in Next.js',
          'Docker Compose local stack for one-command startup',
        ],
      },
      fintrack: {
        title: 'Backend Developer',
        organization: 'FinTrack — Team Project',
        description:
          'Primary backend contributor on a full-stack personal finance app. Built the FastAPI REST API with JWT auth, SQLAlchemy models, PostgreSQL analytics queries, budget tracking, CSV export, and Gemini-powered financial coaching endpoints.',
        highlights: [
          'Designed REST endpoints for transactions, budgets, and analytics',
          'Implemented raw SQL reporting queries and spending predictions',
          'Integrated multi-key Gemini API fallback for AI coach and reports',
        ],
      },
      aiDataAnalyst: {
        title: 'Full-Stack Developer',
        organization: 'AI Data Analyst App — Personal Project',
        description:
          'Designed and shipped a production-style data platform: upload datasets, profile and clean data, run EDA and AutoML, chat with Gemini via RAG, and export reports. Deployed with Docker, CI, and live demos on Vercel and Render.',
        highlights: [
          'FastAPI backend with SQLite persistence, ML pipelines, and SSE streaming',
          'Next.js frontend with Plotly visualizations and Playwright E2E tests',
          'GitHub Actions CI, Prometheus metrics, and MLflow experiment tracking',
        ],
      },
      hawProjects: {
        title: 'Software Engineering Student',
        organization: 'HAW Hamburg — Academic Projects',
        description:
          'Delivered distributed systems and database projects including a Java/RMI robot control system, a normalized PostgreSQL schema for clinical workflows, and an AI-assisted SQL query tool for database exploration.',
        highlights: [
          'Java RMI client-server architecture with UML modeling',
          'PostgreSQL database design with ER diagrams and normalization',
          'Natural-language-to-SQL assistant for PostgreSQL databases',
        ],
      },
    },
  },
  certifications: {
    title: 'Certifications & Training',
    headingHighlight: 'Certifications',
    subtitle: 'Verified credentials in data analytics, Python, and business intelligence.',
    types: {
      certification: 'Certification',
      coursework: 'Coursework',
    },
    items: {
      powerBi: {
        title: 'Introduction to Power BI',
        issuer: 'DataCamp',
      },
      pandas: {
        title: 'Data Manipulation with pandas',
        issuer: 'DataCamp',
      },
      python101: {
        title: 'Python 101 for Data Science',
        issuer: 'Cognitive Class',
      },
    },
  },
  projects: {
    title: 'My Projects',
    headingHighlight: 'Projects',
    subtitle:
      'Full-stack and backend projects — from AI-powered data platforms to distributed systems and database design.',
    accents: {
      visualSearch: 'Full-Stack · Visual Search',
      medicalAi: 'Full-Stack · Medical AI',
      threeDGame: 'Frontend · 3D Puzzle',
      fullStackAi: 'Full-Stack · AI/ML',
      backendLead: 'Backend Lead · Team Project',
      backendAiDb: 'Backend · AI + Databases',
      javaDistributed: 'Java · Distributed Systems',
      postgresDesign: 'PostgreSQL · Database Design',
      javaOop: 'Java · OOP',
    },
    labels: {
      problem: 'Problem',
      challenge: 'Challenge',
      result: 'Result',
      code: 'Code',
      demo: 'Live Demo',
      viewDetails: 'View Details',
      architecture: 'Architecture',
      components: 'Key Components',
    },
    architecture: {
      atelier:
        'Next.js never talks to a model. FastAPI runs detection, CLIP embeddings, and hybrid ranking; PostgreSQL + pgvector returns the top-K neighbors over HNSW indexes.',
      aiXrays:
        'Next.js uploads a chest X-ray to FastAPI. The backend preprocesses the image, runs ConvNeXt, DenseNet, or a 90/10 ensemble, and returns findings plus Grad-CAM heatmaps.',
      sliding3d:
        'Puzzle logic lives in a React-free game layer. React Three Fiber renders one mesh per cube; BFS and budgeted A* solvers run in the client with no backend.',
      aiDataAnalyst:
        'Next.js frontend communicates with a FastAPI backend via REST and SSE. ML pipelines persist models to disk; Gemini receives aggregated stats only.',
      fintrack:
        'React SPA calls a FastAPI backend with JWT auth. PostgreSQL stores users, transactions, and budgets; Gemini powers AI coach endpoints.',
      aiSqlAssistant:
        'Next.js chat UI streams FastAPI responses. Gemini generates read-only SQL against uploaded SQLite or connected PostgreSQL; JWT auth and SELECT-only guards keep queries safe.',
    },
    items: {
      atelier: {
        title: 'Atelier — Visual Fashion Search',
        description:
          'Upload an outfit photo; Atelier detects the garment, embeds it, and finds similar pieces in a live fashion catalog with PostgreSQL + pgvector.',
        role: 'Sole developer — search pipeline, embeddings, ranking, UI',
        problem:
          'Shoppers can describe or photograph an outfit but still cannot jump from that image to similar pieces across real retailer catalogs.',
        challenge:
          'Keeping detection, embeddings, and ranking swappable while retrieving neighbors in SQL instead of looping the catalog in Python.',
        result:
          'FastAPI + Next.js product with CLIP embeddings, pgvector HNSW search, hybrid ranking, and a retailer feed catalog that links to real product pages.',
      },
      'ai-xrays': {
        title: 'ChestX-Ray AI',
        description:
          'Educational full-stack app for multi-label chest X-ray findings with Grad-CAM heatmaps and side-by-side model comparison.',
        role: 'Sole developer — models, inference API, explainability, UI',
        problem:
          'Students need a local way to inspect chest X-ray models — not just a class label, but where the network looked and how models disagree.',
        challenge:
          'Serving three inference backends (fine-tuned ConvNeXt, TorchXRayVision DenseNet, ensemble) with Grad-CAM overlays and a metrics dashboard.',
        result:
          'FastAPI + Next.js stack with 14 NIH ChestX-ray14 findings, heatmaps, ROC-AUC/F1 dashboard, and Docker Compose for local runs.',
      },
      sliding3d: {
        title: '3D Sliding Puzzle',
        description:
          'Browser game that extends the 15-puzzle into a cubic N×N×N grid — cubes slide on X, Y, and Z, with hints, undo, and an in-client solver.',
        role: 'Sole developer — puzzle logic, Three.js rendering, solver',
        problem:
          'Classic sliding puzzles are 2D; a genuine third axis needs camera-aware movement, solvable scrambles, and a way to see inner layers.',
        challenge:
          'Separating game logic from Three.js, generating always-solvable 3-axis scrambles, and solving 2×2×2 / 3×3×3 without freezing larger boards.',
        result:
          'Live Vite + React Three Fiber game with 2×2×2–5×5×5 sizes, layer maps, hints, BFS/A* solve, and best-time records in localStorage.',
      },
      'ai-data-analyst': {
        title: 'AI Data Analyst App',
        description:
          'Production-style full-stack platform for end-to-end tabular data analysis with ML and LLM chat.',
        role: 'Sole developer — architecture, backend, frontend, deployment',
        problem:
          'Analysts and students need a single tool to upload messy CSVs, understand data quality, train models, and ask questions — without writing boilerplate code for each step.',
        challenge:
          'Orchestrating async ML jobs, keeping LLM context within token limits, and maintaining session state across a multi-step pipeline.',
        result:
          'Live deployed app with CI/CD, Docker, E2E tests, AutoML with SHAP explainability, Gemini chat with RAG, and HTML report export.',
      },
      fintrack: {
        title: 'FinTrack — Personal Finance App',
        description:
          'Team full-stack app for expense tracking, budgets, spending analytics, and AI-powered financial coaching.',
        role: 'Backend lead — API design, database layer, AI integration',
        problem:
          'Users struggle to track spending across categories, set realistic budgets, and get actionable insights from raw transaction data.',
        challenge:
          'Building secure multi-user auth, efficient SQL analytics queries, and reliable Gemini API integration with key rotation and fallbacks.',
        result:
          'REST API with JWT auth, category analytics, budget tracking, CSV export, spending predictions, and AI coach/report endpoints powering a live Vercel frontend.',
      },
      'ai-sql-assistant': {
        title: 'AI SQL Assistant',
        description:
          'Natural-language SQL assistant with instant dashboards — upload SQLite or connect PostgreSQL, review generated SQL, and stream insights.',
        role: 'Sole developer — query pipeline, safety, auth, dashboards',
        problem:
          'People exploring a database want answers and charts without writing SQL, but generated queries must stay read-only and reviewable.',
        challenge:
          'Generating correct SQL from follow-up chat, blocking DDL/DML, encrypting Postgres URIs, and streaming insights without leaking PII.',
        result:
          'Live FastAPI + Next.js app with Gemini, human-in-the-loop SQL approval, JWT accounts, auto dashboards, and SELECT-only execution.',
      },
      'vacuum-robot': {
        title: 'Vacuum Cleaner Robot System',
        description:
          'Distributed robotic control system with Java RMI for client-server communication.',
        role: 'Developer — app-side control module, OOP design, UML modeling',
        problem:
          'A vacuum robot fleet needs centralized app-side control with reliable remote method invocation across distributed components.',
        challenge:
          'Designing serializable object models and resilient RMI communication between control app and robot services.',
        result:
          'Working client-server prototype with UML documentation and modular OOP architecture for robot command and status handling.',
      },
      'endoscopy-db': {
        title: 'Endoscopy Department Database',
        description:
          'Relational PostgreSQL database for patient registration, scheduling, and procedure documentation.',
        role: 'Database designer — ER modeling, normalization, SQL queries',
        problem:
          'An endoscopy department needed structured data storage for patients, appointments, and procedures with reporting and access control.',
        challenge:
          'Modeling clinical workflows in 3NF, defining referential integrity, and writing SQL for scheduling conflicts and department reports.',
        result:
          'Fully normalized PostgreSQL schema with ER diagrams, sample data, and query sets for registration, scheduling, and reporting.',
      },
      'oop-graphical-app': {
        title: 'OOP Graphical App',
        description:
          'Interactive Java simulation demonstrating object-oriented design with a graphical interface.',
        role: 'Developer — class design, GUI behavior, design patterns',
        problem:
          'Demonstrate OOP principles (encapsulation, inheritance, polymorphism) in an interactive visual simulation.',
        challenge:
          'Structuring modular classes with clean separation between model logic and visual representation.',
        result:
          'Playable Java GUI app with documented class hierarchy and reusable behavioral components.',
      },
    },
  },
  contact: {
    title: "Let's Connect",
    headingHighlight: 'Connect',
    subtitle:
      'Open to Werkstudent and internship opportunities in backend, full-stack, or data engineering.',
    getInTouch: 'Get in touch',
    intro:
      'Send a message through the form — it delivers directly to my inbox. I typically respond within 1–2 business days.',
    email: 'Email',
    copyEmail: 'Copy email',
    copied: 'Copied',
    linkedin: 'LinkedIn',
    connectLinkedin: 'Connect on LinkedIn',
    location: 'Location',
    availability: 'Availability',
    availabilityText:
      '6th semester at HAW Hamburg. Available for part-time roles up to 20 hours/week during the semester.',
    name: 'Name',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your.email@example.com',
    message: 'Message',
    messagePlaceholder: 'Tell me about the opportunity...',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    openEmailApp: 'Open in Email App',
    sentApi: 'Message sent — thank you! I will get back to you soon.',
    sentMailto:
      'Your email app should open with a pre-filled message. Send it from there to reach me.',
    errorPrefix: 'Something went wrong.',
    errorSuffix: 'Please email me directly at',
    formspreeHint:
      'Formspree not configured — add VITE_FORMSPREE_FORM_ID to .env for direct delivery.',
  },
  footer: {
    builtWith: 'Built with React & Tailwind CSS',
  },
  projectDetail: {
    backToProjects: 'Back to Projects',
    notFound: 'Project not found',
    notFoundDesc: 'The project you are looking for does not exist.',
    goHome: 'Go to homepage',
  },
  common: {
    language: 'Language',
    english: 'English',
    german: 'Deutsch',
  },
};
