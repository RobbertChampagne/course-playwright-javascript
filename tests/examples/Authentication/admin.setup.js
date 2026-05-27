import { test as setup, expect } from '@playwright/test';

// Define paths for the separate user sessions
export const ADMIN_STORAGE_PATH = './tests/examples/Authentication/states/admin_state.json';

// Setup for the Admin User
setup('Setup Admin User', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user'); // Using standard_user as a stand-in for admin
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('#shopping_cart_container a')).toBeVisible();

  await page.context().storageState({ path: ADMIN_STORAGE_PATH });
});