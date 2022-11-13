import { Given, Then, When } from '@cucumber/cucumber';
import('expect-webdriverio');
Given('the homepage', async function () {
  await homepage.load();
});

When('user loads home page', async function login() {
  await homepage.load();
});

When('user clicks on Health tab', async function () {
  await homepage.navigateToHealth();
});
Then('video player should be visible', async function () {
  await expect(homepage.videoPlayer).toBeDisplayed();
});

Then('video player should not be visible', async function () {
  await expect(homepage.videoPlayer).not.toBeDisplayed();
});
