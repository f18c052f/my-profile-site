import { test, expect } from '@playwright/test';

test('トップページが描画され、コンソールエラーが出ない', async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(err.message));

  const failedRequests: string[] = [];
  page.on('response', (res) => {
    // 外部 CDN の一時的な失敗まで落とす必要はないので自サイトのみ見る
    if (res.status() >= 400 && res.url().startsWith(testInfo.project.use.baseURL ?? '')) {
      failedRequests.push(`${res.status()} ${res.url()}`);
    }
  });

  await page.goto('./', { waitUntil: 'networkidle' });
  await expect(page.locator('body')).toBeVisible();

  await testInfo.attach(`screenshot-${testInfo.project.name}`, {
    body: await page.screenshot({ fullPage: true }),
    contentType: 'image/png',
  });

  expect(errors, 'ブラウザのコンソールにエラーが出ている').toEqual([]);
  expect(failedRequests, '自サイトのリクエストが失敗している').toEqual([]);
});
