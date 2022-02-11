const { defineConfig } = require('cypress')
const { devServer } = require('@cypress/react/plugins/react-scripts')

module.exports = defineConfig({
  viewportWidth: 375,
  viewportHeight: 812,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
  },
  component: {
    devServer,
    devServerConfig: {}
  },
})
