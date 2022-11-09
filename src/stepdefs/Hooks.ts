import { Before, setDefaultTimeout } from '@cucumber/cucumber';
import Pages from '../pages/Pages';
import TestContext from 'testContext';

setDefaultTimeout(60000);
Before({ name: 'Initialize Test context' }, function (this: TestContext) {
  global.testContext = this as TestContext;
});

Before({ tags: '@ui', name: 'Initialize UI Client' }, async function () {
  await uiClient.init(this.parameters['browser']);
  global.app = new Pages(uiClient.instance);
});
