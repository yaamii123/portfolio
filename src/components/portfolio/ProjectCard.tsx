import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProjectVisual from '@/components/portfolio/ProjectVisual';
import type { Project } from '@/types/portfolio';
import { useTranslation } from '@/i18n/useTranslation';

const MAX_TAGS = 5;

interface ProjectCardProps {
  project: Project;
  /** Wide horizontal layout, used for featured projects in the unfiltered view. */
  large?: boolean;
}

export default function ProjectCard({ project, large = false }: ProjectCardProps) {
  const { t } = useTranslation();
  const content = t.projects.items[project.id];
  const accent = t.projects.accents[project.accentKey];

  if (!content) return null;

  const visibleTags = project.tags.slice(0, MAX_TAGS);
  const hiddenTags = project.tags.length - visibleTags.length;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden border border-dashed border-cyan-500/30 bg-[#0d1f3c]/40 hover:border-cyan-400/60 transition-colors ${
        large ? 'md:col-span-2 lg:col-span-3 md:flex-row' : ''
      }`}
    >
      <ProjectVisual
        project={project}
        alt={content.title}
        className={`aspect-[416/204] shrink-0 border-b border-dashed border-cyan-500/30 opacity-90 group-hover:opacity-100 transition-opacity ${
          large ? 'md:w-1/2 md:aspect-auto md:min-h-[17rem] md:border-b-0 md:border-r' : ''
        }`}
      />

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-2 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.12em]">
          <span className="min-w-0 truncate text-cyan-400/70" title={accent}>
            {accent}
          </span>
          <span className="shrink-0 whitespace-nowrap text-slate-500">{project.date}</span>
        </div>

        <h3 className={`font-bold text-white ${large ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          <Link
            to={`/projects/${project.id}`}
            className="hover:text-cyan-300 transition-colors after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:ring-1 focus-visible:after:ring-cyan-400"
          >
            {content.title}
          </Link>
        </h3>

        {large && content.role && (
          <p className="mt-2 font-mono text-xs text-cyan-300/80">{content.role}</p>
        )}

        <p className={`mt-3 text-slate-300 ${large ? 'leading-relaxed' : 'line-clamp-3 text-sm'}`}>
          {content.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {visibleTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-cyan-500/5 text-cyan-300/80 border border-dashed border-cyan-500/25 rounded-sm font-mono text-[11px]"
            >
              {tag}
            </Badge>
          ))}
          {hiddenTags > 0 && (
            <span className="inline-flex items-center px-1.5 font-mono text-[11px] text-slate-500">
              +{hiddenTags}
            </span>
          )}
        </div>

        <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-5">
          <Button variant="outline" size="sm" className="blueprint-btn-outline" asChild>
            <Link to={`/projects/${project.id}`}>
              {t.projects.labels.viewDetails}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          {project.github && (
            <Button variant="outline" size="sm" className="blueprint-btn-outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                {t.projects.labels.code}
              </a>
            </Button>
          )}
          {project.demo && (
            <Button size="sm" className="blueprint-btn-primary" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                {t.projects.labels.demo}
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
