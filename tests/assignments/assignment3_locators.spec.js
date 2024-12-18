// npx playwright test tests/assignments/assignment3_locators.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test.describe('Assignment 3 (Filtering Locators) With the same text.', () => {

  // Follow these steps in codegen
  test('Add multiple todo items. (With the same text)', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByPlaceholder('What needs to be done?').fill('Todo');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('Todo');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('Todo');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    // Do NOT select the item first
    await page.getByRole('button', { name: 'Delete' }).click(); // Will fail
  });

  // Use .filter() & .locator() to find the delete button from the second item you want to click on.
  test.skip('Use .filter() & .locator() to find the delete button from the second item.', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByPlaceholder('What needs to be done?').fill('Todo');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('Todo');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('Todo');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    // Find the list items containing "Todo" 
    //...

    // Make the delete button visible
    //...

    // Click the delete button   
    //...
  });
});