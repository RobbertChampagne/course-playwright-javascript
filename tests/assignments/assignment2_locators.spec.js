// npx playwright test tests/assignments/assignment2_locators.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test.describe('Assignment 2 (Filtering Locators)', () => {

  test('Add multiple todo items.', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByPlaceholder('What needs to be done?').fill('Todo 1');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('Todo 2');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('Todo 3');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    // Do NOT select the item first
    await page.getByRole('button', { name: 'Delete' }).click(); // Will fail
  });

  // Use .filter() & .locator() to find the right button you want to click on.
  test.skip('Use .filter() & .locator() to find a solution.', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByPlaceholder('What needs to be done?').fill('Todo 1');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('Todo 2');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('Todo 3');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    // Find the list item containing "Todo 1".
    //...

    // Make the delete button visible.
    //...

    // Click the delete button. 
    //...

  });
});