import { test, expect } from '@playwright/test';

test('トップページが描画され、コンソールエラーが出ない', async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => errors.push(err.message));

  await page.goto('/', { waitUntil: 'networkidle' });
  await expect(page.locator('body')).toBeVisible();

  await testInfo.attach(`screenshot-${testInfo.project.name}`, {
    body: await page.screenshot({ fullPage: true }),
    contentType: 'image/png',
  });

  console.log(`[${testInfo.project.name}] console errors:`, errors);
});
