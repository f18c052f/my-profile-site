'use client';

import { ThemeToggle } from './header/ThemeToggle';
import LanguageMenu from './header/LanguageMenu';
import HamburgerMenu from './header/HamburgerMenu';
import styles from '@assets/css/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <ThemeToggle />
        <div className={styles.languageContainer}>
          <LanguageMenu />
        </div>
        <div className={styles.hamburgerContainer}>
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
