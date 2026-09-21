/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      /*
       * 実際の色は src/index.css の CSS 変数で定義している。
       * ここでセマンティックな名前を与えることで、コンポーネント側から
       * dark: 接頭辞を排除できる（配色の切り替えが 1 箇所で済む）。
       */
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--color-surface-2) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        fg: 'rgb(var(--color-fg) / <alpha-value>)',
        'fg-muted': 'rgb(var(--color-fg-muted) / <alpha-value>)',
        'fg-subtle': 'rgb(var(--color-fg-subtle) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-fg': 'rgb(var(--color-accent-fg) / <alpha-value>)',
      },
      fontFamily: {
        /*
         * 日本語 Web フォントは読み込まない。Noto Sans JP は
         * サブセット分割しても数百 KB かかり、画像を削った分を打ち消してしまう。
         * 端末にインストール済みならこのスタック経由で使われる。
         */
        sans: [
          'Inter Variable',
          'Inter',
          'Noto Sans JP',
          'Hiragino Sans',
          'Hiragino Kaku Gothic ProN',
          'BIZ UDPGothic',
          'Meiryo',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
