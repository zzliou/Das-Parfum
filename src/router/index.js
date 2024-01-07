import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue';
import AboutView from '../views/AboutView.vue';
import ProductListView from '../views/ProductListView.vue';
import ContactUsView from '../views/ContactUsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
  ]
})

export default router
