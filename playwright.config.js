// @ts-check
const { defineConfig, devices } = require('@playwright/test');

export const STORAGE_STATE_8 = './tests/assignment8/setupcredentials.json';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

require('dotenv').config()

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
   
    // Assignment8
    {
      name: 'Assignment 8 Setup',
      testDir: 'tests/assignments/assignment8',
      testMatch: 'assignment8-global.setup.js',
    },
    {
      name: 'Assignment 8',
      testDir: 'tests/assignments/assignment8',
      dependencies: ['Assignment 8 Setup'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: STORAGE_STATE_8
      },
    },

    // Default project to run any test under /tests
    {
      name: 'Default',
      testDir: 'tests',
      testMatch: '**/*.spec.js', // Match all .spec.js files under /tests
      testIgnore: [
        '**/tests/assignments/assignment8/assignment8.spec.js' // Ignore these tests
      ],
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

