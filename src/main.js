import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
axios.defaults.baseURL = 'http://ther.shenque.top/'
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done() // 结束 Progress
})
/* axios.interceptors.request.use(config => {
  NProgress.start()
  return config
})
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
}) */
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

// axios.interceptors.response.use(
//   res => {
//     return res
//   },
//   err => {
//     return err
//     // switch (err.response.status) {
//     //   case 403:
//     //     err.message = '无权访问'
//     // }
//     // return Promise.reject(err)
//   }
// )
Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    block.style.backgroundColor = '#E9ECEF'
    hljs.highlightBlock(block)
  })
})
Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(parseInt(originVal))
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + 1 + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
Vue.filter('typeFormat', function (val) {
  if (val === 1) {
    return '前端'
  } else if (val === 2) {
    return '后端'
  } else if (val === 3) {
    return '计算机网络'
  } else if (val === 4) {
    return '操作系统'
  } else if (val === 5) {
    return '算法'
  }
})
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
