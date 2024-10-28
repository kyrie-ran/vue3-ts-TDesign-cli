import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import LoginViews from '@/views/login/index.vue'
import Dashboard from '@/views/dashboard/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginViews
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes,
  scrollBehavior: () => ({
    left: 0,
    top: 0
  })
})

export default router
