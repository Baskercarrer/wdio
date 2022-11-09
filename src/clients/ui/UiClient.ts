import { remote } from 'webdriverio';

export default class UiClient {
  private browser: WebdriverIO.Browser;

  get instance() {
    return this.browser;
  }

  async init(browserName: string) {
    this.browser = await remote({
      logLevel: 'error',
      baseUrl: 'https://www.dailymail.co.uk',
      capabilities: {
        browserName: browserName
      }
    });
  }
}
