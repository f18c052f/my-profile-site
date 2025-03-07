import React, { useState } from 'react';
import { Lock, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface AuthFormProps {
  onAuth: (password: string) => Promise<void>;
  error?: string;
  isLoading: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ onAuth, error, isLoading }) => {
  const { t } = useTranslation();
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) {
      await onAuth(password);
      setPassword('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm"
    >
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex items-center space-x-2 mb-4">
          <Lock className="text-gray-500 dark:text-gray-400" />
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {t('profile.career.auth.message')}
          </p>
        </div>
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm mb-4"
          >
            {error}
          </motion.p>
        )}
        <div className="flex space-x-2">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder={t('profile.career.auth.placeholder')}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !password.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md
                     hover:bg-blue-700 transition-colors duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed
                     flex items-center justify-center min-w-[80px]"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              t('profile.career.auth.button')
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default AuthForm