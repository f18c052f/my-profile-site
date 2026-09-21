import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import { revealProps } from '../ui/reveal';

/** Tailwind の md ブレークポイント。デスクトップでは詳細を常に開いておく */
const DESKTOP_QUERY = '(min-width: 768px)';

function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(DESKTOP_QUERY).matches);

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return isDesktop;
}

const Career: React.FC = () => {
  const { t } = useTranslation();
  const isDesktop = useIsDesktop();
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <motion.div {...revealProps} className="mb-8 md:mb-12">
      <SectionHeading icon={Briefcase}>{t('profile.career.title')}</SectionHeading>
      <div className="space-y-4 md:space-y-6">
        {t('profile.career.items', { returnObjects: true }).map((item, index: number) => {
          // モバイルでは詳細が縦を大きく食うので既定で畳む
          const expanded = isDesktop || openIndexes.has(index);
          const detailsId = `career-details-${index}`;

          return (
            <Card key={index}>
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <h4 className="text-lg font-medium text-fg">{item.company}</h4>
                <span className="text-sm text-fg-subtle">{item.year}</span>
              </div>
              <p className="mb-2 text-fg-muted">{item.position}</p>
              <p className="text-fg-muted">{item.summary}</p>

              {!isDesktop && (
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={expanded}
                  aria-controls={detailsId}
                  className="mt-3 inline-flex items-center gap-1 rounded text-sm font-medium text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {expanded ? t('profile.career.hideDetails') : t('profile.career.showDetails')}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              )}

              <div id={detailsId} hidden={!expanded} className="mt-4">
                <div className="space-y-3 text-fg-muted">
                  {item.details.intro.map((paragraph, i: number) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {item.details.sections.map((section, i: number) => (
                  <div key={i} className="mt-4">
                    <h5 className="mb-1 font-medium text-fg">{section.heading}</h5>
                    <ul className="list-disc space-y-1 pl-5 text-fg-muted">
                      {section.points.map((point, j: number) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Career;
