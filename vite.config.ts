import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  /**
   * GitHub Pages のプロジェクトページ配信（/my-profile-site/ 配下）に合わせる。
   *
   * 環境で分岐させないのは、base 起因の不具合を dev で再現できなくなり
   * 「ローカルでは動いたが本番で壊れる」典型パターンになるため。
   * ローカルでも http://localhost:5173/my-profile-site/ を開く。
   *
   * 独自ドメインに移行する場合はここを '/' に戻す。
   */
  base: '/my-profile-site/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
