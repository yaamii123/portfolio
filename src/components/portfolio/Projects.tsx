import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';
import SectionHeading from '@/components/portfolio/SectionHeading';
import { projects } from '@/data/portfolio';
import { useTranslation } from '@/i18n/useTranslation';
import type { ProjectCategory } from '@/types/portfolio';

type Filter = 'all' | ProjectCategory;

const FILTERS: Filter[] = ['all', 'ai', 'backend', 'frontend', 'academic'];

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>('all');

  const counts = useMemo(
    () =>
      Object.fromEntries(
        FILTERS.map((f) => [f, f === 'all' ? projects.length : projects.filter((p) => p.categories.includes(f)).length])
      ) as Record<Filter, number>,
    []
  );

  const visible = filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter));
  // Featured projects lead the unfiltered view; a filter shows a uniform grid.
  const ordered =
    filter === 'all' ? [...visible].sort((a, b) => Number(!!b.featured) - Number(!!a.featured)) : visible;

  return (
    <section className="py-24 px-6 relative" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          id="projects-heading"
          title={t.projects.title}
          highlight="Projects"
          subtitle={t.projects.subtitle}
        />

        <div
          role="group"
          aria-label={t.projects.filters.label}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f)}
                className={`inline-flex items-center gap-2 border border-dashed px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${
                  active
                    ? 'border-cyan-400/70 bg-cyan-500/15 text-cyan-300'
                    : 'border-cyan-500/30 text-slate-400 hover:border-cyan-400/60 hover:text-cyan-300'
                }`}
              >
                {t.projects.filters[f]}
                <span className={active ? 'text-cyan-300/80' : 'text-slate-600'}>{counts[f]}</span>
              </button>
            );
          })}
        </div>

        <div
          key={filter}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 animate-in fade-in duration-300 motion-reduce:animate-none"
        >
          {ordered.map((project) => (
            <ProjectCard key={project.id} project={project} large={filter === 'all' && !!project.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}
