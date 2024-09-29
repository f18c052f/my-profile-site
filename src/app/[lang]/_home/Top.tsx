import React from 'react';
import Image from 'next/image';
import iconImage from '@/assets/images/top/icon.jpg';
import backgroundImage from '@/assets/images/top/background.jpg';
import githubImage from '@/assets/images/top/github-icon.svg';
import styles from '@/assets/css/Top.module.css';

const Top: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        src={backgroundImage}
        alt="Background Image"
        fill
        className={styles.backgroundImage}
        priority
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
