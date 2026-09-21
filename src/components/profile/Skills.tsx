import React from 'react';
import { motion } from 'framer-motion';
import { Code, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { skillIcons } from '../../assets/icons';
import { skillCategories, skills } from '../../data/skills';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
        <Code className="mr-2" /> {t('profile.skills.title')}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div key={category} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
            <h4 className="font-medium mb-4 text-gray-900 dark:text-white">
              {t(`profile.skills.categories.${category}`)}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills[category].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img src={skillIcons[item.icon]} alt="" aria-hidden="true" className="w-6 h-6" />
                  <span className="text-gray-600 dark:text-gray-300 break-words">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
          <h4 className="font-medium mb-4 text-gray-900 dark:text-white">
            {t('profile.skills.categories.Qualifications')}
          </h4>
          <div className="grid grid-cols-1 gap-4">
            {t('profile.skills.qualifications', { returnObjects: true }).map(
              (qualification: string, index: number) => (
                <div key={index} className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-600 dark:text-gray-300 break-words">
                    {qualification}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
