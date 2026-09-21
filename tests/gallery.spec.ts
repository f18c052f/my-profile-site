import { test, expect } from '@playwright/test';

test.describe('ギャラリーのライトボックス', () => {
  test('キーボードで開閉でき、閉じたときに元のサムネイルへフォーカスが戻る', async ({ page }) => {
    await page.goto('./');

    const thumbnails = page.locator('#gallery button');
    await expect(thumbnails).toHaveCount(9);

    const first = thumbnails.first();
    await first.scrollIntoViewIfNeeded();
    await first.focus();
    await expect(first).toBeFocused();
    await page.keyboard.press('Enter');

    const dialog = page.locator('dialog');
    await expect(dialog).toBeVisible();

    // 矢印キーで次の写真へ進める
    const positionBefore = await dialog.locator('p').first().textContent();
    await page.keyboard.press('ArrowRight');
    await expect(dialog.locator('p').first()).not.toHaveText(positionBefore ?? '');

    // Esc で閉じ、起動元へフォーカスが戻る（dialog.showModal の挙動）
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(first).toBeFocused();
  });

  test('表示中は背景がスクロールしない', async ({ page }) => {
    await page.goto('./');

    const first = page.locator('#gallery button').first();
    await first.scrollIntoViewIfNeeded();
    await first.click();

    await expect(page.locator('dialog')).toBeVisible();
    await expect(page.locator('html')).toHaveCSS('overflow', 'hidden');

    await page.keyboard.press('Escape');
    await expect(page.locator('html')).not.toHaveCSS('overflow', 'hidden');
  });
});

test('モバイルのページ高が閾値を超えない', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile', 'モバイルのみ対象');

  await page.goto('./', { waitUntil: 'networkidle' });
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
  });
  await page.waitForTimeout(600);

  // 当初は約 8,300px だった。スキルのチップ化とギャラリーの 2 列化で
  // 約 4,900px まで下げている。回帰検出用の閾値なので、
  // 意図して増やす場合はここも更新すること。
  const height = await page.evaluate(() => document.body.scrollHeight);
  expect(height).toBeLessThan(5300);
});
