import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Achievements: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
        <Award className="mr-2" /> {t('profile.achievements.title')}
      </h3>
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
          <h4 className="font-medium mb-4 text-gray-900 dark:text-white">{t('profile.achievements.patents.title')}</h4>
          <ul className="space-y-3">
            {t('profile.achievements.patents.items', { returnObjects: true }).map((patent: any, index: number) => (
              <li key={index} className="flex items-start">
                <a
                  href={patent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span className="font-medium">{patent.title}</span>
                  <span className="mx-2">-</span>
                  <span className="text-sm">{patent.number}</span>
                  <ExternalLink className="inline-block w-4 h-4 ml-1 mb-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
          <h4 className="font-medium mb-4 text-gray-900 dark:text-white">{t('profile.achievements.publications.title')}</h4>
          <ul className="space-y-3">
            {t('profile.achievements.publications.items', { returnObjects: true }).map((publication: any, index: number) => (
              <li key={index} className="flex items-start">
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <span className="font-medium">{publication.title}</span>
                  <span className="mx-2">-</span>
                  <span className="text-sm">{publication.journal}</span>
                  <ExternalLink className="inline-block w-4 h-4 ml-1 mb-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
          <h4 className="font-medium mb-4 text-gray-900 dark:text-white">{t('profile.achievements.awards.title')}</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            {t('profile.achievements.awards.items', { returnObjects: true }).map((award: string, index: number) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;