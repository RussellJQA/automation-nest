import { test, expect } from '@playwright/test';

test('Automation Nest Challenge 1', async ({ page }) => {
    await page.goto('https://practice.automationnest.com/checkbox?from=landing1');

    await page.getByLabel('First Name').check();
    const firstNameHeading = page.getByRole('heading', { name: 'First Name is Checked' })
    await expect(firstNameHeading).toBeVisible();
    const firstNameContent = await firstNameHeading.textContent();
    expect(firstNameContent).toEqual('First Name is Checked');
  
    await page.getByLabel('Last Name').check();
    const lastNameHeading = page.getByRole('heading', { name: 'Last Name is Checked' })
    await expect(lastNameHeading).toBeVisible();
    const lastNameContent = await lastNameHeading.textContent();
    expect(lastNameContent).toEqual('Last Name is Checked');
  
    await page.getByLabel('Age').check();
    const ageHeading = page.getByRole('heading', { name: 'Age is Checked' })
    await expect(ageHeading).toBeVisible();
    const ageHeadingContent = await ageHeading.textContent();
    expect(ageHeadingContent).toEqual('Age is Checked');
  
    await page.getByLabel('Date of Birth').check();
    const dateOfBirthHeading = page.getByRole('heading', { name: 'Date of Birth is Checked' })
    await expect(dateOfBirthHeading).toBeVisible();
    const dateOfBirthHeadingContent = await dateOfBirthHeading.textContent();
    expect(dateOfBirthHeadingContent).toEqual('Date of Birth is Checked');

    const headingList = page.locator('.content');
    await expect(headingList).toHaveText(["First Name is CheckedLast Name is CheckedAge is CheckedDate of Birth is Checked"]);
    await expect(headingList).toContainText(["Age is Checked"]);
});