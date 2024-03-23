<template>
  <div class="headerTop">
      <p>單筆訂單金額滿$1,500，即享全台灣宅配免運費。</p>
  </div>
  <div class="header" id="header" >
    <div class="navbarLeft">
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/about">關於我們</RouterLink>
      <RouterLink to="/productList">商品列表</RouterLink>
      <RouterLink to="/shop">實體店鋪</RouterLink>
      <RouterLink to="/contact">聯絡我們</RouterLink>
    </div>
    <div class="navbarRight" @mouseenter="hidePreviewCart">
      <div class="login-wrapper" v-show="showLoginStatus">
        <div v-if="!isLoggedIn" class="login" @click="showLoginModal">登入會員</div>
        <div v-if="isLoggedIn" class="welcome">{{ user.name }}</div>
        <div v-if="isLoggedIn" class="login" @click="goMemberPage">會員頁面</div>
        <div v-if="isLoggedIn" class="login" @click="handleLogout">登出</div>
      </div>
      <div class="cart" @click="navigateToCartShop" @mouseenter="showPreviewCart">購物車</div>
    </div>
  </div>
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
import { useAuthStore } from '@/stores/auth'
import { useProductStore } from '@/stores/product'
import { useUiStore } from '@/stores/ui'

const router = useRouter()
const loginRef = ref(null)
const uiStore = useUiStore();

// login modal control
function showLoginModal() {
  uiStore.showLoginPopup();
}

function navigateToCartShop() {
  router.push("/cartshopView")
}
function goMemberPage() {
  router.push('/member')
}

// cart control
const previewCartRef = ref()
function showPreviewCart() {
  previewCartRef.value.show();
}
function hidePreviewCart() {
  previewCartRef.value.hide();
}

// login status logic
const showLoginStatus = ref(false);
const authStore = useAuthStore()
const isLoggedIn = computed(() => authStore.userDb !== null)
const user = computed(() => authStore.userDb)
function checkAuth() {
  authStore.checkAuthState();
}
function handleLogout() {
  authStore.logout();
}

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
  checkAuth();
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