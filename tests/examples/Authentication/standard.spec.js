// npx playwright test tests/examples/Authentication/standard.spec.js --trace on --headed
// npx playwright test tests/examples/Authentication/ --headed

import { expect, test } from '@playwright/test';

// This test will log in seamlessly using 'standard_user' cookies
test('Standard User Checkout Flow', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('QA');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('QA ');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('3850');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();

    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
});