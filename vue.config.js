const path = require('path')

const outputDir = process.env.VUE_APP_OUTPUT_DIR || 'dist'

module.exports = {
  publicPath: process.env.BASE_URL,
  outputDir,

  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.txt|.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  },
  
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        'vue$': path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
      }
    }
  }
}