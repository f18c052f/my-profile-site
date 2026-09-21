import { SITE } from '../config/site';

/**
 * GA4 (gtag.js) を直接読み込む。Firebase Analytics は使わない。
 *
 * index.html に直書きしないのは、dev サーバでも発火してしまい、
 * 条件分岐もできず、レンダリングをブロックするため。
 */

let initialized = false;

/** 計測してよい状況かどうか */
function shouldTrack(): boolean {
  if (!SITE.gaMeasurementId) return false; // 測定 ID 未設定
  if (import.meta.env.DEV) return false; // ローカル開発で統計を汚さない
  if (typeof navigator !== 'undefined' && navigator.doNotTrack === '1') return false;
  return true;
}

export function initAnalytics(): void {
  if (initialized || !shouldTrack()) return;
  initialized = true;

  const id = SITE.gaMeasurementId;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  window.gtag('config', id, {
    page_location: window.location.href,
  });
}

/**
 * セクション到達を記録する。
 *
 * 以前はアンカー遷移ごとに page_view を送っていたが、それでは PV が
 * 水増しされ、エンゲージメント率・直帰率・滞在時間がいずれも無意味になる。
 * page_view は初期化時の 1 回だけとし、到達はカスタムイベントで表す。
 */
export function trackSectionView(section: string): void {
  if (!initialized) return;
  window.gtag('event', 'section_view', { section });
}
