# Profile Site

Y.Ohara のプロフィールサイト。経歴・スキル・実績と、趣味の写真を掲載しています。

## 技術構成

- Vite 6 + React 18 + TypeScript
- pnpm（`packageManager` フィールドで固定、Corepack 前提）
- Tailwind CSS 3 / framer-motion
- i18next（日本語・英語）
- Playwright（E2E・ビジュアル確認）

バックエンドは持たない完全な静的サイトです。環境変数も不要で、`git clone` してすぐ動きます。

## セットアップ

```bash
corepack enable   # 初回のみ。package.json の packageManager で pnpm のバージョンが固定される
pnpm install
pnpm dev
```

## スクリプト

| コマンド         | 内容                                                   |
| ---------------- | ------------------------------------------------------ |
| `pnpm dev`       | 開発サーバーを起動                                     |
| `pnpm build`     | 型チェック（`typecheck`）を通してから本番ビルド        |
| `pnpm typecheck` | `tsc --noEmit` をアプリ側・Node 側の両方に実行         |
| `pnpm lint`      | ESLint                                                 |
| `pnpm preview`   | ビルド成果物をローカル配信                             |
| `pnpm test`      | Playwright（デスクトップ / モバイルの 2 プロジェクト） |

## コンテンツの更新

表示テキストのほとんどは i18n のロケールファイルにあります。**日本語と英語は必ず対で編集してください**（`en.ts` には `satisfies typeof ja` を付けているため、キー構造がずれると型エラーになります）。

| 対象                                                             | ファイル                                            |
| ---------------------------------------------------------------- | --------------------------------------------------- |
| 自己紹介・学歴・職務経歴・資格・趣味・実績・ギャラリーのタイトル | `src/i18n/locales/ja.ts` / `src/i18n/locales/en.ts` |
| スキル項目と devicon のアイコンクラス                            | `src/data/skills.ts`                                |
| 画像                                                             | `src/assets/images/`                                |
| 公開 URL・GitHub URL・GA4 測定 ID                                | `src/config/site.ts`                                |

## アクセス解析

GA4 を `gtag.js` で直接読み込みます（`src/utils/analytics.ts`）。`src/config/site.ts` の `gaMeasurementId` が空文字の間は計測スクリプトを一切読み込みません。

以下の場合は計測しません。

- 測定 ID が未設定
- 開発サーバー（`import.meta.env.DEV`）
- ブラウザの Do Not Track が有効
