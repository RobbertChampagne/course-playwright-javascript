import { test as base, expect } from '@playwright/test';

// Extend the base test to create the custom fixture
export const test = base.extend({
    // Define a custom fixture named 'PlaywrightDevPage'
    PlaywrightDevPage: async ({ page }, use) => {
        console.log('before the test runs (Fixture Setup)');

        // Go to the starting URL
        await page.goto('https://playwright.dev/');

        // Pass the prepared page fixture to the actual test
        await use(page);

        // This code runs completely after the test finishes
        console.log('after the test runs (Fixture Teardown)');
    },
});

// Export expect as well so you can import everything from this single file
export { expect };