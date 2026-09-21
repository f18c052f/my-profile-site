/**
 * サイト全体で使う定数。
 *
 * GA4 の測定 ID は秘匿情報ではないため環境変数にはしない。
 * Vite の VITE_* はビルド時にバンドルへインライン展開されるので、
 * 環境変数や Secret に入れても最終成果物には平文で現れる。秘匿効果は
 * 無い一方で「設定漏れ時に無言で無効化される」という障害モードだけが増える。
 */
export const SITE = {
  /** 公開 URL。OGP や canonical の絶対 URL に使う */
  url: 'https://f18c052f.github.io/my-profile-site/',
  githubUrl: 'https://github.com/f18c052f',
  /** GA4 測定 ID（G-XXXXXXXXXX）。空文字なら計測を完全に無効化する */
  gaMeasurementId: '',
} as const;
