// npx playwright test tests/examples/network.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test('test_all_events', async ({ page }) => {
  // Subscribe to "request" and "response" events.
  page.on('request', request => console.log('>>', request.method(), request.url()));
  page.on('response', response => console.log('<<', response.status(), response.url()));
  await page.goto('https://reqres.in/api/users?page=2');
});

test('test_specific_event', async ({ page }) => {
  const responsePromise = page.waitForResponse('**/users?page=2');
  page.goto('https://reqres.in/api/users?page=2')
  const response = await responsePromise;

  await expect(page.getByText('{"page":2,"per_page":6,"total')).toBeVisible();
  console.log(response.status(), response.url());
});

const testData = 'Test data';

test('test_fulfill', async ({ page }) => {
  await page.route('**/users?page=2', route => {
    route.fulfill({
      status: 200,
      body: testData
    })
  });
  await page.goto('https://reqres.in/api/users?page=2');
});

test('test_continue', async ({ page }) => {
  // Intercept and continue the request, and print request details
  await page.route('**/users?page=2', route => {
    const request = route.request();
    console.log(`Intercepted request: ${request.method()} ${request.url()}`);
    route.continue();
  });
  await page.goto('https://reqres.in/api/users?page=2');
});

test('test_abort', async ({ page }) => {
  await page.route('**/users?page=2', route => route.abort());
  await page.goto('https://reqres.in/');
  await page.getByRole('link', { name: 'List users' }).click();
  await page.getByRole('link', { name: '/api/users?page=' }).click();
});