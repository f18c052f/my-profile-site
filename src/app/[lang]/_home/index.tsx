'use client';

import React from 'react';
import { useLanguage, useTranslation } from '@/app/i18n/client';

export default function HomeComponent() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return <p>CC: {t('app_name')}</p>;
}
