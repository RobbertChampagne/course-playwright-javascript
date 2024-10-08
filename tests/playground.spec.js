// npx playwright test tests/playground.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test('Assertion test', async ({ page }) => {
    await page.goto('https://playwright.dev/')
    // It looks like codegen is selecting more text but it is only selecting the text 'Playwright'.
    const element = page.getByRole('...', { name: '...' }).locator('...')

    const text = await element.innerText(); // 'Playwright'
    const partOfText = 'Play';

    // Auto-retrying assertions (don't need to use await to wait for the element they will retry until they pass or timeout.)
    //...

    // Non-retrying assertions (Is not working on an element only on a String value.)
    //...
});