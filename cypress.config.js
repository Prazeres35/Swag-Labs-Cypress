const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportHeight: 880,
    viewportWidth: 1280,
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true,
  },
  screenshotOnRunFailure: true,
  video: false,
  trashAssetsBeforeRuns: true
})