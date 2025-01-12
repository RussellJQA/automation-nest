import { test, expect } from "@playwright/test";

/*
Playwright Challenge S. No. 3 at https://automationnest.com/scenariotest/get-the-text-of-the-first-h1-tag-by-clicking-the-age-checkbox-playwright/1
 
Although the instruction say:
  Instructions:
     On the above-linked web page, you will find four checkboxes and one H1 tag.
     When a checkbox is checked, it's corresponding content will be updated in the H1 tag.

There are actually 4 H1 tags on the page:
    <div class="content pt-[2rem]">
        <h1 class="p-2 text-xl">First Name is Not Checked</h1>
        <h1 class="p-2 text-xl">Last Name is Not Checked</h1>
        <h1 class="p-2 text-xl">Age is Not Checked</h1>
        <h1 class="p-2 text-xl">Date of Birth is Not Checked</h1>
    </div>

*/

test("Automation Nest - Playwright Challenge S. No. 3", async ({ page }) => {
    await page.goto("https://practice.automationnest.com/checkbox?from=landing1");

    await page.getByLabel("First Name").check();
    const firstNameHeading = page.getByRole("heading", { name: "First Name is Checked" })
    await expect(firstNameHeading).toBeVisible();
    const firstNameContent = await firstNameHeading.textContent();
    expect(firstNameContent).toEqual("First Name is Checked");
  
    await page.getByLabel("Last Name").check();
    const lastNameHeading = page.getByRole("heading", { name: "Last Name is Checked" })
    await expect(lastNameHeading).toBeVisible();
    const lastNameContent = await lastNameHeading.textContent();
    expect(lastNameContent).toEqual("Last Name is Checked");
  
    await page.getByLabel("Age").check();
    const ageHeading = page.getByRole("heading", { name: "Age is Checked" })
    await expect(ageHeading).toBeVisible();
    const ageHeadingContent = await ageHeading.textContent();
    expect(ageHeadingContent).toEqual("Age is Checked");
  
    await page.getByLabel("Date of Birth").check();
    const dateOfBirthHeading = page.getByRole("heading", { name: "Date of Birth is Checked" })
    await expect(dateOfBirthHeading).toBeVisible();
    const dateOfBirthHeadingContent = await dateOfBirthHeading.textContent();
    expect(dateOfBirthHeadingContent).toEqual("Date of Birth is Checked");

    const headingList = page.locator(".content");
    await expect(headingList).toHaveText(["First Name is CheckedLast Name is CheckedAge is CheckedDate of Birth is Checked"]);
    await expect(headingList).toContainText(["Age is Checked"]);

    const ageHeading2 = headingList.locator("h1").filter({hasText: "Age is Checked"})
    const ageHeadingContent2 = await ageHeading2.textContent();
    expect(ageHeadingContent2).toEqual("Age is Checked");
    console.log(ageHeadingContent2);

    // TODO Loop through all of the "is checked" headings and log each of them individually
});

test("This seems to be more like what they're looking for", async ({ page }) => {
    await page.goto("https://practice.automationnest.com/checkbox?from=landing1");

    await page.getByRole('checkbox', { name: 'Age' }).check();
    const heading = page.locator('h1').filter({hasText: "Age"});
    const headingText = await heading.textContent();
    console.log(headingText);
})