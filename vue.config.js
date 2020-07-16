module.exports = {
  devServer: {
    open: true
  },
  chainWebpack: config => {
    config.set('externals', {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      axios: 'axios',
      nprogress: 'NProgress'
    })
  }
}
