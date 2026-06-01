// npx playwright test tests/examples/Parallel/script2.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test('Step 1: B', async ({ page }) => {
    console.log('Creating item...');
});