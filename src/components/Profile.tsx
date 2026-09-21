import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { trackSectionView } from '../utils/analytics';
import Education from './profile/Education';
import Career from './profile/Career';
import Skills from './profile/Skills';
import Hobbies from './profile/Hobbies';
import Achievements from './profile/Achievements';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      id="profile"
      viewport={{ once: true }}
      onViewportEnter={() => trackSectionView('profile')}
      className="min-h-screen pt-20 pb-16 px-4 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('profile.title')}
        </h2>

        <Education />
        <Career />
        <Skills />
        <Hobbies />
        <Achievements />
      </div>
    </motion.section>
  );
};

export default Profile;
