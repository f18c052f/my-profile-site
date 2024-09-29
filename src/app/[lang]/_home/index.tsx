'use client';

import React from 'react';
import { useLanguage, useTranslation } from '@/app/i18n/client';
import Top from './Top';

export default function HomeComponent() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <>
      <Top />
      <p>CC: {t('app_name')}</p>
      <div>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
        <p>hogehogeだよ！</p>
      </div>
    </>
  );
}
