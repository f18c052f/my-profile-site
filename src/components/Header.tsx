import React, { useState } from 'react';
import { Moon, Sun, Languages, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ja' ? 'en' : 'ja';
    i18n.changeLanguage(newLang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLinks = () => (
    <>
      <a
        href="#profile"
        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {t('header.profile')}
      </a>
      <a
        href="#gallery"
        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {t('header.gallery')}
      </a>
    </>
  );

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">{t('hero.title')}</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <NavLinks />
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Languages className="h-5 w-5" />
            </button>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 flex flex-col items-center border-t border-gray-200 dark:border-gray-700">
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
