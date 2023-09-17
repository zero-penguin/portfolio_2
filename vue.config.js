const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

export default {
  build: {
    babel: {
      babelrc: false,
      compact: false
    }
  }
};