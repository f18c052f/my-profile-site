import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../ui/SectionHeading';
import { revealProps } from '../ui/reveal';

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div {...revealProps} className="mb-8 md:mb-12">
      <SectionHeading icon={BookOpen}>{t('profile.education.title')}</SectionHeading>
      <div className="space-y-4">
        {t('profile.education.items', { returnObjects: true }).map((item, index: number) => (
          <div key={index} className="flex">
            <div className="w-24 flex-shrink-0 text-fg-subtle">{item.year}</div>
            <div className="flex-grow border-l-2 border-border pl-4">
              <p className="text-fg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
