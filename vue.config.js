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
    },
    allowedHosts: [
      'localhost',
      'app.sdm-workpair.com',
      '34.96.75.13',
    ]

  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})

