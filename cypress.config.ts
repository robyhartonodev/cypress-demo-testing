import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    // Enable video recording for test runs
    video: true,

    // Enable screenshots on test failures
    screenshotOnRunFailure: true,

    // // Set the reporter to mochawesome for detailed reports
    // reporter: 'mochawesome',

    // // Configure mochawesome reporter options
    // reporterOptions: {
    //   charts: true,
    //   reportDir: 'cypress/results/reports',
    //   overwrite: false,
    //   html: true,
    //   json: true
    // }
  },

  // Optionally, configure global settings (like videos/screenshots)
  videoCompression: 32,
  trashAssetsBeforeRuns: true
});
