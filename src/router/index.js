import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'vote'
  },
  {
    path: '/vote',
    name: 'vote',
    component: () => import('../views/vote/Index.vue')
  },
  {
    path: '/create',
    name: 'voteCreate',
    component: () => import('../views/vote/Create.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
