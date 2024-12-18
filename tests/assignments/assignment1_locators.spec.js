// npx playwright test tests/assignments/assignment1_locators.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test.describe('Assignment 1 (Locators)', () => {

  test('test', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByPlaceholder('What needs to be done?').fill('Todo 1');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByLabel('Toggle Todo').check();
    await page.getByLabel('Delete').click();
  });

  // Now use only the .locator() function to recreate the previous flow.
  // Open a normal browser navigate to the todo app and open the inspector so you can find the css selectors.

  
  test.skip('Use CSS locators.', async ({ page }) => {
      await page.goto('https://demo.playwright.dev/todomvc/#/');
      await page.locator(' ').fill('Todo 1');
      await page.locator(' ').press('Enter');
      await page.locator(' ').check();
      await page.locator(' ').click();
  });
  

  // Explanation:
  // Most of the time it will be possible to use the recommended built -in locators,
  // but as the situation becomes more complex you may need to use the.locator() function from time to time.

});