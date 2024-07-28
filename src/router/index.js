import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Checkout from '@/views/CheckoutView.vue'
import OrderView from '@/views/OrderView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductView from '@/views/ProductView.vue'
import ProductListView from '@/views/ProductListView.vue'
import PaymentView from '@/views/PaymentView.vue'
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
      component: HomeView,
      meta: {
        breadcrumb: 'Home'
      }
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
      meta: {
        breadcrumb: 'Checkout'
      }
    },
    {
      path: '/payment',
      name: 'PaymentView',
      component: PaymentView,
      meta: {
        breadcrumb: 'Payment'
      }
    },
    {
      path: '/order',
      name: 'OrderView',
      component: OrderView,
      meta: {
        breadcrumb: 'Checkout'
      }
    },
    {
      path: '/shop',
      name: 'ShopView',
      component: ShopView,
    },
    {
      path: '/product',
      name: 'ProductListView',
      component: ProductListView,
      meta: {
        breadcrumb: 'Books'
      }
    },
    {
      path: '/product/:id',
      name: 'ProductView',
      component: ProductView,
      meta: {
        breadcrumb: 'Books'
      }
    },
  ]
})

export default router
