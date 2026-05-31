// npx playwright test tests/examples/visual_comparisons.spec.js --trace on --headed 

import { test, expect } from '@playwright/test';

test('Capture baseline, modify image, and generate visual HTML diff', async ({ page }, testInfo) => {
  
  // ==========================================
  // STEP 1: Capture and save "Screenshot 1" (Baseline)
  // ==========================================
  await page.goto('https://playwright.dev/');

  // Locate the browser logos image element
  const browserLogos = page.locator('img[alt="Chromium, Firefox, WebKit"]');

  // Save the image element baseline screenshot
  await browserLogos.screenshot({ path: 'screenshot1.png' });
  console.log('Screenshot 1 (Baseline) captured and saved as screenshot1.png');


  // ==========================================
  // STEP 2: Alter the image and save "Screenshot 2"
  // ==========================================
  await page.evaluate(() => {
    const logoImg = document.querySelector('img[alt="Chromium, Firefox, WebKit"]');
    if (logoImg) {
      // Inset parameters: (top, right, bottom, left)
      // Specifying '40%' on the right cuts off roughly the last browser logo completely
      logoImg.style.clipPath = 'inset(0 40% 0 0)';
    }
  });

  // Save the modified image element screenshot
  await browserLogos.screenshot({ path: 'screenshot2.png' });
  console.log('Screenshot 2 (Altered) captured and saved as screenshot2.png');


  // ==========================================
  // STEP 3: Compare them to force the 3-image HTML Report Diff
  // ==========================================
  
  // Attach both standalone screenshots directly into the Playwright HTML report attachments list
  await testInfo.attach('Screenshot 1 - Baseline', { path: 'screenshot1.png', contentType: 'image/png' });
  await testInfo.attach('Screenshot 2 - Altered', { path: 'screenshot2.png', contentType: 'image/png' });

  console.log('Running visual assertion comparison...');
  
  // This assertion will fail immediately because screenshot2 on the page doesn't match screenshot1.png
  await expect(browserLogos).toHaveScreenshot('screenshot1.png', {
    maxDiffPixels: 0 // Strict mode: Fail if even 1 pixel is different
  });
});