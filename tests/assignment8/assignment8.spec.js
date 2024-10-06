// npx playwright test tests/assignment8/assignment8.spec.js --trace on --headed

import { expect, test } from '@playwright/test';

test('Assignment 8 (Authentication)', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    
    //... 

    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
});