import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from '../views/home.vue'

const routes = [
  {
    path: '/home', component: home
  }
]

const router = new VueRouter({
  routes
})

export default router;