// npx playwright test tests/examples/network.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

const CAT_API = process.env.CAT_API;

test('test_all_events', async ({ page }) => {
  // Subscribe to "request" and "response" events.
  page.on('request', request => console.log('>>', request.method(), request.url()));
  page.on('response', response => console.log('<<', response.status(), response.url()));
  await page.goto('https://api.thecatapi.com/v1/breeds?limit=10&page=0');
});

test('test_specific_event', async ({ page }) => {
  // Set the API key in the headers
  await page.setExtraHTTPHeaders({
    'x-api-key': CAT_API
  });

  const responsePromise = page.waitForResponse('**/breeds?limit=10&page=0');
  page.goto('https://api.thecatapi.com/v1/breeds?limit=10&page=0')
  const response = await responsePromise;

  // Parse the response body as JSON array
  const breeds = await response.json();

  // Access the first breed item (index 0) and print it
  if (breeds.length > 0) {
    const firstBreed = breeds[0];
    console.log('First Breed Object:', firstBreed);
    console.log('First Breed Name:', firstBreed.name); // e.g., "Abyssinian"
  } else {
    console.log('No breeds returned in the response.');
  }

  console.log(response.status(), response.url());
});

const testData = {"data":"Test data"};

test('test_fulfill', async ({ page }) => {
  await page.route('**/breeds?limit=10&page=0', route => {
    route.fulfill({
      status: 201,
      contentType: 'application/json',
      body: JSON.stringify(testData)
    })
  });

  // Set the API key in the headers
  await page.setExtraHTTPHeaders({
    'x-api-key': CAT_API
  });

  const responsePromise = page.waitForResponse('**/breeds?limit=10&page=0');
  page.goto('https://api.thecatapi.com/v1/breeds?limit=10&page=0')
  const response = await responsePromise;

  // Parse the response body as JSON array
  const breeds = await response.json();
  console.log(breeds.data);
  console.log(response.status(), response.url());
});

test('test_continue', async ({ page }) => {
  // Intercept and continue the request, and print request details
  await page.route('**/breeds?limit=10&page=0', route => {
    const request = route.request();
    console.log(`Intercepted request: ${request.method()} ${request.url()}`);
    route.continue();
  });

  // Set the API key in the headers
  await page.setExtraHTTPHeaders({
    'x-api-key': CAT_API
  });

  await page.goto('https://api.thecatapi.com/v1/breeds?limit=10&page=0');
});

test('test_abort', async ({ page }) => {
  await page.route('**/breeds?limit=10&page=0', route => route.abort());
  await page.goto('https://api.thecatapi.com/v1/breeds?limit=10&page=0');
});