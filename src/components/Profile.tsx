import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { authenticate, checkAuthStatus, clearAuth } from '../utils/auth';
import Education from './profile/Education';
import Career from './profile/Career';
import Skills from './profile/Skills';
import Hobbies from './profile/Hobbies';
import Achievements from './profile/Achievements';

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const checkAuth = async () => {
      const user = await checkAuthStatus();
      setIsAuthenticated(!!user);
    };
    checkAuth();
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

  const handleLogout = async () => {
    await clearAuth();
    setIsAuthenticated(false);
  };

  return (
    <section id="profile" className="min-h-screen pt-20 pb-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t('profile.title')}
        </h2>

        <Education />
        <Career 
          isAuthenticated={isAuthenticated}
          onAuth={handleAuth}
          onLogout={handleLogout}
          error={error}
          isLoading={isLoading}
        />
        <Skills />
        <Hobbies />
        <Achievements />
      </div>
    </section>
  );
};

export default Profile;