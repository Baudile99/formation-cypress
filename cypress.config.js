const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '17tvzq',
  e2e: {
    baseUrl:'https://practice.expandtesting.com/notes/app',
    viewportHeight: 720,
    viewportWidth: 1280,
  video : true ,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
