// npx playwright test tests/examples/assertions.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {

    // Let's create a simple HTML environment dynamically for demonstration
    await page.setContent(`
        <div id="status-box" class="alert-success">System Operational</div>
        <button id="submit-btn" disabled>Processing...</button>
        <div id="counter">0</div>
    `);

    const statusBox = page.locator('#status-box');
    const submitBtn = page.locator('#submit-btn');

    // AUTO-RETRY ASSERTION (Web-First)
    // Playwright will automatically poll the element for up to 5 seconds 
    // waiting for it to have the text 'System Operational'.
    await expect(statusBox).toHaveText('System Operational');


    // NON-AUTO-RETRY ASSERTION (Standard JS/Jest style)
    // This extracts the value immediately as a string. If it fails right now, it crashes instantly.
    const textContent = await statusBox.textContent();
    expect(textContent).toBe('System Operational'); 


    // NEGATING MATCHERS (.not)
    // Asserts that the condition is FALSE. Also auto-retries.
    await expect(submitBtn).not.toBeEnabled();


    // SOFT ASSERTIONS
    // Normally, if an assertion fails, the test stops immediately. 
    // A 'soft' assertion logs the failure but allows the script to keep running!
    await expect.soft(statusBox).toHaveClass('alert-danger'); // This will fail, but execution continues!


    // CUSTOM EXPECT MESSAGE
    // Pass a string as the second argument to expect(). If it fails, this clean message 
    // appears in your test report instead of an ugly raw diff.
    await expect(statusBox, 'The system status should always be visible on load').toBeVisible();


    // EXPECT.CONFIGURE (Local Custom Timeout)
    // Create a specialized 'expect' instance that gives slow elements more time to load.
    const slowExpect = expect.configure({ timeout: 10000 }); // 10 seconds timeout
    await slowExpect(statusBox).toHaveText('System Operational');


    // EXPECT.TOPASS (With custom timeout and retry intervals)
    // Perfect for checking flaky backend APIs, canvas objects, or non-Playwright elements.
    // It runs the entire block of code repeatedly until it passes without errors.
    await expect(async () => {
        // Imagine code here fetching a status or reading an updated UI counter
        const counterText = await page.locator('#counter').innerText();
        expect(counterText).toBe('0');
    }).toPass({
        intervals: [1000, 2000, 5000], // Wait 1s, then 2s, then 5s between retries
        timeout: 15000                 // Total max time allowed to pass
    });
});