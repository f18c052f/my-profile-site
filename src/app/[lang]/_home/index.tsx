'use client';

import React from 'react';
import { useLanguage, useTranslation } from '@/app/i18n/client';
import Top from './Top';
import MotionProfile from './MotionProfile';
import Footer from '../components/Footer/Footer';

export default function HomeComponent() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <>
      <MotionProfile />
      <Footer />
      {/* <p>CC: {t('app_name')}</p> */}
    </>
  );
}
