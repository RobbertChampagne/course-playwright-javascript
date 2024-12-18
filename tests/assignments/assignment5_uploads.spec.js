// npx playwright test tests/assignments/assignment5_uploads.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test.describe('Assignment 5 (Uploads).', () => {

  //OUTPUT CODEGEN: (not working after copy paste in test => cookies)
  /*
    await page.goto('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_html_file_upload_button');
    await page.locator('iframe[name="iframeResult"]').contentFrame().locator('#myFile').click();
    await page.locator('iframe[name="iframeResult"]').contentFrame().locator('#myFile').setInputFiles('QA.jpg');
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('button', { name: 'Submit' }).click();
    await page.goto('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_html_file_upload_button');
  */

  // Which lines of code are unnecessary?
  test('Uploads example', async ({ page }) => {
    await page.goto('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_html_file_upload_button');
    await page.getByText('Accept all & visit the site').click();
    await page.locator('iframe[name="iframeResult"]').contentFrame().locator('#myFile').click(); 
    await page.locator('iframe[name="iframeResult"]').contentFrame().locator('#myFile').setInputFiles('data/QA.jpg'); //needs path to file
    await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('button', { name: 'Submit' }).click();
  });

});