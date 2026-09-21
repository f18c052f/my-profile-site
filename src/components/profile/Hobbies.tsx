import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import { revealProps } from '../ui/reveal';

const Hobbies: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div {...revealProps} className="mb-8 md:mb-12">
      <SectionHeading icon={Heart}>{t('profile.hobbies.title')}</SectionHeading>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {t('profile.hobbies.items', { returnObjects: true }).map((hobby, index: number) => (
          <Card key={index}>
            <h4 className="mb-2 flex items-center gap-2 font-medium text-fg">
              {/* 絵文字はモバイルで縦を食うのでタイトル行にインラインで置く */}
              <span className="text-2xl md:text-3xl" aria-hidden="true">
                {hobby.emoji}
              </span>
              {hobby.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {hobby.description.map((desc: string, i: number) => (
                <span
                  key={i}
                  className="rounded-full bg-surface px-2 py-1 text-xs text-fg-muted md:text-sm"
                >
                  {desc}
                </span>
              ))}
            </div>
            {hobby.apps.length > 0 && (
              <div className="mt-3">
                {hobby.apps.map((app, appIndex: number) => (
                  <a
                    key={appIndex}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fg-muted hover:text-accent"
                  >
                    {app.name}
                    <ExternalLink className="mb-0.5 ml-1 inline-block h-3 w-3" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default Hobbies;
