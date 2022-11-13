import { After, AfterStep, Before, ITestStepHookParameter, setDefaultTimeout } from '@cucumber/cucumber';
import Pages from '../pages/Pages';
import TestContext from 'testContext';

setDefaultTimeout(100000);
Before({ name: 'Initialize Test context' }, function (this: TestContext) {
  global.testContext = this as TestContext;
});

Before({ tags: '@ui', name: 'Initialize UI Client' }, async function () {
  await uiClient.init();
  global.app = new Pages(uiClient.instance);
});

After({ tags: '@ui', name: 'Close Ui Client' }, async function () {
  await uiClient.close();
});

AfterStep({ tags: '@ui' }, async function (step: ITestStepHookParameter) {
  if (step.result.status === 'FAILED') {
    this.attach(await uiClient.instance.saveScreenshot('cucumber-report/screenshots/' + step.testStepId + '.png'), 'image/png');
  }
});
