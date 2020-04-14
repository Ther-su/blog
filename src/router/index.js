import Vue from 'vue'
import VueRouter from 'vue-router'

const homePage = () => import(/* webpackChunkName: "home" */ '@/views/homePage.vue')
const editPage = () => import(/* webpackChunkName: "edit" */ '@/views/editPage.vue')
const articlePage = () => import(/* webpackChunkName: "article" */ '@/views/articlePage.vue')
const sortPage = () => import(/* webpackChunkName: "sort" */ '@/views/sortPage.vue')
const aboutPage = () => import(/* webpackChunkName: "about" */ '@/views/aboutPage.vue')
const loginPage = () => import(/* webpackChunkName: "login" */ '@/views/loginPage.vue')
const modifyPage = () => import(/* webpackChunkName: "modify" */ '@/views/modifyPage.vue')
const managePage = () => import(/* webpackChunkName: "manage" */ '@/views/managePage.vue')
const backstagePage = () => import(/* webpackChunkName: "backstage" */ '@/views/backstagePage.vue')
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: homePage },
  { path: '/article/:id', component: articlePage },
  { path: '/sort/:type', component: sortPage },
  { path: '/about', component: aboutPage },
  { path: '/login', component: loginPage },
  {
    path: '/backstage',
    component: backstagePage,
    redirect: '/edit',
    children: [
      { path: '/edit', component: editPage },
      { path: '/modify', component: modifyPage },
      { path: '/manage', component: managePage }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
