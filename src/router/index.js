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
    component: () => import('../views/vote/Index.vue'),
    children: [
      {
        path: '/create',
        name: 'voteCreate'
        // component:
      }
    ]
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
