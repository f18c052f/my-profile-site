import * as React from 'react';
import { motion } from 'framer-motion';
import styles from '@/assets/css/HamburgerMenu.module.css';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors: string[] = [
  '#FF008C',
  '#D309E1',
  '#9C1AFF',
  '#7700FF',
  '#4400FF',
];

type MenuItemProps = {
  i: number;
};

export const MenuItem: React.FC<MenuItemProps> = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={styles.li}
    >
      <div className={styles.iconPlaceholder} style={style} />
      <div className={styles.textPlaceholder} style={style} />
    </motion.li>
  );
};
