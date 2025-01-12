import { Page } from '@playwright/test';

const runTest = async (page:Page) => {
  //url is opened in the browser instance
  //write the code below to complete the challenge
  await page.getByRole('checkbox', { name: 'Age' }).check();
  const heading = page.locator('h1').filter({hasText: "Age"});
  const headingText = await heading.textContent();
  return headingText;
}