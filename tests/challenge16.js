const runTest = async (page) => {
    //url is opened in the browser instance
    //write the code below to complete the challenge
    let dialogMessage = '';
    page.on('dialog', async dialog => {
      dialogMessage = dialog.message();
      await dialog.accept();
    });
    await page.getByRole('button', { name: 'Simple Alert' }).click();
    return dialogMessage;
  }