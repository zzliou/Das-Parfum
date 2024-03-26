<template>
  <div class="headerTop">
      <p>單筆訂單金額滿$1,500，即享全台灣宅配免運費。</p>
  </div>
  <AppHeader ></AppHeader>
  <div class="content">
    <RouterView />
    <Login ref="loginRef"/>
    <PreviewCart ref="previewCartRef"/>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Footer from './Footer.vue';
import Login from '../components/Login.vue';
import PreviewCart from '@/components/PreviewCart.vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/product'
import { useUiStore } from '@/stores/ui'

const uiStore = useUiStore()
const menuFadeIn = computed(() => uiStore.menuFadeIn)
watch(menuFadeIn, (newValue, oldValue) => {
  document.body.style['overflow-y'] = newValue ? 'hidden' : 'scroll';
})

import AppHeader from './AppHeader.vue';

const loginRef = ref(null)

// login status logic
const showLoginStatus = ref(false);
// get product list?
const productStore = useProductStore();
function getProduct() {
  productStore.getProductList();
}


// page init
function init() {
  setTimeout(() => {
    showLoginStatus.value = true;
  }, 1500);
  getProduct();

}
init();
</script>


<style lang="scss" scoped>

.headerTop {
    width: 100%;
    height: auto;
    background-color: $color-11;
    padding: 3px 0px;
    font-family: Suisse Regular, sans-serif;
    flex-grow: 2;
    p {
      text-align: center;
      font-size: 14px;
      color: $color-1;
    }
  }
</style>