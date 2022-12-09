import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/4x4',
      name: '4x4',
      component: () => import('../views/4x4.vue')
    },
    {
      path: '/3x3',
      name: '3x3',
      component: () => import('../views/3x3.vue')
    }
  ]
})

export default router
