import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue';
import AboutView from '../views/AboutView.vue';
import ProductListView from '../views/ProductListView.vue';
import ContactUsView from '../views/ContactUsView.vue';
import InsidepagesView from '../views/InsidepagesView.vue';
import CartshopView from '../views/CartshopView.vue';
import OrderPageView from '../views/OrderPageView.vue';
import FinalpagesView from '../views/FinalpagesView.vue';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
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
      path: '/insidepagesView/:product',
      name: 'insidepagesView',
      component: InsidepagesView
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
    }
  ]
})

export default router
