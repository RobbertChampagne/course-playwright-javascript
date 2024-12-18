// npx playwright test tests/assignments/assertions.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test('Assertion test', async ({ page }) => {
    await page.goto('https://playwright.dev/')
    // It looks like codegen is selecting more text but it is only selecting the text 'Playwright'.
    const element = page.getByRole('...', { name: '...' }).locator('...')
    const elementText = await element.textContent();
    const text = 'Playwright'
    const partOfText = 'Play';

    // Auto-retrying assertions
    // await ...
    // await ...

    // Non-retrying assertions (Is not working on an element only on a String value.)
    //...
});