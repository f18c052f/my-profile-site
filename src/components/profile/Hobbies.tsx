import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hobbies: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
        <Heart className="mr-2" /> {t('profile.hobbies.title')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {t('profile.hobbies.items', { returnObjects: true }).map((hobby: any, index: number) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm"
          >
            <div className="flex items-start space-x-4">
              <span className="text-4xl">{hobby.emoji}</span>
              <div className="flex-grow">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  {hobby.title}
                </h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {hobby.description.map((desc: string, i: number) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                      {desc}
                    </span>
                  ))}
                </div>
                {hobby.apps.length > 0 && (
                  <div className="mt-3">
                    {hobby.apps.map((app: any, appIndex: number) => (
                      <a
                        key={appIndex}
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                      >
                        {app.name}
                        <ExternalLink className="inline-block w-3 h-3 ml-1 mb-0.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Hobbies;