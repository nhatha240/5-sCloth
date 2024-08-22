import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import TermsView from '@/views/TermsView.vue'
import PrivacyPolicyView from '@/views/FAQView.vue'
import FAQView from '@/views/PrivacyPolicyView.vue'
import Checkout from '@/views/CheckoutView.vue'
import OrderView from '@/views/OrderView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductView from '@/views/ProductView.vue'
import ProductListView from '@/views/ProductListView.vue'
import PaymentView from '@/views/PaymentView.vue'
import DashBoardView from '@/views/admin/DashBoardView.vue'
import OrderListView from '@/views/admin/OrderListView.vue'
import OrderDetailsView from '@/views/admin/OrderDetailsView.vue'
import ProductViewAdmin from '@/views/admin/ProductView.vue'
import ProductDetailsView from '@/views/admin/ProductDetailsView.vue'
import CategoriesView from '@/views/admin/CategoriesView.vue'
import CategoryDetailsView from '@/views/admin/CategoryDetailsView.vue'
import CustomerListView from '@/views/admin/CustomerListView.vue'
import CustomerInfoView from '@/views/admin/CustomerInfoView.vue'
import CustomerModifyView from '@/views/admin/CustomerModifyView.vue'
import RatingPageView from '@/views/admin/RatingPageView.vue'
import RatingDetailsView from '@/views/admin/RatingDetailsView.vue'
import PersonalSettingView from '@/views/admin/PersonalSettingView.vue'
import LoginPage from '@/views/admin/LoginPage.vue'
import UserLayout from '@/components/FooterMain.vue'
import AdminLayout from '@/components/AdminLayout.vue'
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

const isUserAuthenticated = (to, from, next) => {
  if (localStorage.getItem('token')) {
    if (to?.path == '/login') {
      next({ name: 'home' })
    } else {
      next()
    }
  } else {
    next()
  }
}

const isAdminAuthenticated = (to, from, next) => {
  if (localStorage.getItem('adminToken')) {
    if (to?.path == '/admin/login') {
      next({ name: 'DashBoardView' })
    } else {
      next()
    }
  } else {
    if (to?.path !== '/admin/login') {
      next({ name: 'LoginPage' })
    }
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'UserLayout',
      component: UserLayout,
      beforeEnter: isUserAuthenticated,
      children: [
        {
          path: '',
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
          path: '/login',
          name: 'LoginView',
          component: LoginView,
          meta: {
            breadcrumb: 'Đăng nhập'
          }
        },
        {
          path: '/register',
          name: 'RegisterView',
          component: RegisterView,
          meta: {
            breadcrumb: 'Đăng ký'
          }
        },
        {
          path: '/payment',
          name: 'PaymentView',
          component: PaymentView,
          meta: {
            breadcrumb: 'Thanh toán'
          }
        },
        {
          path: '/order',
          name: 'OrderView',
          component: OrderView,
          meta: {
            breadcrumb: 'Đơn hàng'
          }
        },
        {
          path: '/shop',
          name: 'ShopView',
          component: ShopView,
          meta: {
            breadcrumb: 'ShopView'
          }
        },
        {
          path: '/product',
          name: 'ProductListView',
          component: ProductListView,
          meta: {
            breadcrumb: 'Products'
          }
        },
        {
          path: '/product/:id',
          name: 'ProductView',
          component: ProductView,
          meta: {
            breadcrumb: 'Đặt hàng'
          }
        },
        {
          path: '/about-us',
          name: 'AboutUsView',
          component: AboutUsView,
          meta: {
            breadcrumb: 'AboutUs'
          }
        },
        {
          path: '/contact-us',
          name: 'ContactUsView',
          component: ContactUsView,
          meta: {
            breadcrumb: 'ContactUs'
          }
        },
        {
          path: '/terms',
          name: 'TermsView',
          component: TermsView,
          meta: {
            breadcrumb: 'Terms'
          }
        },
        {
          path: '/privacy-policy',
          name: 'PrivacyPolicyView',
          component: PrivacyPolicyView,
          meta: {
            breadcrumb: 'PrivacyPolicy'
          }
        },
        {
          path: '/faq',
          name: 'FAQView',
          component: FAQView,
          meta: {
            breadcrumb: 'FAQ'
          }
        },
      ],
    },
    {
      path: '/admin',
      name: 'AdminLayout',
      component: AdminLayout,
      beforeEnter: isAdminAuthenticated,
      children: [
        {
          path: 'login',
          name: 'LoginPage',
          component: LoginPage,
          meta: {
            title: 'LoginPage'
          }
        },
        {
          path: '',
          name: 'DashBoardView',
          component: DashBoardView,
          meta: {
            title: 'Dashboard'
          }
        },
        {
          path: 'orders',
          name: 'OrderListView',
          component: OrderListView,
          meta: {
            title: 'Orders'
          }
        },
        {
          path: 'orders/:id',
          name: 'OrderDetailsView',
          component: OrderDetailsView,
          meta: {
            title: 'Order Details'
          }
        },
        {
          path: 'products',
          name: 'ProductViewAdmin',
          component: ProductViewAdmin,
          meta: {
            title: 'Products'
          }
        },
        {
          path: 'create-product',
          name: 'CreateProductView',
          component: ProductDetailsView,
          meta: {
            title: 'CreateProduct'
          }
        },
        {
          path: 'update-product/:id?',
          name: 'ProductDetailsView',
          component: ProductDetailsView,
          meta: {
            title: 'ProductDetails'
          }
        },
        {
          path: 'categories',
          name: 'CategoriesView',
          component: CategoriesView,
          meta: {
            title: 'CategoriesView'
          }
        },
        {
          path: 'categories/:id',
          name: 'CategoryDetailsView',
          component: CategoryDetailsView,
          meta: {
            title: 'CategoryDetailsView'
          }
        },
        {
          path: 'customers',
          name: 'CustomerListView',
          component: CustomerListView,
          meta: {
            title: 'CustomerListView'
          }
        },
        {
          path: 'customers/:id',
          name: 'CustomerInfoView',
          component: CustomerInfoView,
          meta: {
            title: 'CustomerInfoView'
          }
        },
        {
          path: 'customer-modify/:id?',
          name: 'CustomerModifyView',
          component: CustomerModifyView,
          meta: {
            title: 'CustomerModifyView'
          }
        },
        {
          path: 'rating',
          name: 'RatingPageView',
          component: RatingPageView,
          meta: {
            title: 'RatingPageView'
          }
        },
        {
          path: 'rating/:id',
          name: 'RatingDetailsView',
          component: RatingDetailsView,
          meta: {
            title: 'RatingDetailsView'
          }
        },
        {
          path: 'personal-settings',
          name: 'PersonalSettingView',
          component: PersonalSettingView,
          meta: {
            title: 'PersonalSettingView'
          }
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : to.meta.breadcrumb;
  return next();
});

export default router
