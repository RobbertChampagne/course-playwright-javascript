// npx playwright test tests/examples/pages.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test('test_multiple_pages', async ({ page }) => {
  // Use the existing page fixture as page_one
  const pageOne = page;

  // Create a new page for page_two
  const context = page.context();
  const pageTwo = await context.newPage();

  await pageOne.goto('https://www.saucedemo.com/');
  await pageOne.locator('[data-test="username"]').fill('standard_user');
  await pageOne.locator('[data-test="password"]').fill('secret_sauce');
  await pageOne.locator('[data-test="login-button"]').click();

  await pageTwo.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await pageTwo.getByPlaceholder('Username').fill('Admin');
  await pageTwo.getByPlaceholder('Password').fill('admin123');
  await pageTwo.getByRole('button', { name: 'Login' }).click();
});

test('test_handling_new_pages', async ({ page }) => {
  
  await page.goto('https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer');

  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Press Center' }).click();
  const page2 = await page2Promise;
  await expect(page2.getByText('Amazon Global Press Center')).toBeVisible();

});