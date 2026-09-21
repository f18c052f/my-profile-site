import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { images } from '../assets/images/generated/manifest';
import ResponsiveImage from './ui/ResponsiveImage';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {/*
          CSS の background-image では srcSet が使えず、モバイルでも原寸を
          落としてしまうため img で配信する。ファーストビュー（LCP 要素）
          なので遅延読み込みにはしない。装飾なので alt は空にする。
        */}
        <ResponsiveImage
          image={images.desk}
          alt=""
          sizes="100vw"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4 max-w-3xl"
      >
        <div className="mb-8">
          <ResponsiveImage
            image={images.portrait}
            alt={t('hero.portraitAlt')}
            sizes="128px"
            priority
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-xl object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('hero.title')}</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
          {t('hero.introduction')}
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a href="mailto:f18c052f@gmail.com" className="hover:text-gray-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
