/* eslint-disable no-var */
import Home from 'pages/luma/Home';

export default class Pages {
  constructor(browser: WebdriverIO.Browser) {
    globalThis.homepage = new Home(browser);
  }
}

declare global {
  var homepage: Home;
}
