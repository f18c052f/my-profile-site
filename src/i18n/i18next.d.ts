import type { ja } from './locales/ja';

/**
 * 翻訳リソースの実体から t() の戻り値型を導出する。
 *
 * これにより t('...', { returnObjects: true }) が実際の配列型を返し、
 * 存在しない翻訳キーはコンパイルエラーになる。en.ts は ja.ts と同じ
 * キー構造であることを satisfies で保証している。
 */
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: typeof ja;
    };
    returnNull: false;
  }
}
