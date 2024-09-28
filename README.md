# my-profile-site

## ディレクトリ構成

my-profile-app/
├── node_modules/
├── public/ # 公開ディレクトリ (静的ファイル)
├── src/ # ソースコードのディレクトリ
│ ├── components/ # 再利用可能なコンポーネント
│ │ ├── Header.tsx
│ │ ├── Profile.tsx
│ │ └── ThemeSwitcher.tsx # ダークモード切り替えボタン
│ ├── pages/ # 各ページ
│ │ ├── \_app.tsx # カスタムAppコンポーネント (グローバル設定)
│ │ ├── index.tsx # ホームページ
│ │ └── about.tsx # 別ページの例
│ ├── styles/ # グローバルおよびテーマスタイル
│ └── hooks/ # カスタムフック
├── package.json
├── tsconfig.json # TypeScript設定ファイル
└── .eslintrc.js # ESLint設定ファイル
