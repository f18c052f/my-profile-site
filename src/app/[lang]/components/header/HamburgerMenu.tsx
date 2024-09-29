import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@assets/css/Header.module.css';
import hamburgerImage from '@assets/images/header/hamburger-menu-svgrepo-com.svg';

const HamburgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null); // メニューの参照

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // メニュー外をクリックしたらメニューを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false); // メニュー外クリックでメニューを閉じる
      }
    };

    // グローバルクリックイベントの監視
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav>
      {/* ハンバーガーメニューアイコン */}
      <Image
        className={styles.hamburger}
        src={hamburgerImage}
        alt="Menu"
        onClick={toggleMenu}
      />

      {/* Framer Motionでアニメーションを追加 */}
      <motion.ul
        ref={menuRef} // メニューを参照
        initial={{ height: 0, opacity: 0 }} // 初期状態（非表示）
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }} // 開閉時のアニメーション
        transition={{ duration: 0.3 }} // アニメーションの長さ
        className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}
      >
        <li>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
        </li>
      </motion.ul>
    </nav>
  );
};

export default HamburgerMenu;
