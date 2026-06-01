// npx playwright test tests/examples/Parallel/script3.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

test('Step 1: A', async ({ page }) => {
    console.log('Creating item...');
});
