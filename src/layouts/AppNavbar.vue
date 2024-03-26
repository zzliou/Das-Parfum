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
    border-top: solid 1px $color-10;
    padding: 0;
    opacity: 0;
    padding-top: 40px;
    padding-bottom: 40px;
    flex-direction: column;
    z-index: 2;
    width: 100%;
    transform: translate(101%);
    position: fixed;
    top: 77px;
    transition: all .8s;
    .close {
      display: block !important;
    }
    &.fade-in {
      transform: translate(0);
      opacity: 1;
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
