import { test as setup, expect } from '@playwright/test';

// Define paths for the separate user sessions
export const STANDARD_STORAGE_PATH = './tests/examples/Authentication/states/standard_state.json';

// Setup for the Standard User
setup('Setup Standard User', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('#shopping_cart_container a')).toBeVisible();

  await page.context().storageState({ path: STANDARD_STORAGE_PATH });
});