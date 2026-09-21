import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import { revealProps } from '../ui/reveal';

const Career: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div {...revealProps} className="mb-8 md:mb-12">
      <SectionHeading icon={Briefcase}>{t('profile.career.title')}</SectionHeading>
      <div className="space-y-4 md:space-y-6">
        {t('profile.career.items', { returnObjects: true }).map((item, index: number) => (
          <Card key={index}>
            <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
              <h4 className="text-lg font-medium text-fg">{item.company}</h4>
              <span className="text-sm text-fg-subtle">{item.year}</span>
            </div>
            <p className="mb-2 text-fg-muted">{item.position}</p>
            <p className="mb-4 text-fg-muted">{item.summary}</p>

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
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default Career;
