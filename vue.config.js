module.exports = {
  devServer: {
    open: true
  },
  chainWebpack: config => {
    config.set('externals', {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      axios: 'axios',
      nprogress: 'NProgress',
      vuex: 'Vuex'
    })
    config.plugin('html')
      .tap((args) => {
        args[0].title = 'Ther的屑博客'
        return args
      })
  }
}
