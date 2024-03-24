<template>
  <div class="header">
    <AppNavbar></AppNavbar>
    <div class="toolbox" @mouseenter="hidePreviewCart">
      <div class="login-wrapper" v-show="showLoginStatus">
        <div v-if="!isLoggedIn" class="login" @click="showLoginModal">登入會員</div>
        <div v-if="isLoggedIn" class="welcome">{{ user.name }}</div>
        <div v-if="isLoggedIn" class="login" @click="goMemberPage">會員頁面</div>
        <div v-if="isLoggedIn" class="login" @click="handleLogout">登出</div>
      </div>
      <div class="cart" @click="navigateToCartShop" @mouseenter="uiStore.showCartPreview">購物車</div>
    </div>
  </div>
</template>


<script setup>
import { defineProps, ref, computed } from 'vue';
import { useRouter } from 'vue-router'
import AppNavbar from './AppNavbar.vue';
import { useUiStore } from '@/stores/ui'
import { useAuthStore } from '@/stores/auth'

  const showLoginStatus = ref(false);
  const uiStore = useUiStore();
  const router = useRouter()
  const props = defineProps(['title', 'path']);
  function handleClick() { 
    router.push(props.path)
  }

  const isLoggedIn = computed(() => authStore.userDb !== null)
  const user = computed(() => authStore.userDb)
  const authStore = useAuthStore()
  function checkAuth() {
    authStore.checkAuthState();
  }
  function handleLogout() {
    authStore.logout();
  }
  function showLoginModal() {
    uiStore.showLoginPopup();
  }

  function navigateToCartShop() {
    router.push("/cartshopView")
  }
  function goMemberPage() {
    router.push('/member')
  }


  function init() {
    authStore.checkAuthState()
    setTimeout(() => {
      showLoginStatus.value = true;
    }, 1500);
  }
  init();
</script>

<style lang="scss" scoped>
.header {
  .toolbox {
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