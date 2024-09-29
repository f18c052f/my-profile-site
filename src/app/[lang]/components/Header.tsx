'use client';

import LanguageMenu from './header/LanguageMenu';
import HamburgerMenu from './header/HamburgerMenu';
import styles from '@assets/css/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
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
