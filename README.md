# Mykhailo Yartsun — Portfolio

[![CI](https://github.com/yaamii123/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/yaamii123/portfolio/actions/workflows/ci.yml)

Personal portfolio website showcasing backend development, AI/ML projects, and academic work.

**Live site:** [yartsun.dev](https://yartsun.dev) (deployed on Vercel)

## Highlights

- **Atelier** — Visual fashion search with CLIP + pgvector
- **ChestX-Ray AI** — Multi-label medical imaging with Grad-CAM
- **AI Data Analyst App** — Full-stack data platform ([live demo](https://ai-data-analyst-app-sigma.vercel.app))
- **AI SQL Assistant** — Natural-language SQL with dashboards ([live demo](https://ai-sql.vercel.app))
- **3D Sliding Puzzle** — Cubic 15-puzzle in the browser ([live demo](https://sliding3d.vercel.app))
- **FinTrack** — Personal finance app (backend lead on team project)

## Tech Stack

- React 19 + TypeScript + Vite 7
- React Router (project detail pages)
- Tailwind CSS + shadcn/ui
- i18n (English / Deutsch)
- Vercel Analytics & Speed Insights
- GitHub Actions CI

## Getting Started

```bash
npm install
cp .env.example .env   # then set VITE_FORMSPREE_FORM_ID
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Before Deploying

1. **Add your resume** — Place your CV at `public/resume.pdf`.
2. **Formspree** — Set `VITE_FORMSPREE_FORM_ID` in Vercel env vars (see below).
3. **Analytics** — Vercel Analytics works automatically on Vercel deployments.

## Contact Form (Formspree)

1. Create a form at [formspree.io](https://formspree.io) → email: `yartsun.m@gmail.com`
2. Set `VITE_FORMSPREE_FORM_ID=your_id` in `.env` locally and in Vercel dashboard
3. Redeploy

## Project Structure

```
src/
├── App.tsx                 # Router + analytics
├── data/portfolio.ts       # Projects, skills, experience (structural data)
├── i18n/                   # English & German translations
├── types/portfolio.ts      # TypeScript interfaces
├── pages/
│   ├── Home.tsx            # Main single-page layout
│   └── ProjectDetail.tsx   # /projects/:id case study pages
├── components/portfolio/   # Section components
└── components/ui/          # shadcn/ui primitives
```

## Features

- **Project detail pages** — `/projects/ai-data-analyst` with architecture diagrams
- **EN/DE toggle** — Language switcher in navigation (persisted in localStorage)
- **Certifications section** — Academic training & credentials
- **Formspree contact form** — Direct inbox delivery

## Contact

- **Email:** yartsun.m@gmail.com
- **GitHub:** [yaamii123](https://github.com/yaamii123)
- **LinkedIn:** [Mykhailo Yartsun](https://www.linkedin.com/in/mykhailo-yartsun-340679367/)
