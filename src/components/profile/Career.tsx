import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Career: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
        <Briefcase className="mr-2" /> {t('profile.career.title')}
      </h3>
      <div className="space-y-6">
        {t('profile.career.items', { returnObjects: true }).map((item, index: number) => (
          <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">{item.company}</h4>
              <span className="text-sm text-gray-600 dark:text-gray-400">{item.year}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{item.position}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{item.summary}</p>

            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              {item.details.intro.map((paragraph, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {item.details.sections.map((section, i: number) => (
              <div key={i} className="mt-4">
                <h5 className="font-medium text-gray-900 dark:text-white mb-1">
                  {section.heading}
                </h5>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                  {section.points.map((point, j: number) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Career;
