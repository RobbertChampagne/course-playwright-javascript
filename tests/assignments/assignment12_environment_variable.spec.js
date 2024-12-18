// npx playwright test tests/assignments/assignment12_environment_variable.spec.js --trace on --headed

import { expect, test } from '@playwright/test';
/*
test('Assignment 12 (Network) .fulfill()', async ({ page }) => {
    // Enable request interception
    ...

        // Fulfill the intercepted request with a custom response
      
            body: JSON.stringify({
                data: { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "James", "last_name": "Bond" }
            })
       
    ...

    // Navigate to a page that triggers network requests
    ...

    // Wait for the response to the intercepted request
    await expect(page.locator('pre')).toContainText('{"data":{"id":2,"email":"janet.weaver@reqres.in","first_name":"James","last_name":"Bond"}}');
});
*/