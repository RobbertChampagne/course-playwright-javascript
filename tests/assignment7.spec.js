// npx playwright test tests/assignment7.spec.js --trace on --headed

import { expect, test } from '@playwright/test';

test('Assignment 7 (Handling new pages)', async ({ page }) => {
    // Navigate the page to the Amazon Press Belgium website : 'https://fl.amazon-press.com.be/'
    //...

    // **Start waiting for a new page to open** (before clicking the Twitter button)
    //...

    // Click the Twitter button, triggering the opening of a new page : 'Twitter'
    //...

    // **Wait for the promised new page to be available**
    //...

    // Assert that the 'X' logo is visible on the new page : 'X'
    //...
});