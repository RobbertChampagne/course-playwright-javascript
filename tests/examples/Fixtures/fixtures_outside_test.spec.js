// npx playwright test tests/examples/Fixtures/fixtures_outside_test.spec.js --trace on --headed

// Import 'test' from your local fixtures file instead of @playwright/test
// import { test, expect } from '@playwright/test';
import { test, expect } from './fixture.spec.js';

test.describe('Fixture tests', () => {

    // Inject your custom 'PlaywrightDevPage' fixture directly into the test arguments
    test('test_main_navigation', async ({ PlaywrightDevPage }) => {
        // 'PlaywrightDevPage' here is the ready-to-use 'page' object that already navigated to the site
        await expect(PlaywrightDevPage).toHaveURL('https://playwright.dev/');
    });

});