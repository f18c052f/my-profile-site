import React from "react";
import { motion } from "framer-motion";
import { Briefcase, LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import AuthForm from "../AuthForm";

interface CareerProps {
  isAuthenticated: boolean;
  onAuth: (password: string) => Promise<void>;
  onLogout: () => Promise<void>;
  error?: string;
  isLoading: boolean;
}

const Career: React.FC<CareerProps> = ({
  isAuthenticated,
  onAuth,
  onLogout,
  error,
  isLoading,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold flex items-center text-gray-900 dark:text-white">
          <Briefcase className="mr-2" /> {t("profile.career.title")}
        </h3>
        {isAuthenticated && (
          <button
            onClick={onLogout}
            className="flex items-center px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <LogOut className="w-4 h-4 mr-2" />
            ログアウト
          </button>
        )}
      </div>
      {!isAuthenticated ? (
        <div className="space-y-6">
          {t("profile.career.items", { returnObjects: true }).map(
            (item, index: number) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm"
              >
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.company}
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {item.position}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.summary}
                </p>
              </div>
            )
          )}
          <AuthForm onAuth={onAuth} error={error} isLoading={isLoading} />
        </div>
      ) : (
        <div className="space-y-6">
          {t("profile.career.items", { returnObjects: true }).map(
            (item, index: number) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm"
              >
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.company}
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {item.position}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.summary}
                </p>
                <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                  {item.details}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Career;
