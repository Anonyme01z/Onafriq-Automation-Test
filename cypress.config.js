const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  env: {
    stagingUrl: "https://www.automationexercise.com/",
  },
  
  
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});
