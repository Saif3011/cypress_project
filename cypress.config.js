const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl" :"https://qacart-todo.herokuapp.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
