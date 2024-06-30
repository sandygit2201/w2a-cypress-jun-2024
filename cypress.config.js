import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:"https://automationexercise.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges:false,
    screenshotOnRunFailure:true,
    env:{
      adminURL:"https://google.com",
    }

  },
});
