// npx playwright test tests/cicd-example.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test('CICD example.', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByPlaceholder('What needs to be done?').fill('Todo 1');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByLabel('Toggle Todo').check();
    await page.getByLabel('Delete').click();
});