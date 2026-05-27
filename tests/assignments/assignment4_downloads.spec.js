// npx playwright test tests/assignments/assignment4_downloads.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test.describe('Assignment 4 (Downloads).', () => {

    test('Downloads example', async ({ page }) => {
        await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_a_download');

        // Handle the cookie consent banner inside its iframe.
        // Uses a regular expression to match either the Dutch ('Accepteren') or English ('Accept') button.
        await page
            .locator('iframe[title="FastCMP"]')
            .contentFrame()
            .getByRole('button', { name: /Accepteren|Accept/i })
            .click();

        // Set up the download event listener FIRST
        const downloadPromise = page.waitForEvent('download');

        // Click the download link located inside the preview workspace iframe
        await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('link', { name: 'W3Schools' }).click();

        // Await the completion of the download stream
        const download = await downloadPromise;

        // Define the destination path
        const targetPath = './downloads/w3schools.html';

        // Save the temporary download stream permanently into your project folder
        await download.saveAs(targetPath);

        // Log the file path to the console for student verification
        console.log(`Successfully downloaded: ${download.suggestedFilename()}`);
        console.log(`File saved locally at: ${targetPath}`);
    });

});