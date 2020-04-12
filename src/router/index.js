import Vue from 'vue'
import VueRouter from 'vue-router'

const homePage = () => import(/* webpackChunkName: "home" */ '@/views/homePage.vue')
const editPage = () => import(/* webpackChunkName: "edit" */ '@/views/editPage.vue')
const articlePage = () => import(/* webpackChunkName: "article" */ '@/views/articlePage.vue')
const sortPage = () => import(/* webpackChunkName: "sort" */ '@/views/sortPage.vue')
const aboutPage = () => import(/* webpackChunkName: "about" */ '@/views/aboutPage.vue')
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: homePage },
  { path: '/edit', component: editPage },
  { path: '/article/:id', component: articlePage },
  { path: '/sort/:type', component: sortPage },
  { path: '/about', component: aboutPage }
]

const router = new VueRouter({
  routes
})

export default router
