import type {
  Certification,
  ExperienceItem,
  NavSection,
  Project,
  SiteConfig,
  SkillGroup,
} from '@/types/portfolio';

export const siteConfig: SiteConfig = {
  name: 'Mykhailo Yartsun',
  title: {
    en: 'Mykhailo Yartsun | Backend Engineer · Data · APIs · AI',
    de: 'Mykhailo Yartsun | Backend Engineer · Data · APIs · KI',
  },
  description: {
    en: 'Information Engineering student at HAW Hamburg. Backend developer specializing in Python, FastAPI, PostgreSQL, Java, and AI/ML. Open to Werkstudent and internship roles in Hamburg, Germany.',
    de: 'Information Engineering Student an der HAW Hamburg. Backend-Entwickler mit Schwerpunkt Python, FastAPI, PostgreSQL, Java und KI/ML. Offen für Werkstudent- und Praktikumsstellen in Hamburg.',
  },
  email: 'yartsun.m@gmail.com',
  location: {
    en: 'Hamburg, Germany',
    de: 'Hamburg, Deutschland',
  },
  resumeUrl: '/resume.pdf',
  github: 'https://github.com/yaamii123',
  linkedin: 'https://www.linkedin.com/in/mykhailo-yartsun-340679367/',
  siteUrl: 'https://yartsun.dev',
};

export const heroTechStack: string[] = [
  'FastAPI',
  'PostgreSQL',
  'Python',
  'Docker',
  'Java',
  'REST APIs',
  'AI Integration',
];

export const navSections: NavSection[] = [
  { id: 'home', labelKey: 'home' },
  { id: 'about', labelKey: 'about' },
  { id: 'skills', labelKey: 'skills' },
  { id: 'experience', labelKey: 'experience' },
  { id: 'certifications', labelKey: 'certifications' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'contact', labelKey: 'contact' },
];

export const skillGroups: SkillGroup[] = [
  {
    categoryKey: 'languages',
    skills: ['Python', 'Java', 'SQL', 'TypeScript', 'JavaScript', 'C#', 'C++'],
  },
  {
    categoryKey: 'backend',
    skills: ['FastAPI', 'REST APIs', 'JWT Authentication', 'SQLAlchemy', 'Pydantic', 'Java RMI'],
  },
  {
    categoryKey: 'databases',
    skills: ['PostgreSQL', 'pgvector', 'SQLite', 'MySQL', 'Database Design', 'ER Modeling', 'Normalization'],
  },
  {
    categoryKey: 'aiData',
    skills: [
      'Machine Learning',
      'PyTorch',
      'CLIP',
      'scikit-learn',
      'XGBoost',
      'Gemini API',
      'LLM Integration',
      'RAG',
      'Pandas',
      'NumPy',
    ],
  },
  {
    categoryKey: 'frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Three.js', 'Plotly.js'],
  },
  {
    categoryKey: 'devops',
    skills: ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'pytest', 'Playwright', 'Linux'],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 'atelier',
    contentKey: 'atelier',
    period: 'Sep 2026',
    typeKey: 'personal',
    tags: ['FastAPI', 'PostgreSQL', 'pgvector', 'CLIP', 'Next.js'],
    link: 'https://github.com/yaamii123/ai-fahsion-search',
  },
  {
    id: 'ai-xrays',
    contentKey: 'aiXrays',
    period: 'Jul 2026',
    typeKey: 'personal',
    tags: ['PyTorch', 'FastAPI', 'ConvNeXt', 'Grad-CAM', 'Next.js'],
    link: 'https://github.com/yaamii123/ai-xrays',
  },
  {
    id: 'fintrack',
    contentKey: 'fintrack',
    period: '2025 — Present',
    typeKey: 'collaborative',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Gemini API', 'JWT'],
    link: 'https://github.com/solomiia222/fintrack-frontend2',
  },
  {
    id: 'ai-data-analyst',
    contentKey: 'aiDataAnalyst',
    period: '2025 — 2026',
    typeKey: 'personal',
    tags: ['Python', 'FastAPI', 'Next.js', 'scikit-learn', 'Docker', 'Gemini'],
    link: 'https://github.com/yaamii123/ai-data-analyst-app',
  },
  {
    id: 'haw-projects',
    contentKey: 'hawProjects',
    period: '2023 — Present',
    typeKey: 'academic',
    tags: ['Java', 'PostgreSQL', 'RMI', 'SQL', 'OOP'],
  },
];

export const certifications: Certification[] = [
  {
    id: 'power-bi',
    titleKey: 'powerBi',
    issuerKey: 'powerBi',
    date: 'Nov 2025',
    type: 'certification',
    url: 'https://www.datacamp.com/skill-verification/ITPB0017314211139',
  },
  {
    id: 'pandas',
    titleKey: 'pandas',
    issuerKey: 'pandas',
    date: 'Nov 2025',
    type: 'certification',
    url: 'https://www.datacamp.com/skill-verification/DMP0014323977406',
  },
  {
    id: 'python-101',
    titleKey: 'python101',
    issuerKey: 'python101',
    date: 'Nov 2025',
    type: 'certification',
    url: 'https://courses.cognitiveclass.ai/certificates/7a315220af834f8c9dd46ce17efb6c95',
  },
];

export const projects: Project[] = [
  {
    id: 'atelier',
    gradient: 'from-fuchsia-600 via-pink-600 to-rose-700',
    accentKey: 'visualSearch',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'CLIP', 'Next.js', 'Docker'],
    date: 'Sep 2026',
    github: 'https://github.com/yaamii123/ai-fahsion-search',
    featured: true,
    architecture: {
      summaryKey: 'atelier',
      diagram: `┌──────────────┐    image     ┌──────────────────┐
│  Next.js UI  │ ───────────► │  FastAPI Search  │
│   Atelier    │ ◄─────────── │  Hybrid Ranking  │
└──────────────┘   results    └────────┬─────────┘
                                       │
               ┌───────────────────────┼───────────────────────┐
               ▼                       ▼                       ▼
        ┌────────────┐         ┌────────────┐          ┌────────────┐
        │ PostgreSQL │         │ CLIP Embed │          │ Detection  │
        │  pgvector  │         │  Retrieval │          │  + Attrs   │
        └────────────┘         └────────────┘          └────────────┘`,
      components: ['Next.js', 'FastAPI', 'PostgreSQL', 'pgvector', 'CLIP', 'SQLAlchemy', 'Docker'],
    },
  },
  {
    id: 'ai-xrays',
    gradient: 'from-sky-600 via-cyan-600 to-teal-700',
    accentKey: 'medicalAi',
    tags: ['Python', 'PyTorch', 'FastAPI', 'ConvNeXt', 'Grad-CAM', 'Next.js', 'Docker'],
    date: 'Jul 2026',
    github: 'https://github.com/yaamii123/ai-xrays',
    featured: true,
    architecture: {
      summaryKey: 'aiXrays',
      diagram: `┌──────────────┐    X-ray     ┌──────────────────┐
│  Next.js UI  │ ───────────► │  FastAPI Infer   │
│   Heatmaps   │ ◄─────────── │  Grad-CAM        │
└──────────────┘              └────────┬─────────┘
                                       │
               ┌───────────────────────┼───────────────────────┐
               ▼                       ▼                       ▼
        ┌────────────┐         ┌────────────┐          ┌────────────┐
        │ ConvNeXt-B │         │  DenseNet  │          │  Ensemble  │
        │ Fine-tuned │         │    (XRV)   │          │    90/10   │
        └────────────┘         └────────────┘          └────────────┘`,
      components: ['Next.js', 'FastAPI', 'PyTorch', 'ConvNeXt', 'TorchXRayVision', 'Grad-CAM', 'Docker'],
    },
  },
  {
    id: 'sliding3d',
    gradient: 'from-indigo-600 via-blue-600 to-cyan-700',
    accentKey: 'threeDGame',
    tags: ['TypeScript', 'React', 'Three.js', 'Vite', 'A*', 'BFS'],
    date: 'Sep 2026',
    github: 'https://github.com/yaamii123/sliding3d',
    demo: 'https://sliding3d.vercel.app',
    architecture: {
      summaryKey: 'sliding3d',
      diagram: `┌─────────────────────────────────────────┐
│              React + R3F                │
│  HUD / Timer / Layers  │  Three.js Cube │
└──────────────┬─────────┴────────┬───────┘
               │                  │
               ▼                  ▼
        ┌────────────┐     ┌────────────┐
        │ game/ logic│     │   Solver   │
        │ (no Three) │     │  BFS / A*  │
        └────────────┘     └────────────┘`,
      components: ['React', 'Three.js', 'React Three Fiber', 'Vite', 'TypeScript'],
    },
  },
  {
    id: 'ai-data-analyst',
    gradient: 'from-blue-600 via-indigo-600 to-purple-700',
    accentKey: 'fullStackAi',
    tags: ['Python', 'FastAPI', 'Next.js', 'scikit-learn', 'Gemini', 'Docker', 'CI/CD'],
    date: '2025 — 2026',
    github: 'https://github.com/yaamii123/ai-data-analyst-app',
    demo: 'https://ai-data-analyst-app-sigma.vercel.app',
    featured: true,
    architecture: {
      summaryKey: 'aiDataAnalyst',
      diagram: `┌─────────────────┐   REST / SSE   ┌──────────────────┐
│   Next.js UI    │ ◄────────────► │  FastAPI Backend │
│  Plotly Charts  │                │  ML Orchestrator │
└─────────────────┘                └────────┬─────────┘
                                            │
                    ┌───────────────────────┼───────────────────────┐
                    ▼                       ▼                       ▼
             ┌────────────┐         ┌────────────┐          ┌────────────┐
             │   SQLite   │         │ ML Models  │          │ Gemini API │
             │  Sessions  │         │  (joblib)  │          │  Chat/RAG  │
             └────────────┘         └────────────┘          └────────────┘`,
      components: ['Next.js 15', 'FastAPI', 'SQLite', 'scikit-learn', 'Gemini', 'Docker', 'GitHub Actions'],
    },
  },
  {
    id: 'fintrack',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    accentKey: 'backendLead',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'Gemini API', 'JWT'],
    date: '2025 — Present',
    github: 'https://github.com/solomiia222/fintrack-frontend2',
    demo: 'https://fintrack-ai-tawny.vercel.app',
    featured: true,
    architecture: {
      summaryKey: 'fintrack',
      diagram: `┌─────────────────┐      HTTPS       ┌──────────────────┐
│   React SPA     │ ◄──────────────► │  FastAPI Backend │
│  Vercel Deploy  │     JWT Auth     │  SQLAlchemy ORM  │
└─────────────────┘                  └────────┬─────────┘
                                              │
                              ┌───────────────┼───────────────┐
                              ▼               ▼               ▼
                       ┌────────────┐  ┌──────────┐  ┌────────────┐
                       │ PostgreSQL │  │ Gemini   │  │ CSV Export │
                       │ Users/Txns │  │ AI Coach │  │ Analytics  │
                       └────────────┘  └──────────┘  └────────────┘`,
      components: ['React', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'Gemini API'],
    },
  },
  {
    id: 'ai-sql-assistant',
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-700',
    accentKey: 'backendAiDb',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'SQLite', 'Gemini', 'Next.js', 'JWT'],
    date: '2026',
    github: 'https://github.com/yaamii123/ai-sql',
    demo: 'https://ai-sql.vercel.app',
    featured: true,
    architecture: {
      summaryKey: 'aiSqlAssistant',
      diagram: `┌──────────────┐   NL / SQL   ┌──────────────────┐
│  Next.js UI  │ ◄──────────► │ FastAPI + Gemini │
│ Chat/Charts  │   JWT / SSE  │ Query Pipeline   │
└──────────────┘              └────────┬─────────┘
                                       │
               ┌───────────────────────┼───────────────────────┐
               ▼                       ▼                       ▼
        ┌────────────┐         ┌────────────┐          ┌────────────┐
        │ SQLite /   │         │ Read-only  │          │  Dashboard │
        │ PostgreSQL │         │  SELECT    │          │   Charts   │
        └────────────┘         └────────────┘          └────────────┘`,
      components: ['Next.js', 'FastAPI', 'Gemini', 'PostgreSQL', 'SQLite', 'JWT', 'SSE'],
    },
  },
  {
    id: 'vacuum-robot',
    gradient: 'from-slate-600 via-gray-600 to-zinc-700',
    accentKey: 'javaDistributed',
    tags: ['Java', 'RMI', 'OOP', 'UML', 'Client-Server'],
    date: '04/2025 — 07/2025',
    github:
      'https://gitlab.com/se_group2025/se-development-lab/-/tree/main/JMS-robot-app-Mykhailo-Tomiwa?ref_type=heads',
  },
  {
    id: 'endoscopy-db',
    gradient: 'from-rose-600 via-red-600 to-orange-700',
    accentKey: 'postgresDesign',
    tags: ['PostgreSQL', 'SQL', 'ER Diagrams', 'Normalization'],
    date: '04/2025 — 06/2025',
  },
  {
    id: 'oop-graphical-app',
    gradient: 'from-amber-600 via-orange-600 to-yellow-700',
    accentKey: 'javaOop',
    tags: ['Java', 'OOP', 'GUI', 'Design Patterns'],
    date: '04/2024 — 07/2024',
    github: 'https://github.com/Crab1k/Squirrel/',
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
