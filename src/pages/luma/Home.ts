import Common from '../Common';

export default class Home extends Common {
  get videoPlayer() {
    return this.browser.$('#playerDiv');
  }
  async acceptCookies() {
    await this.browser.$('//button[text()="Got it"]').click();
  }
  async navigateToHealth() {
    return await this.browser.$('//a[text()="Health"]').click();
  }

  async load(): Promise<void> {
    await this.goTo('/home/index.html');
    await this.acceptCookies();
  }
}
