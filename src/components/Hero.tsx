import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { images } from '../assets/images/generated/manifest';
import { SITE } from '../config/site';
import ResponsiveImage from './ui/ResponsiveImage';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="top" className="relative flex min-h-[100svh] items-center justify-center">
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
          className="h-full w-full object-cover"
        />
        {/*
          フラットな bg-black/50 では写真の明るい領域でコントラストが不足する。
          中央（本文）を相対的に明るく残しつつ上下を締めるグラデーションにする。
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/75"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-4 max-w-3xl rounded-2xl bg-black/25 px-6 py-10 text-center text-white backdrop-blur-sm"
      >
        <div className="mb-8">
          <ResponsiveImage
            image={images.portrait}
            alt={t('hero.portraitAlt')}
            sizes="128px"
            priority
            className="mx-auto h-32 w-32 rounded-full border-4 border-white/90 object-cover shadow-xl"
          />
        </div>

        <h1 className="mb-6 text-4xl font-bold drop-shadow-lg md:text-5xl">{t('hero.title')}</h1>
        <p className="mb-8 text-lg leading-relaxed text-white/95 md:text-xl">
          {t('hero.introduction')}
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('a11y.github')}
            className="rounded-lg p-2 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Github className="h-6 w-6" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label={t('a11y.email')}
            className="rounded-lg p-2 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Mail className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
