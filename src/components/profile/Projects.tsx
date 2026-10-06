import React from 'react';
import { motion } from 'framer-motion';
import { Code, Github, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import { revealProps } from '../ui/reveal';
import { projects, type ProjectLink } from '../../data/projects';

const linkIcons: Record<ProjectLink['kind'], typeof Github> = {
  github: Github,
  youtube: Youtube,
};

const Projects: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div {...revealProps} className="mb-8 md:mb-12">
      <SectionHeading icon={Code}>{t('profile.projects.title')}</SectionHeading>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col">
            {/* 横長と縦長のデモが混在するので、枠の比率を固定して中に収める */}
            <div className="mb-4 aspect-[4/3] overflow-hidden rounded-md bg-surface">
              <picture>
                {/* 「動きを減らす」設定ではアニメーションの代わりに 1 コマ目を見せる */}
                <source
                  media="(prefers-reduced-motion: reduce)"
                  srcSet={project.animation.poster}
                />
                <img
                  src={project.animation.src}
                  width={project.animation.width}
                  height={project.animation.height}
                  alt={t(`profile.projects.items.${project.id}.alt`)}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </picture>
            </div>
            <h4 className="mb-2 font-medium text-fg">
              {t(`profile.projects.items.${project.id}.title`)}
            </h4>
            <p className="mb-3 text-sm text-fg-muted">
              {t(`profile.projects.items.${project.id}.description`)}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-surface px-2 py-1 text-xs text-fg-muted md:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* カードの高さが揃ったときにリンクを下端に寄せる */}
            <div className="mt-auto flex gap-4">
              {project.links.map((link) => {
                const Icon = linkIcons[link.kind];
                return (
                  <a
                    key={link.kind}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-fg-muted hover:text-accent"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {t(`profile.projects.links.${link.kind}`)}
                  </a>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
