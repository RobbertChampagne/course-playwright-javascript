// npx playwright test tests/examples/timeouts.spec.js --trace on --headed 
// npx playwright test tests/examples/timeouts.spec.js -g "test_custom_expect_timeout" --trace on --headed 
import { test, expect } from '@playwright/test';
const url = 'https://playwright.dev/';

test('test_default_timeout', async ({ page }) => {
  await page.goto(url);
  
  // This will wait for an element that does not exist, causing a timeout
  await page.getByText('Non-existent element').click();
  // Locator.click: Timeout 30000ms exceeded.
});

test('test_custom_timeout', async ({ page }) => {
  page.setDefaultTimeout(10000);  // Set custom timeout to 10 seconds
  await page.goto(url);
  
  // This will wait for an element that does not exist, causing a timeout
  await page.getByText('Non-existent element').click();
  // Locator.click: Timeout 10000ms exceeded.
});

test('test_default_expect_timeout', async ({ page }) => {
  await page.goto(url);
  
  // This will wait for an element that does not exist, causing a timeout
  await expect(page.getByText('Non-existent element')).toBeVisible();
  // Fails in +/- 5 seconds.
});

test('test_custom_expect_timeout', async ({ page }) => {
  await page.goto(url);
  
  // This will wait for an element that does not exist, causing a timeout
  await expect(page.getByText('Non-existent element')).toBeVisible({ timeout: 10000 });
  // Fails in +/- 10 seconds.
});