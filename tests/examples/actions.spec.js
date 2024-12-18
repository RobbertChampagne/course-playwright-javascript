// npx playwright test tests/examples/actions.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

// Run with live server
const localUrl = "http://127.0.0.1:5500/tests/examples/test.html"

test('test_text_input', async ({ page }) => {
  await page.goto(localUrl);
  
  // TEXT INPUT
  await page.getByRole('textbox').nth(0).fill('Hello World');
  
  // DATE INPUT
  await page.getByLabel('date').nth(0).fill('2020-02-02');
  
  // TIME INPUT
  await page.getByLabel('time').nth(0).fill('13:15');
  
  // DATETIME INPUT
  await page.getByLabel('datetime').fill('2020-02-02T13:15');
});

test('test_checkboxes', async ({ page }) => {
  await page.goto(localUrl);
  
  // Check the checkbox
  await page.getByLabel('Checkbox One').check();
  
  // Uncheck the checkbox
  await page.getByLabel('Checkbox One').setChecked(false);

  // Assert the checkbox is not checked
  await expect(page.getByLabel('Checkbox One')).not.toBeChecked();

  // Check the checkbox
  await page.getByLabel('Checkbox One').setChecked(true);

  // Assert the checkbox is checked
  await expect(page.getByLabel('Checkbox One')).toBeChecked();
  
  // Select the radio button
  await page.getByLabel('Radio').check();
});

test('test_clicks', async ({ page }) => {
  await page.goto(localUrl);
  
  // Generic click
  await page.getByTitle('Subscribe').click();

  // Double click
  await page.getByTitle('Subscribe').dblclick();

  // Right click
  await page.getByTitle('Subscribe').click({ button: 'right' });

  // Shift + click
  await page.getByTitle('Subscribe').click({ modifiers: ['Shift'] });

  // Hover over element
  await page.getByTitle('Subscribe').hover();

  // Click the top left corner
  await page.getByTitle('Subscribe').click({ position: { x: 0, y: 0 } });
});

test('test_dialogs_auto_dismissed', async ({ page }) => {
  await page.goto('https://letcode.in/alert');
  await page.getByRole('button', { name: 'Simple Alert' }).click();
  // Dialog is showing here, next click is not possible if dialog is not dismissed
  await page.getByRole('button', { name: 'Confirm Alert' }).click();
});

test('test_dialogs_with_handler', async ({ page }) => {
  await page.goto('https://letcode.in');
  await page.getByRole('link', { name: 'Work-Space' }).click();
  await page.getByRole('link', { name: 'Dialog' }).click();
  
  await page.getByRole('button', { name: 'Simple Alert' }).click();
  page.once('dialog', dialog => dialog.dismiss());
  await page.getByRole('button', { name: 'Confirm Alert' }).click();
});