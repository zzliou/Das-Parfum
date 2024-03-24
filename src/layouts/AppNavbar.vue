<template>
  <div
    class="navbar"
    :class="{ 'fade-in': uiStore.menuFadeIn }"
     @click="toggleMenuFadeIn"
  >
    <RouterLink to="/">首頁</RouterLink>
    <RouterLink to="/about">關於我們</RouterLink>
    <RouterLink to="/productList">商品列表</RouterLink>
    <RouterLink to="/shop">實體店鋪</RouterLink>
    <RouterLink to="/contact">聯絡我們</RouterLink>
    <div class="close">
      <icon class="icon" icon="xmark" @click="uiStore.toggleMenuFadeIn()"/>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { useUiStore } from '@/stores/ui'

const uiStore = useUiStore()


function toggleMenuFadeIn() {
  uiStore.toggleMenuFadeIn();
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: auto;
  align-items: center;
  gap: 30px;
  padding: 5px 20px;
  background-color: $color-1;
  @include pad {
    padding-top: 40px;
    flex-direction: column;
    height: 100vh;
    z-index: 2;
    width: 100%;
    transform: translate(101%);
    position: absolute;
    top: 80px;
    transition: transform .5s;
    .close {
      display: block !important;
    }
    &.fade-in {
      transform: translate(0);
    }
    
  }
  .close {
    display: none;
    padding: 10px 10px 0 0;
    position: absolute;
    right: 40px;
    top: 0px;
    font-size: 20px;
    z-index: 3;
  }


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

</style>
