import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import { revealProps } from '../ui/reveal';

const linkClass = 'text-fg-muted hover:text-accent';

const Achievements: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div {...revealProps} className="mb-8 md:mb-12">
      <SectionHeading icon={Award}>{t('profile.achievements.title')}</SectionHeading>
      <div className="space-y-4 md:space-y-6">
        <Card>
          <h4 className="mb-4 font-medium text-fg">{t('profile.achievements.patents.title')}</h4>
          <ul className="space-y-3">
            {t('profile.achievements.patents.items', { returnObjects: true }).map(
              (patent, index: number) => (
                <li key={index}>
                  <a
                    href={patent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    <span className="font-medium">{patent.title}</span>
                    <span className="mx-2">-</span>
                    <span className="text-sm">{patent.number}</span>
                    <ExternalLink className="mb-1 ml-1 inline-block h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ),
            )}
          </ul>
        </Card>
        <Card>
          <h4 className="mb-4 font-medium text-fg">
            {t('profile.achievements.publications.title')}
          </h4>
          <ul className="space-y-3">
            {t('profile.achievements.publications.items', { returnObjects: true }).map(
              (publication, index: number) => (
                <li key={index}>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    <span className="font-medium">{publication.title}</span>
                    <span className="mx-2">-</span>
                    <span className="text-sm">{publication.journal}</span>
                    <ExternalLink className="mb-1 ml-1 inline-block h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ),
            )}
          </ul>
        </Card>
        <Card>
          <h4 className="mb-4 font-medium text-fg">{t('profile.achievements.awards.title')}</h4>
          <ul className="list-inside list-disc space-y-2 text-fg-muted">
            {t('profile.achievements.awards.items', { returnObjects: true }).map(
              (award: string, index: number) => (
                <li key={index}>{award}</li>
              ),
            )}
          </ul>
        </Card>
      </div>
    </motion.div>
  );
};

export default Achievements;
