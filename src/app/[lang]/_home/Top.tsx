import React, { useState } from 'react';
import Image from 'next/image';
import { ClipLoader } from 'react-spinners'; // スピナーライブラリをインポート
import iconImage from '@/assets/images/top/icon.jpg';
import backgroundImage from '@/assets/images/top/background.jpg';
import githubImage from '@/assets/images/top/github-icon.svg';
import styles from '@/assets/css/Top.module.css';

const Top: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      {/* ローディング中にスピナーを表示 */}
      {loading && (
        <div className={styles.spinnerContainer}>
          <ClipLoader color="#ffffff" loading={loading} size={50} />
        </div>
      )}

      <Image
        src={backgroundImage}
        alt="Background Image"
        fill
        className={styles.backgroundImage}
        priority
        onLoad={handleImageLoad}
      />

      <div className={styles.content}>
        <div className={styles.overlay}>
          <div>
            <Image src={iconImage} alt="Yuta Ohara" className={styles.icon} />
          </div>
          <h1 className={styles.title}>Yuta Ohara</h1>
          <div className={styles.githubIcon}>
            <a
              href="https://github.com/f18c052f"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={githubImage} alt="GitHub" priority />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
