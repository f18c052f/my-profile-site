import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@assets/css/Header.module.css';
import languageImage from '@assets/images/header/language-svgrepo-com.svg';

const LanguageMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Image
        className={styles.language}
        src={languageImage}
        alt="Language"
        onClick={toggleMenu}
      />

      {/* Framer Motionでアニメーションを追加 */}
      <motion.ul
        initial={{ height: 0, opacity: 0 }} // 初期状態（非表示）
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }} // 開閉時のアニメーション
        transition={{ duration: 0.3 }} // アニメーションの長さ
        className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}
      >
        <li>Japanese</li>
        <li>English</li>
      </motion.ul>
    </>
  );
};

export default LanguageMenu;
