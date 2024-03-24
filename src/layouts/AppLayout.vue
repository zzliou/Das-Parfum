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
import { ref, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Footer from './Footer.vue';
import Login from '../components/Login.vue';
import PreviewCart from '@/components/PreviewCart.vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/product'

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
.header{
  width: 100%;
  height: 80px;
  background-color: $color-1;
  display: flex;
  font-family: Suisse, sans-serif;
  font-size: 14px;
  .navbarLeft {
    display: flex;
    height: auto;
    align-items: center;
    gap: 30px;
    padding: 5px 20px;
    a {
      text-decoration: none;
      color: $color-11;
      &:hover {
        font-weight: bold;
      }
    }

    @include mac {
      font-size: 16px;
    }
    }
  .navbarRight {
    display: flex;
    height: auto;
    align-items: center;
    gap: 30px;
    padding: 5px 20px 5px 0px;
    margin-left: auto;
    .login-wrapper {
      display: flex;
      gap: 0px 20px;
    }
    .login {
      text-decoration: none;
      color: $color-11;
      &:hover {
        font-weight: bold;
        cursor: pointer;
      }
    }

    .cart {
      text-decoration: none;
      color: $color-11;
      &:hover {
        font-weight: bold;
        cursor: pointer;
      }
    }

    @include mac {
      font-size: 16px;
    }
  }
}
</style>