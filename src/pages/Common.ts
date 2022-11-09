export default class Common {
  constructor(protected browser: WebdriverIO.Browser) {
    this.browser = browser;
  }

  protected async goTo(path: string) {
    await this.browser.url(path);
  }
}
