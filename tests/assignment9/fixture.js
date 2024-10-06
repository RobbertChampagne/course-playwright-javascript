/*
import { test as base } from '@playwright/test';
import { TodoPage } from './pom-todo-page';

// Extend base test by providing "todoPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend({
    todoPage: async ({ page }, use) => {
        // Set up the fixture.
        ...
        // Run the tests.
        ...
        // Clean up.
        ...
    },
});
// For your own convenience you can export expect here 
// so that you only have 1 import in the test file.
export { expect } from '@playwright/test';
*/