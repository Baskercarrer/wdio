import { BrowserStackType } from '../context/TestContext';
import { RemoteOptions } from 'webdriverio';
import lodash from 'lodash';
export function defaultCaps(browserName: string): RemoteOptions {
  return {
    logLevel: 'silent',
    baseUrl: 'https://www.dailymail.co.uk/',
    waitforTimeout: 30000,
    automationProtocol: 'webdriver',
    capabilities: {
      browserName: browserName ?? 'chrome'
    }
  };
}
export function bsCaps(options: BrowserStackType): RemoteOptions {
  const dCaps = defaultCaps(options.browserName);
  dCaps.capabilities = {
    'bstack:options': {
      hostname: 'hub.browserstack.com',
      userName: 'browserStackUsername',
      accessKey: 'browserStackAccessKey',
      buildName: `Build_${options.os}_${options.osVersion}_${options.browserName}_${options.browserVersion}`,
      browserName: options.browserName,
      browserVersion: options.browserVersion,
      os: options.os,
      osVersion: options.osVersion,
      sessionName: `Session_${options.os}_${options.osVersion}_${options.browserName}_${options.browserVersion}`
    }
  };
  return isRemote() ? dCaps : defaultCaps(options.browserName);
}

export function isRemote() {
  return lodash.isUndefined(process.env['remote']) || process.env['remote'].includes('false') ? false : true;
}
