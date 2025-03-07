import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Award, Briefcase, Lock, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AuthForm from './AuthForm';
import { authenticate, checkAuthStatus, clearAuth } from '../utils/auth';

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const authStatus = checkAuthStatus();
    setIsAuthenticated(authStatus);
  }, []);

  const handleAuth = async (password: string) => {
    setIsLoading(true);
    setError(undefined);
    try {
      const success = await authenticate(password);
      if (success) {
        setIsAuthenticated(true);
      } else {
        setError(t('profile.career.auth.error'));
      }
    } catch (err) {
      setError(t('profile.career.auth.systemError'));
    } finally {
      setIsLoading(false);
    }
  };

  const skills = {
    'Programming Languages': [
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' }
    ],
    'Frameworks/Libraries': [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Next.js', icon: 'devicon-nextjs-original' },
      { name: 'Django', icon: 'devicon-django-plain colored' }
    ],
    'Tools': [
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-original colored' }
    ],
    'Qualifications': [
      { name: t('profile.skills.qualifications.applied_info'), icon: 'devicon-javascript-plain' },
      { name: t('profile.skills.qualifications.toeic'), icon: 'devicon-javascript-plain' }
    ]
  };

  return (
    <section id="profile" className="min-h-screen pt-20 pb-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          {t('profile.title')}
        </motion.h2>

        {/* Education Timeline */}
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
            {t('profile.education.items', { returnObjects: true }).map((item: any, index: number) => (
              <div key={index} className="flex">
                <div className="w-24 flex-shrink-0 text-gray-600 dark:text-gray-400">
                  {item.year}
                </div>
                <div className="flex-grow pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <p className="text-gray-800 dark:text-gray-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Career History */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900 dark:text-white">
            <Briefcase className="mr-2" /> {t('profile.career.title')}
          </h3>
          {!isAuthenticated ? (
            <div className="space-y-6">
              {t('profile.career.items', { returnObjects: true }).map((item: any, index: number) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{item.company}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.year}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{item.position}</p>
                  <p className="text-gray-600 dark:text-gray-300">{item.summary}</p>
                </div>
              ))}
              <AuthForm onAuth={handleAuth} error={error} isLoading={isLoading} />
            </div>
          ) : (
            <div className="space-y-6">
              {t('profile.career.items', { returnObjects: true }).map((item: any, index: number) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{item.company}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.year}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{item.position}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{item.summary}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {item.details.map((detail: string, detailIndex: number) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Skills */}
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
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                <h4 className="font-medium mb-4 text-gray-900 dark:text-white">
                  {t(`profile.skills.categories.${category}`)}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <i className={`${item.icon} text-2xl`}></i>
                      <span className="text-gray-600 dark:text-gray-300 break-words">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hobbies */}
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
                <a
                  href={hobby.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-4xl">{hobby.emoji}</span>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        {hobby.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {hobby.description}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
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
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {t('profile.achievements.patents.items', { returnObjects: true }).map((patent: string, index: number) => (
                  <li key={index}>{patent}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
              <h4 className="font-medium mb-4 text-gray-900 dark:text-white">{t('profile.achievements.publications.title')}</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {t('profile.achievements.publications.items', { returnObjects: true }).map((publication: string, index: number) => (
                  <li key={index}>{publication}</li>
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
      </div>
    </section>
  );
};

export default Profile;