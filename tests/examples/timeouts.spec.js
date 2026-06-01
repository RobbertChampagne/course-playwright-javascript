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
  // Individual browser actions 
  // .click(), .fill(), or .hover()
  //page.setDefaultTimeout(10000);
  page.setDefaultTimeout(2000);
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
  //await expect(page.getByText('Non-existent element')).toBeVisible({ timeout: 10000 });
  await expect(page.getByText('Non-existent element')).toBeVisible({ timeout: 2000 });
  // Fails in +/- 10 seconds.
});

// USING test.slow()
// This multiplies the standard test timeout by 3x for this specific test.
// If your global timeout is 30s, this test dynamically receives 90 seconds.
test('test_with_slow_modifier', async ({ page }) => {
  test.slow();
  await page.goto(url);
  await page.getByText('Non-existent element').click();
});

test('test_with_custom_set_timeout', async ({ page }) => {
  // Everything combined: 
  // beforeEach hooks, page transitions, typing, clicking, and afterEach cleanups.
 // test.setTimeout(120000); // This specific test now has a hard 2-minute ceiling
  test.setTimeout(2000); // This specific test now has a hard 2-minute ceiling
  await page.goto(url);
  await page.getByText('Non-existent element').click();
});

// READING testInfo.timeout
// You can inspect the currently allocated timeout dynamically at runtime using the testInfo fixture.
test('test_reading_current_timeout_info', async ({ page }, testInfo) => {
  // Logs the active limit (e.g., 30000 if using defaults)
  console.log(`The active total test timeout is: ${testInfo.timeout}ms`);

  //test.setTimeout(45000);
  test.setTimeout(2000);

  // Logs 45000 because it reads the updated state instantly
  console.log(`The newly updated test timeout is: ${testInfo.timeout}ms`);

  await page.goto(url);
});

