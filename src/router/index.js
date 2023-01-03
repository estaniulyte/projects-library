import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/pages/Home'
import ProjectPage from '@/pages/Project'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage,
    children: []
  },
  {
    path: '/project/:id',
    component: ProjectPage,
    children: []
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
