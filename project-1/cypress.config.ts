import { defineConfig } from 'cypress'

export default defineConfig({
  viewPortWidth: 1920,
  viewPortHeight: 1080,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000/',
    excludeSpecPattern: '**/2-advanced-examples/*'
  },
})
