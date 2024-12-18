// npx playwright test tests/assignments/assignment4_downloads.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test.describe('Assignment 4 (Downloads).', () => {

  test('Downloads example', async ({ page }) => {
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_a_download');

    const downloadPromise = page.waitForEvent('download'); //start waiting for download

    await page.getByText('Accept all & visit the site').click(); //accept cookies

    await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('link', { name: 'W3Schools' }).click();
    const download = await downloadPromise;

    await download.saveAs('./downloads/w3schools.html'); //save the download
  });

});