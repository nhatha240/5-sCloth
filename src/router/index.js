import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import auth from '@/middleware/auth'
import { useAuthStore } from '@/stores/AuthStore'

const routeMiddleware = (context, middlewares, index) => {
  const nextMiddleware = middlewares[index]

  if (!nextMiddleware) {
    return context.next
  }

  return () => {
    nextMiddleware({
      ...context,
      next: routeMiddleware(context, middlewares, index + 1)
    })
  }
}

const ifNotAuthenticated = (to, from, next) => {
  if (localStorage.getItem('user-token')) {
    next()
  } else {
    if (to?.path == '/') {
      next({ name: 'Login' })
    }
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
