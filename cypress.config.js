const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false, // Adicione esta linha aqui

    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
  },
});
