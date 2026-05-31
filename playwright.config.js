// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Read from default .env file
// npm install dotenv --save-dev
dotenv.config();

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
   
     {
      name: 'chromium-anonymous',
      use: { ...devices['Desktop Chrome'] },
      // Run everything EXCEPT the files inside the Authentication folder or setup files
      testIgnore: [/.*\.setup\.js/, '**/Authentication/**'], 
    },

    // =================================================
    // Authentication Profiles (Using storageState)
    // =================================================
    // Runs your authentication scripts first to save session files
    {
      name: 'standard-setup',
      testMatch: '**/Authentication/standard.setup.js',
    },
    {
      name: 'admin-setup',
      testMatch: '**/Authentication/admin.setup.js',
    },

    // Standard User Testing Profile
    {
      name: 'chromium-standard-user',
      dependencies: ['standard-setup'], // Wait for setup project to finish
      testIgnore: /.*\.setup\.js/, // Don't re-run setup files here
      testMatch: '**/Authentication/standard.spec.js', // ONLY runs the standard user test spec file
      use: {
        ...devices['Desktop Chrome'],
        storageState: './tests/examples/Authentication/states/standard_state.json',
      },
    },

    // Admin User Testing Profile
    {
      name: 'chromium-admin-user',
      dependencies: ['admin-setup'], // Wait for setup project to finish
      testIgnore: /.*\.setup\.js/, // Don't re-run setup files here
      testMatch: '**/Authentication/admin.spec.js', // ONLY runs the admin user test spec file
      use: {
        ...devices['Desktop Chrome'],
        storageState: './tests/examples/Authentication/states/admin_state.json',
      },
    },
  ],
});

