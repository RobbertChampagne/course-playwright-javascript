// npx playwright test tests/examples/iframes.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test('test_frame', async ({ page }) => {
  await page.goto('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_html_file_upload_button');
  
  // Accept cookies
  await page.getByText('Accept all & visit the site').click();
  
  await page.locator('iframe[name="iframeResult"]').contentFrame().locator('#myFile').click();
  await page.locator('iframe[name="iframeResult"]').contentFrame().locator('#myFile').setInputFiles('data/QA.jpg');
  await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('button', { name: 'Submit' }).click();
});