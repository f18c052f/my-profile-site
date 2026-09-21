import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;

/**
 * base が '/my-profile-site/' なので baseURL も同じ深さに合わせる（末尾スラッシュ必須）。
 * テスト側は page.goto('./') を使うこと。'/' だと base が捨てられて 404 になる。
 */
const port = isCI ? 4173 : 5173;
const baseURL = `http://localhost:${port}/my-profile-site/`;

export default defineConfig({
  testDir: './tests',
  outputDir: './test-results',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  reporter: isCI ? [['list'], ['html', { open: 'never' }]] : [['list']],
  use: {
    baseURL,
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 5'] } },
  ],
  webServer: {
    // CI では実際のビルド成果物を配信して base の破綻を検出する
    command: isCI
      ? `pnpm preview --port ${port} --strictPort`
      : `pnpm dev --port ${port} --strictPort`,
    url: baseURL,
    reuseExistingServer: !isCI,
    timeout: 120_000,
  },
});
