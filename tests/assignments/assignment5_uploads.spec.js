// npx playwright test tests/assignments/assignment5_uploads.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test.describe('Assignment 5 (Uploads).', () => {

    test('Uploads example', async ({ page }) => {
        await page.goto('https://www.w3schools.com/howto/tryit.asp?filename=tryhow_html_file_upload_button');
        
        // Handle the cookie consent banner inside its iframe.
        // Uses a regular expression to match either the Dutch ('Accepteren') or English ('Accept') button.
        await page.locator('iframe[title="FastCMP"]').contentFrame().getByRole('button', { name: /Accepteren|Accept/i }).click();

        // Unnecessary because setInputFiles will handle the file chooser dialog automatically.
        await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('button', { name: 'Choose File' }).click();

        // Directly inject the file into the upload element using .setInputFiles()
        // Playwright handles the upload behind the scenes without needing to open the browser dialog.
        await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('button', { name: 'Choose File' }).setInputFiles('data/QA.jpg');

        // Click the submit button to process the uploaded file
        await page.locator('iframe[name="iframeResult"]').contentFrame().getByRole('button', { name: 'Submit' }).click();
    });

});

