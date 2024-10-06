import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Visual-comparison.', () => {

    // Define the path to save the baseline screenshot
    const baselineScreenshotPath = path.join(__dirname, 'screenshots', 'baseline', 'playwright-dev.png');

    // npx playwright test tests/visual-comparison/compareScreenshots.spec.js --trace on --update-snapshots
    test('Update snapshots.', async ({ page }) => {
        await page.goto('https://playwright.dev/');

        // Compare the current state of the page with the baseline screenshot
        await expect(page).toHaveScreenshot('playwright-dev.png', {
            path: baselineScreenshotPath
        });
    });

    // npx playwright test tests/visual-comparison/compareScreenshots.spec.js --trace on
    test('Compare screenshots (pass)', async ({ page }) => {
        await page.goto('https://playwright.dev/'); 

        // Compare the current state of the page with the baseline screenshot
        await expect(page).toHaveScreenshot('playwright-dev.png', {
            path: baselineScreenshotPath
        });
    });

    test.only('Compare screenshots (fail)', async ({ page }) => {
        await page.goto('https://playwright.dev/python/');

        // Compare the current state of the page with the baseline screenshot
        await expect(page).toHaveScreenshot('playwright-dev.png', {
            path: baselineScreenshotPath
        });
    });

});