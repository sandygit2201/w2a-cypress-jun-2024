const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://automationexercise.com/",
    adminURL:"https://admin.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges:false
  },
});
