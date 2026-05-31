// npx playwright test tests/examples/Parallel/script1.spec.js --trace on --headed
// npx playwright test tests/examples/Parallel --trace on --headed

import { test, expect } from '@playwright/test';

// This overrides the global 'fullyParallel' setting for THIS block/file
//test.describe.configure({ mode: 'serial' });

test.describe('Dependent E-Commerce Flow', () => {
  
  test('Step 1: X', async ({ page }) => {
    // This runs first
    console.log('Creating item...');
  });

  test('Step 2: Y', async ({ page }) => {
    // This runs second, relying on Step 1
    console.log('Purchasing item...');
  });

  test('Step 3: Z', async ({ page }) => {
    // This runs third, relying on Step 2
    console.log('Checking inventory...');
  });
});