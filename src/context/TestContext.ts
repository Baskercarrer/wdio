import { IWorldOptions, World, setWorldConstructor } from '@cucumber/cucumber';
import Pages from 'pages';
import UiClient from 'uiClient';
import { bsCaps } from '@utils/Environment';

export default class TestContext extends World<BrowserStackType> {
  private _value: unknown;

  constructor(options: IWorldOptions) {
    super(options);
    global.uiClient = new UiClient(bsCaps(this.parameters as BrowserStackType));
  }

  get value(): unknown {
    return this._value;
  }

  set value(value: unknown) {
    this._value = value;
  }
}
setWorldConstructor(TestContext);

declare global {
  var app: Pages;
  var uiClient: UiClient;
  var testContext: TestContext;
}

export interface BrowserStackType {
  browserName: string;
  browserVersion: string;
  os: string;
  osVersion: string;
}
