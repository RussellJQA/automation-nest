import { test } from '@playwright/test';

// Automation Nest - Playwright Challenge S. No. 7: Click on the button to return text at https://automationnest.com/scenariotest/Get-Alert-Text-Playwright/1

test("Automation Nest - Playwright Challenge S. No. 7: Click on the button to return text", async ({ page }) => {

  await page.goto('https://practice.automationnest.com/button?from=landing1');
  await page.getByRole('button', { name: 'User Profile' }).click();

  const headingText = await page.locator("h1").textContent();
  console.log(headingText);
});