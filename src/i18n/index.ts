import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './locales/en';
import { ja } from './locales/ja';

/** html 要素の lang を実際の表示言語に合わせる */
function syncDocumentLang(language: string) {
  document.documentElement.lang = language.startsWith('ja') ? 'ja' : 'en';
}

// 初期化の完了は待たない（リソースを同梱しているため同期的に解決する）
void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ja: { translation: ja },
    },
    // 日本語圏向けのサイトなので、検出できなかったときは日本語に倒す
    fallbackLng: 'ja',
    supportedLngs: ['ja', 'en'],
    interpolation: {
      escapeValue: false,
    },
  });

// スクリーンリーダーの読み上げ言語と検索エンジンの言語判定に直結するため、
// 切り替えのたびに反映する
syncDocumentLang(i18n.language);
i18n.on('languageChanged', syncDocumentLang);

export default i18n;
