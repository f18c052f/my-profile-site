# Profile Site

Y.Ohara のプロフィールサイト。経歴・スキル・実績と、趣味の写真を掲載しています。

## 技術構成

- Vite 6 + React 18 + TypeScript
- pnpm（`packageManager` フィールドで固定、Corepack 前提）
- Tailwind CSS 3 / framer-motion
- i18next（日本語・英語）
- Playwright（E2E・ビジュアル確認）

バックエンドは持たない完全な静的サイトです。環境変数も不要で、`git clone` してすぐ動きます。

GitHub Pages のプロジェクトページとして配信しています: <https://f18c052f.github.io/my-profile-site/>

## セットアップ

```bash
corepack enable   # 初回のみ。package.json の packageManager で pnpm のバージョンが固定される
pnpm install
pnpm dev
```

**開発サーバーは <http://localhost:5173/my-profile-site/> で開きます。** `/` は 404 になります。
Vite の `base` を GitHub Pages のサブパスに固定しており、環境で分岐させていないためです
（分岐させると base 起因の不具合がローカルで再現できなくなります）。

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
| スキル項目とアイコン名（変更したら `pnpm icons:build`）          | `src/data/skills.ts`                                |
| 画像                                                             | `src/assets/images/`                                |
| 公開 URL・GitHub URL                                             | `src/config/site.ts`                                |

## 画像

元画像は `assets-src/` に置き、`pnpm images:build` で `src/assets/images/generated/` に
配信用の WebP（640 / 1280 / 1920px）と JPEG フォールバック、型付きの `manifest.ts` を生成します。
生成物はコミットします。

ビルド時プラグインにしていないのは、写真が年に数回しか変わらないのに CI の毎ビルドで
数十 MB を再エンコードすることになるためです。

写真を差し替える手順:

1. `assets-src/` に画像を置く（ファイル名がそのままスラッグになります）
2. `pnpm images:build`
3. `src/data/gallery.ts` の並び順と、`src/i18n/locales/{ja,en}.ts` の `gallery.items` を更新

## デプロイ

`main` への push で `.github/workflows/deploy.yml` が GitHub Pages に公開します。
全ブランチと PR では `.github/workflows/ci.yml` が lint / format / typecheck / build / Playwright を実行します。

CI の Playwright は `vite preview` に対して実行します。実際のビルド成果物を
base 付きで配信するため、サブパス周りの破綻を CI が検出できます。

独自ドメインに移行する場合は `vite.config.ts` の `base` を `'/'` に戻し、
`public/CNAME` を追加してください。

## ドキュメント

| ファイル                                     | 内容               |
| -------------------------------------------- | ------------------ |
| [doc/rdd.md](doc/rdd.md)                     | 要件定義           |
| [doc/screen_design.md](doc/screen_design.md) | 画面設計           |
| [doc/decisions.md](doc/decisions.md)         | 技術判断とその理由 |
