import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@assets/css/Header.module.css';
import languageImage from '@assets/images/header/language-svgrepo-com.svg';
import japanFlag from '@assets/images/header/japan-svgrepo-com.svg'; // 日本の国旗
import ukFlag from '@assets/images/header/usa-svgrepo-com.svg'; // 英国の国旗

const LanguageMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('japanese'); // 初期選択を日本語に
  const menuRef = useRef<HTMLUListElement>(null); // メニューの参照

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLanguage(event.target.value); // ラジオボタンの値をセット
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
    <>
      <Image
        className={styles.language}
        src={languageImage}
        alt="Language"
        onClick={toggleMenu}
      />

      {/* Framer Motionでアニメーションを追加 */}
      <motion.ul
        ref={menuRef} // メニューの参照を追加
        initial={{ height: 0, opacity: 0 }} // 初期状態（非表示）
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }} // 開閉時のアニメーション
        transition={{ duration: 0.3 }} // アニメーションの長さ
        className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}
      >
        <li>
          <label>
            <input
              type="radio"
              name="language"
              value="japanese"
              checked={selectedLanguage === 'japanese'}
              onChange={handleLanguageChange}
            />
            <Image src={japanFlag} alt="Japanese" className={styles.flag} />
            Japanese
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="language"
              value="english"
              checked={selectedLanguage === 'english'}
              onChange={handleLanguageChange}
            />
            <Image src={ukFlag} alt="English" className={styles.flag} />
            English
          </label>
        </li>
      </motion.ul>
    </>
  );
};

export default LanguageMenu;
