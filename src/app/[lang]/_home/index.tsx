'use client';

import React from 'react';
import { useLanguage, useTranslation } from '@/app/i18n/client';
import Top from './Top';
import MotionProfile from './MotionProfile';

export default function HomeComponent() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <>
      <MotionProfile />
      <p>CC: {t('app_name')}</p>
    </>
  );
}
