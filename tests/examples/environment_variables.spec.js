// npx playwright test tests/examples/environment_variables.spec.js --trace on --headed

import { test, expect } from '@playwright/test';

const itemFile = process.env.TODO_ITEM;
const itemTerminal = process.env.TODO_ITEM_TERMINAL;

test('test_env_file', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.locator('input.new-todo').fill(itemFile);
  await page.locator('input.new-todo').press('Enter');
});

// set TODO_ITEM_TERMINAL="Buy milk" && npx playwright test tests/examples/environment_variables.spec.js -g "test_env_terminal" --trace on --headed
test('test_env_terminal', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.locator('input.new-todo').fill(itemTerminal);
  await page.locator('input.new-todo').press('Enter');
});

test.describe('Fixture tests', () => {
  test.beforeEach(async ({ page }) => {
    // Set an environment variable inside the fixture
    process.env.TODO_ITEM_FIXTURE = 'Buy bread';
  });

  test('test_fixture', async ({ page }) => {
    const itemFixture = process.env.TODO_ITEM_FIXTURE;
    await page.goto('https://demo.playwright.dev/todomvc/');
    await page.locator('input.new-todo').fill(itemFixture);
    await page.locator('input.new-todo').press('Enter');
  });
});