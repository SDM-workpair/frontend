const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       loader: ['style-loader', 'css-loader'], // Note that the order is very important
  //     },
  //   ]
  // },

  configureWebpack: {
    // It will be merged into the final Webpack config
    resolve: {
      extensions: ['', '.js', '.jsx', '.css'],
      // alias: {
      //   xyz$: path.resolve(__dirname, 'path/to/file.js'),
      // },
    }
    
 
  },



  transpileDependencies: true,
  lintOnSave:false,

  devServer: {
    proxy: {
      '/api': {
        target: 'http://backend.sdm-workpair.com/api/',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        ws: false
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

