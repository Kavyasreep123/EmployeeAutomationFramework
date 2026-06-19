import { defineConfig, devices } from '@playwright/test';
import qa from './config/qa.json';

export default defineConfig({

  // Test folder
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Prevent accidental test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests
  retries: process.env.CI ? 2 : 1,

  // Workers
  workers: process.env.CI ? 1 : undefined,

  // Global test timeout
  timeout: 60000,

  // Expect timeout
  expect: {
    timeout: 10000
  },

  // Reporters
  reporter: [
    ['html'],
    ['list']
  ],

  // Shared settings
  use: {

    // Base URL from config
    baseURL: qa.url,

    // Browser mode
    headless: true,

    // Take screenshot if test fails
    screenshot: 'only-on-failure',

    // Keep video if test fails
    video: 'retain-on-failure',

    // Keep trace if test fails
    trace: 'retain-on-failure',

    // Action timeout
    actionTimeout: 20000,

    // Navigation timeout
    navigationTimeout: 30000,

    // Ignore SSL certificate issues
    ignoreHTTPSErrors: true
  },

  // Cross-browser execution
  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      }
    }

  ],

  // Store artifacts
  outputDir: 'test-results'

});