// npx playwright test tests/examples/cicd.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test('Pass', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.getByLabel("Switch between dark and light")).toBeVisible();
});