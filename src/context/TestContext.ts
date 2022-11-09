import { IWorldOptions, World, setWorldConstructor } from '@cucumber/cucumber';
import Pages from 'pages';
import UiClient from 'uiClient';

export default class TestContext extends World {
  private _value: unknown;

  constructor(options: IWorldOptions) {
    super(options);
    global.uiClient = new UiClient();
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
