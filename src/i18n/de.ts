import type { Translations } from '@/types/portfolio';

export const de: Translations = {
  nav: {
    home: 'Start',
    about: 'Über mich',
    skills: 'Skills',
    experience: 'Erfahrung',
    certifications: 'Zertifikate',
    projects: 'Projekte',
    contact: 'Kontakt',
    cv: 'Lebenslauf',
    downloadCv: 'Lebenslauf herunterladen',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
  },
  hero: {
    badge: 'Offen für Werkstudent- & Praktikumsstellen',
    titleLine1: 'Backend Engineer',
    titleLine2: 'FastAPI · SQL · KI',
    tagline: 'Backend Engineer mit Fokus auf FastAPI, PostgreSQL und KI-gestützte APIs.',
    intro:
      'Information-Engineering-Student an der HAW Hamburg (6. Semester). Ich entwickle FastAPI-Backends und PostgreSQL-Systeme — und integriere ML und LLMs, wenn die Daten es brauchen. Offen für eine Werkstudent- oder Praktikumsstelle in Hamburg.',
    pipelineRaw: 'CSV / SQL',
    pipelineApi: 'FastAPI',
    pipelineDb: 'PostgreSQL',
    pipelineAi: 'ML / KI',
    pipelineAria: 'Datenpipeline: CSV oder SQL, über FastAPI und PostgreSQL, zu ML und KI',
    viewProjects: 'Projekte ansehen',
    downloadCv: 'Lebenslauf herunterladen',
    getInTouch: 'Kontakt aufnehmen',
    scrollToProjects: 'Zu Projekten scrollen',
    github: 'GitHub-Profil',
    linkedin: 'LinkedIn-Profil',
    email: 'E-Mail senden',
  },
  about: {
    title: 'Über mich',
    headingHighlight: 'mich',
    subtitle:
      'Information Engineering an der HAW Hamburg (6. Semester). Ich entwickle FastAPI-Backends und PostgreSQL-Systeme — und integriere ML und LLMs, wenn die Daten es brauchen.',
    education: 'Ausbildung',
    degree1: 'Information Engineering (B.Sc.)',
    school1: 'HAW Hamburg',
    period1: '2023 — heute · 6. Semester',
    spec1: 'Schwerpunkt: Software und Informationstechnik',
    degree2: 'Software Engineering (B.Sc.)',
    school2: 'Kyiv Polytechnic Institute',
    period2: '2021 — 2022',
    languagesTitle: 'Sprachen & Verfügbarkeit',
    languages: 'Sprachen',
    langUk: 'Ukrainisch & Russisch',
    langEn: 'Englisch',
    langDe: 'Deutsch',
    native: 'Muttersprache',
    fluent: 'Fließend',
    intermediate: 'Mittelstufe (B1)',
    availability:
      'Offen für Werkstudent- und Teilzeitstellen in Hamburg. Bis zu 20 Stunden/Woche während des Semesters verfügbar. Erfahrung in internationalen Teams.',
  },
  skills: {
    title: 'Technische Skills',
    headingHighlight: 'Skills',
    subtitle:
      'Technologien aus meinen Projekten — Backend-APIs, Datenbanken, KI/ML und moderne Webentwicklung.',
    categories: {
      languages: 'Programmiersprachen',
      backend: 'Backend & APIs',
      databases: 'Datenbanken',
      aiData: 'KI & Data',
      frontend: 'Frontend',
      devops: 'DevOps & Tools',
    },
  },
  experience: {
    title: 'Erfahrung',
    headingHighlight: 'Erfahrung',
    subtitle:
      'Backend-Entwicklung, KI-Integration und akademische Systemprojekte — von eigenen Produkten bis Teamprojekten.',
    viewProject: 'Projekt ansehen',
    types: {
      collaborative: 'Teamprojekt',
      personal: 'Eigenes Projekt',
      academic: 'Studium',
    },
    items: {
      atelier: {
        title: 'Full-Stack-Entwickler',
        organization: 'Atelier — Visuelle Modesuche',
        description:
          'Visuelles Suchprodukt: Kleidung im Foto erkennen, mit CLIP einbetten und ähnliche Katalogartikel über PostgreSQL + pgvector finden. Hybrid-Ranking aus visuellen, semantischen und Attribut-Signalen; Demo-Modus läuft offline ohne kommerzielle KI-API.',
        highlights: [
          'Austauschbare Detection-, Embedding- und Ranking-Provider hinter FastAPI',
          'pgvector-HNSW-Retrieval — die Suche loopt den Katalog nicht in Python',
          'Next.js-UI über einem Live-Retailer-Katalog mit echten Produktseiten',
        ],
      },
      aiXrays: {
        title: 'ML Engineer',
        organization: 'ChestX-Ray AI — Eigenes Projekt',
        description:
          'Pädagogisches Full-Stack-System für Multi-Label-Befunde auf Thorax-Röntgenbildern mit Grad-CAM. Drei Inferenzmodi (fine-tuned ConvNeXt-B, TorchXRayVision DenseNet, 90/10-Ensemble) plus Metrics-Dashboard für ROC-AUC und F1.',
        highlights: [
          'FastAPI-Inferenz mit ConvNeXt-, DenseNet- und Ensemble-Backends',
          'Grad-CAM-Heatmaps und Modellvergleich in Next.js',
          'Docker Compose für lokalen One-Command-Start',
        ],
      },
      fintrack: {
        title: 'Backend-Entwickler',
        organization: 'FinTrack — Teamprojekt',
        description:
          'Hauptverantwortlicher für das Backend einer Full-Stack-Finanz-App: FastAPI REST API mit JWT-Auth, SQLAlchemy-Modelle, PostgreSQL-Analytics, Budget-Tracking und Gemini-gestütztem Finanz-Coaching.',
        highlights: [
          'REST-Endpunkte für Transaktionen, Budgets und Analytics',
          'Raw-SQL-Reporting und Ausgabenprognosen',
          'Multi-Key Gemini API Fallback für AI Coach und Reports',
        ],
      },
      aiDataAnalyst: {
        title: 'Full-Stack-Entwickler',
        organization: 'AI Data Analyst App — Eigenes Projekt',
        description:
          'Produktionsreife Data-Plattform: Datensätze hochladen, profilieren, EDA und AutoML, Gemini-Chat via RAG, Report-Export. Deployed mit Docker, CI und Live-Demos.',
        highlights: [
          'FastAPI Backend mit SQLite, ML-Pipelines und SSE-Streaming',
          'Next.js Frontend mit Plotly und Playwright E2E-Tests',
          'GitHub Actions CI, Prometheus Metrics und MLflow Tracking',
        ],
      },
      hawProjects: {
        title: 'Software Engineering Student',
        organization: 'HAW Hamburg — Studienprojekte',
        description:
          'Verteilte Systeme und Datenbankprojekte: Java/RMI Robotersystem, normalisiertes PostgreSQL-Schema für Klinik-Workflows und KI-SQL-Assistent.',
        highlights: [
          'Java RMI Client-Server-Architektur mit UML',
          'PostgreSQL-Design mit ER-Diagrammen und Normalisierung',
          'Natural-Language-to-SQL für PostgreSQL',
        ],
      },
    },
  },
  certifications: {
    title: 'Zertifikate & Weiterbildung',
    headingHighlight: 'Zertifikate',
    subtitle: 'Verifizierte Zertifikate in Data Analytics, Python und Business Intelligence.',
    types: {
      certification: 'Zertifikat',
      coursework: 'Studienleistung',
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
    title: 'Meine Projekte',
    headingHighlight: 'Projekte',
    subtitle:
      'Full-Stack- und Backend-Projekte — von KI-Data-Plattformen bis verteilte Systeme und Datenbankdesign.',
    accents: {
      visualSearch: 'Full-Stack · Visuelle Suche',
      medicalAi: 'Full-Stack · Medizinische KI',
      threeDGame: 'Frontend · 3D-Puzzle',
      fullStackAi: 'Full-Stack · KI/ML',
      backendLead: 'Backend Lead · Teamprojekt',
      backendAiDb: 'Backend · KI + Datenbanken',
      javaDistributed: 'Java · Verteilte Systeme',
      postgresDesign: 'PostgreSQL · Datenbankdesign',
      javaOop: 'Java · OOP',
    },
    labels: {
      problem: 'Problem',
      challenge: 'Herausforderung',
      result: 'Ergebnis',
      code: 'Code',
      demo: 'Live Demo',
      viewDetails: 'Details ansehen',
      architecture: 'Architektur',
      components: 'Komponenten',
    },
    architecture: {
      atelier:
        'Next.js spricht nie mit einem Modell. FastAPI übernimmt Detection, CLIP-Embeddings und Hybrid-Ranking; PostgreSQL + pgvector liefert die Top-K-Nachbarn über HNSW-Indizes.',
      aiXrays:
        'Next.js lädt ein Thorax-Röntgenbild zu FastAPI hoch. Das Backend preprocessed, läuft ConvNeXt, DenseNet oder ein 90/10-Ensemble und liefert Befunde plus Grad-CAM-Heatmaps.',
      sliding3d:
        'Puzzle-Logik liegt in einer React-freien Game-Schicht. React Three Fiber rendert ein Mesh pro Würfel; BFS- und A*-Solver laufen im Client ohne Backend.',
      aiDataAnalyst:
        'Next.js Frontend kommuniziert via REST/SSE mit FastAPI. ML-Pipelines speichern Modelle; Gemini erhält nur aggregierte Statistiken.',
      fintrack:
        'React SPA ruft FastAPI mit JWT-Auth auf. PostgreSQL speichert Nutzer, Transaktionen und Budgets; Gemini für AI Coach.',
      aiSqlAssistant:
        'Next.js-Chat streamt FastAPI-Antworten. Gemini generiert read-only SQL gegen hochgeladenes SQLite oder PostgreSQL; JWT und SELECT-only halten Queries sicher.',
    },
    items: {
      atelier: {
        title: 'Atelier — Visuelle Modesuche',
        description:
          'Outfit-Foto hochladen; Atelier erkennt das Kleidungsstück, embeddet es und findet ähnliche Teile in einem Live-Modekatalog mit PostgreSQL + pgvector.',
        role: 'Alleinarbeit — Suchpipeline, Embeddings, Ranking, UI',
        problem:
          'Käufer können ein Outfit beschreiben oder fotografieren, kommen aber nicht von dem Bild zu ähnlichen Teilen in echten Retailer-Katalogen.',
        challenge:
          'Detection, Embeddings und Ranking austauschbar halten — und Nachbarn in SQL holen, statt den Katalog in Python zu loopen.',
        result:
          'FastAPI + Next.js mit CLIP-Embeddings, pgvector-HNSW-Suche, Hybrid-Ranking und Retailer-Feed mit echten Produktseiten.',
      },
      'ai-xrays': {
        title: 'ChestX-Ray AI',
        description:
          'Pädagogische Full-Stack-App für Multi-Label-Befunde auf Thorax-Röntgenbildern mit Grad-CAM-Heatmaps und Modellvergleich.',
        role: 'Alleinarbeit — Modelle, Inferenz-API, Explainability, UI',
        problem:
          'Studierende brauchen einen lokalen Weg, Thorax-Modelle zu prüfen — nicht nur ein Label, sondern wo das Netz hingeschaut hat und wie Modelle divergieren.',
        challenge:
          'Drei Inferenz-Backends (fine-tuned ConvNeXt, TorchXRayVision DenseNet, Ensemble) mit Grad-CAM und Metrics-Dashboard.',
        result:
          'FastAPI + Next.js mit 14 NIH ChestX-ray14-Befunden, Heatmaps, ROC-AUC/F1-Dashboard und Docker Compose für lokale Runs.',
      },
      sliding3d: {
        title: '3D Sliding Puzzle',
        description:
          'Browser-Spiel, das das 15-Puzzle in ein kubisches N×N×N-Gitter erweitert — Würfel gleiten auf X, Y und Z, mit Hinweisen, Undo und Client-Solver.',
        role: 'Alleinarbeit — Puzzle-Logik, Three.js-Rendering, Solver',
        problem:
          'Klassische Sliding Puzzles sind 2D; eine echte dritte Achse braucht kamerabewegte Züge, lösbare Scrambles und Sicht auf innere Schichten.',
        challenge:
          'Spiellogik von Three.js trennen, immer lösbare 3-Achsen-Scrambles erzeugen und 2×2×2 / 3×3×3 lösen, ohne größere Boards einzufrieren.',
        result:
          'Live Vite + React Three Fiber Spiel mit 2×2×2–5×5×5, Layer-Maps, Hints, BFS/A*-Solve und Bestzeiten in localStorage.',
      },
      'ai-data-analyst': {
        title: 'AI Data Analyst App',
        description:
          'Produktionsreife Full-Stack-Plattform für End-to-End-Datenanalyse mit ML und LLM-Chat.',
        role: 'Alleinarbeit — Architektur, Backend, Frontend, Deployment',
        problem:
          'Analysten und Studierende brauchen ein Tool zum Hochladen, Profilieren, Modelltrainieren und Fragenstellen — ohne Boilerplate.',
        challenge:
          'Async ML Jobs orchestrieren, LLM-Kontext begrenzen und Session-State über Pipeline-Schritte halten.',
        result:
          'Live deployed mit CI/CD, Docker, E2E-Tests, AutoML mit SHAP, Gemini-Chat mit RAG und HTML-Report-Export.',
      },
      fintrack: {
        title: 'FinTrack — Finanz-App',
        description:
          'Team-Full-Stack-App für Ausgaben, Budgets, Analytics und KI-Finanzcoaching.',
        role: 'Backend Lead — API-Design, Datenbank, KI-Integration',
        problem:
          'Nutzer haben Schwierigkeiten, Ausgaben zu tracken, Budgets zu setzen und Erkenntnisse aus Transaktionsdaten zu gewinnen.',
        challenge:
          'Sichere Multi-User-Auth, effiziente SQL-Analytics und zuverlässige Gemini-Integration mit Key-Rotation.',
        result:
          'REST API mit JWT, Kategorie-Analytics, Budget-Tracking, CSV-Export und AI Coach — live auf Vercel.',
      },
      'ai-sql-assistant': {
        title: 'AI SQL Assistant',
        description:
          'Natural-Language-SQL-Assistent mit Dashboards — SQLite hochladen oder PostgreSQL verbinden, generiertes SQL prüfen und Insights streamen.',
        role: 'Alleinarbeit — Query-Pipeline, Sicherheit, Auth, Dashboards',
        problem:
          'Wer eine Datenbank erkundet, will Antworten und Charts ohne SQL — generierte Queries müssen aber read-only und prüfbar bleiben.',
        challenge:
          'Korrektes SQL aus Follow-up-Chat, DDL/DML blockieren, Postgres-URIs verschlüsseln und Insights streamen ohne PII.',
        result:
          'Live FastAPI + Next.js mit Gemini, Human-in-the-loop SQL-Freigabe, JWT-Accounts, Auto-Dashboards und SELECT-only Execution.',
      },
      'vacuum-robot': {
        title: 'Staubsauger-Roboter-System',
        description: 'Verteiltes Robotik-Steuerungssystem mit Java RMI.',
        role: 'Entwickler — App-Steuerung, OOP-Design, UML',
        problem:
          'Eine Roboterflotte braucht zentrale App-Steuerung mit zuverlässiger Remote Method Invocation.',
        challenge:
          'Serialisierbare Objektmodelle und resiliente RMI-Kommunikation zwischen App und Roboterservices.',
        result:
          'Funktionierender Client-Server-Prototyp mit UML-Dokumentation und modularer OOP-Architektur.',
      },
      'endoscopy-db': {
        title: 'Endoskopie-Abteilung Datenbank',
        description:
          'Relationale PostgreSQL-Datenbank für Patientenregistrierung, Terminplanung und Protokollierung.',
        role: 'DB-Designer — ER-Modellierung, Normalisierung, SQL',
        problem:
          'Eine Endoskopie-Abteilung brauchte strukturierte Speicherung für Patienten, Termine und Prozeduren.',
        challenge:
          'Klinische Workflows in 3NF modellieren, referentielle Integrität und SQL für Konflikte und Reports.',
        result:
          'Normalisiertes PostgreSQL-Schema mit ER-Diagrammen, Beispieldaten und Report-Queries.',
      },
      'oop-graphical-app': {
        title: 'OOP Grafische App',
        description: 'Interaktive Java-Simulation mit objektorientiertem Design und GUI.',
        role: 'Entwickler — Klassendesign, GUI-Verhalten, Patterns',
        problem:
          'OOP-Prinzipien (Encapsulation, Vererbung, Polymorphismus) interaktiv demonstrieren.',
        challenge:
          'Modulare Klassen mit sauberer Trennung von Modell-Logik und Darstellung.',
        result:
          'Spielbare Java-GUI mit dokumentierter Klassenhierarchie und wiederverwendbaren Komponenten.',
      },
    },
  },
  contact: {
    title: 'Kontakt',
    headingHighlight: 'Kontakt',
    subtitle:
      'Offen für Werkstudent- und Praktikumsstellen in Backend, Full-Stack oder Data Engineering.',
    getInTouch: 'Kontakt aufnehmen',
    intro:
      'Schreib mir über das Formular — Nachrichten landen direkt in meinem Posteingang. Antwort in der Regel innerhalb von 1–2 Werktagen.',
    email: 'E-Mail',
    copyEmail: 'E-Mail kopieren',
    copied: 'Kopiert',
    linkedin: 'LinkedIn',
    connectLinkedin: 'Auf LinkedIn verbinden',
    location: 'Standort',
    availability: 'Verfügbarkeit',
    availabilityText:
      '6. Semester an der HAW Hamburg. Teilzeit bis 20 Stunden/Woche während des Semesters.',
    name: 'Name',
    namePlaceholder: 'Ihr Name',
    emailPlaceholder: 'ihre.email@beispiel.de',
    message: 'Nachricht',
    messagePlaceholder: 'Erzählen Sie mir von der Stelle...',
    sendMessage: 'Nachricht senden',
    sending: 'Wird gesendet...',
    openEmailApp: 'In E-Mail-App öffnen',
    sentApi: 'Nachricht gesendet — danke! Ich melde mich bald.',
    sentMailto:
      'Ihre E-Mail-App sollte sich mit einer vorausgefüllten Nachricht öffnen.',
    errorPrefix: 'Etwas ist schiefgelaufen.',
    errorSuffix: 'Bitte schreiben Sie mir direkt an',
    formspreeHint:
      'Formspree nicht konfiguriert — VITE_FORMSPREE_FORM_ID in .env setzen.',
  },
  footer: {
    builtWith: 'Erstellt mit React & Tailwind CSS',
  },
  projectDetail: {
    backToProjects: 'Zurück zu Projekten',
    notFound: 'Projekt nicht gefunden',
    notFoundDesc: 'Das gesuchte Projekt existiert nicht.',
    goHome: 'Zur Startseite',
  },
  common: {
    language: 'Sprache',
    english: 'English',
    german: 'Deutsch',
  },
};
