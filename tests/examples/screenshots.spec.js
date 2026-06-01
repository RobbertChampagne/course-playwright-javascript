// npx playwright test tests/examples/screenshots.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

const dir = 'data/example_module/screenshots/';

test('test_screenshot_examples', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  
  // Capture a screenshot of the current view of the page
  await page.screenshot({ path: `${dir}screenshot_page.png` });

  // Capture a screenshot of the entire page, including parts not visible in the viewport
  await page.screenshot({ path: `${dir}screenshot_full_page.png`, fullPage: true });

  // Capture a screenshot of a specific image element identified by its role and name
  await page.getByAltText('Chromium, Firefox, WebKit').screenshot({ path: `${dir}screenshot_image.png` });
});


// Note: include 'testInfo' in the arguments to get access to the reporting system
test('Add screenshot to HTML report.', async ({ page }, testInfo) => {
    
    await page.goto('https://playwright.dev/');

    const elementLocator = page.getByAltText('Chromium, Firefox, WebKit');

    const elementScreenshot = await elementLocator.screenshot();

    // Attach the screenshot buffer directly to the test results of the current run
    await testInfo.attach('Screenshot of an element.', { 
        body: elementScreenshot, 
        contentType: 'image/png' 
    });
});