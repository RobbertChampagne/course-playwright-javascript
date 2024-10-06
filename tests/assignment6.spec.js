// npx playwright test tests/assignment6.spec.js --trace on --headed

import { expect, test } from '@playwright/test';

test('Assignment 6 (Multiple Pages)', async ({ context }) => {
    // Create two new browser pages from the provided context
    //...

    // Navigate the first page to Sauce Labs login page : 'https://www.saucedemo.com/'
    //...

    // Fill the login form on the first page
    //...

    // Navigate the second page to OrangeHRM login page : 'https://opensource-demo.orangehrmlive.com'
    //...

    // Fill the login form on the second page
    //...

    // Assertions on the first page
    // Verify the presence of the header text on Sauce Labs : 'Swag Labs'
    //...

    // Verify the presence of a specific text within a heading element : 'Dashboard'
    //...

    // Assertions on page URLs
    // Verify the expected URL of the first page after login
    //...

    // Verify the expected URL of the second page after login
    //...
});