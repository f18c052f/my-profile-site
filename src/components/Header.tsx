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
    // 言語の切り替え結果は待たない（完了時に react-i18next が再描画する）
    void i18n.changeLanguage(newLang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((v) => !v);
  };

  const iconButton =
    'rounded-lg p-2 text-fg-muted hover:bg-surface-2 hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

  const NavLinks = () => (
    <>
      <a
        href="#profile"
        className="text-fg-muted hover:text-fg"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {t('header.profile')}
      </a>
      <a
        href="#gallery"
        className="text-fg-muted hover:text-fg"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {t('header.gallery')}
      </a>
    </>
  );

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-bg/80 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ページ唯一の h1 は Hero 側。ここは見出しにしない */}
          <a href="#top" className="flex-shrink-0 text-lg font-bold text-fg">
            {t('hero.title')}
          </a>

          <nav className="hidden space-x-8 md:flex">
            <NavLinks />
          </nav>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className={iconButton}
              aria-label={t('a11y.toggleLanguage')}
            >
              <Languages className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              onClick={toggleDarkMode}
              className={iconButton}
              aria-label={isDarkMode ? t('a11y.switchToLight') : t('a11y.switchToDark')}
              aria-pressed={isDarkMode}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>

            <button
              onClick={toggleMobileMenu}
              className={`${iconButton} md:hidden`}
              aria-label={isMobileMenuOpen ? t('a11y.closeMenu') : t('a11y.openMenu')}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav
            id="mobile-nav"
            className="flex flex-col items-center space-y-4 border-t border-border py-4 md:hidden"
          >
            <NavLinks />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
