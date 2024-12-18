// npx playwright test tests/examples/fixtures.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test.describe('Fixture tests', () => {
  test.beforeEach(async ({ page }) => {
    console.log('before the test runs');

    // Go to the starting url before each test.
    await page.goto('https://playwright.dev/');
  });

  test.afterEach(async () => {
    console.log('after the test runs');
  });

  test('test_main_navigation', async ({ page }) => {
    await expect(page).toHaveURL('https://playwright.dev/');
  });
});

