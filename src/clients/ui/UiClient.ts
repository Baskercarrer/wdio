import { RemoteOptions, remote } from 'webdriverio';
import { customClick } from '@utils/BrowserUtils';

export default class UiClient {
  private browser: WebdriverIO.Browser;
  private config: RemoteOptions;

  constructor(config: RemoteOptions) {
    this.config = config;
  }
  get instance() {
    return this.browser;
  }

  async init() {
    this.browser = await remote(this.config);
    await customClick(this.browser);
  }

  async close() {
    await this.browser.closeWindow();
  }

  async updateStatus(status: string, reason: string) {
    if (this.config) {
      await this.browser.execute(
        `browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"${status}","reason": ${reason}}}`
      );
    } else {
      console.log('Browser stack status update is ignored');
    }
  }
}
