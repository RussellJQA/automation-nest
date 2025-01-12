const runTest = async (page) => {
    //url is opened in the browser instance
    //write the code below to complete the challenge
    await page.getByRole('button', { name: 'User Profile' }).click();

    const headingText = await page.locator("h1").textContent();
    return headingText;
  }