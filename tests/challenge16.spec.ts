import { test } from '@playwright/test';

test("Automation Nest - Playwright Challenge S. No. 16: Get Alert Text", async ({ page }) => {
  let dialogMessage = '';
  page.on('dialog', async dialog => {
    dialogMessage = dialog.message();
    await dialog.accept();
  });
  await page.goto('https://practice.automationnest.com/alert?from=landing1');
  await page.getByRole('button', { name: 'Simple Alert' }).click();
  console.log(dialogMessage);
});