// cypress.config.js
const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://serverest.dev",
    watchForFileChanges: false,
  },
})
