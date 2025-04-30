// npx playwright test tests/assignments/assignment10_network.spec.js --trace on --headed

/*
URL=https://demo.playwright.dev/todomvc/#/
SELECTOR=.header h1
TEXT=todos
*/

import { expect, test } from '@playwright/test';

test.describe('Environment variables.', () => {
    let url, text, selector;
    /*
    test.beforeAll(async () => {
        ...
    });

    test('Assignment 10 (Environment variables)', async ({ page }) => {
        ...
    });
    */
});