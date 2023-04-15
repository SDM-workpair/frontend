const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

  devServer: {
    proxy: {
      '/api': {
        target: 'http://backend.sdm-workpair.com/api/',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        ws: true
      }
    }
  },


  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})

