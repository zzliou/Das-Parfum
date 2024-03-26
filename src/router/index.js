import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue';
import AboutView from '../views/AboutView.vue';
import ProductListView from '../views/ProductListView.vue';
import ContactUsView from '../views/ContactUsView.vue';
import ProductDetailView from '../views/ProductDetailView.vue';
import CartshopView from '../views/CartshopView.vue';
import OrderPageView from '../views/OrderPageView.vue';
import FinalpagesView from '../views/FinalpagesView.vue';
import MemberView from '../views/MemberView.vue';


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)',
      redirect: { name: 'home' }
    },
    {
      path: '/',
      redirect: { name: 'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/productList',
      name: 'productList',
      component: ProductListView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUsView
    },
    {
      path: '/productDetailView',
      name: 'productDetailView',
      component: ProductDetailView
    },
    {
      path: '/cartshopView',
      name: 'cartshopView',
      component: CartshopView
    },
    {
      path: '/OrderPageView',
      name: 'OrderPageView',
      component: OrderPageView
    },
    {
      path: '/FinalpagesView',
      name: 'FinalpagesView',
      component: FinalpagesView
    },
    {
      path: '/member',
      name: 'member',
      component: MemberView
    }
  ]
})


export default router
