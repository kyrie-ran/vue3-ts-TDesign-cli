import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import LoginViews from '@/views/login/index.vue'
import Dashboard from '@/views/dashboard/index.vue'
import { useAppStore } from '@/store'

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

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  const appStore = useAppStore()
  if(!appStore.token) {
    whiteList.indexOf(to.path) !== -1 ? next() : next(`/login?redirect=${to.path}`)
    return
  }
  if(appStore.token && to.path === '/login') {
    next('/')
    return
  }
  next()
})

export default router
