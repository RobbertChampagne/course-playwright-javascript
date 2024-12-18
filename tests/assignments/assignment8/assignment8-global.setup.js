import { test as setup, expect } from '@playwright/test';
import path from 'path';
const STORAGE_STATE_8 = path.join(__dirname, 'setupcredentials.json');
/*
setup('GlobalSetup', async ({ page }) => {
    // Navigate
    ...
    // Login actions
    ...
    // Check an element to see if the login passed
    ...
    await page.context().storageState({ path: STORAGE_STATE_8 });
});
*/
export { STORAGE_STATE_8 };


