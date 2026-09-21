import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
        <BookOpen className="mr-2" /> {t('profile.education.title')}
      </h3>
      <div className="space-y-4">
        {t('profile.education.items', { returnObjects: true }).map((item, index: number) => (
          <div key={index} className="flex">
            <div className="w-24 flex-shrink-0 text-gray-600 dark:text-gray-400">{item.year}</div>
            <div className="flex-grow pl-4 border-l-2 border-gray-200 dark:border-gray-700">
              <p className="text-gray-800 dark:text-gray-200">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
