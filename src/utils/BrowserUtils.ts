export async function customClick(browser: WebdriverIO.Browser) {
  await browser.overwriteCommand(
    'click',
    async function (originalClick) {
      await this.scrollIntoView({ block: 'center' });
      if ((await this.isClickable()) && (await this.waitForDisplayed())) {
        return originalClick();
      }
      return null;
    },
    true
  );
}
