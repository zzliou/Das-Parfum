<template>
  <div class="login-dialogue" v-if="isShow">
    <div>
    <div 
      @mouseenter="showCartPreview"
      @mouseleave="hideCartPreview"
      @click="goToCartPage" > 購物車 </div>
    
    <!-- 购物车预览 -->
  </div>
  </div>
</template>

<script setup>
import { defineProps, defineExpose, ref } from 'vue'
import CartPreview from './PreviewCart.vue'; // 导入购物车预览组件

defineProps(['title'])
let isShow = ref(false)
function show() {
  isShow.value = true
}
function hide() {
  isShow.value = false
}
defineExpose({
  show: show,
  hide: hide
})



</script>

<style lang="scss" scoped>
.login-dialogue {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: $color-4;
  width: 500px;
  height: 800px;
  z-index: 1;
  .closed {
    button {
      cursor: pointer;
      margin: 20px 0px 0px 450px;
      border-style: none;
      background-color: $color-4;
      font-size: 22px;
    }
  }
  .wrapper {
    font-family: sans-serif;
    padding: 50px;
    text-align: start;
    .loginTitle {
      font-size: 26px;
      padding: 50px 0px;
    }
    .email {
      font-size: 16px;
      padding: 10px 0px;
    }
    .password {
      font-size: 16px;
      padding: 10px 0px;
    }
    input {
      width: 100%;
      background-color: $color-4;
      height: 30px;
      border: none;
      border-bottom: 1px solid $color-10;
    }
    .loginButton {
      input {
        margin: 50px 0px;
        width: 100%;
        height: 50px;
        padding: 10px 0px;
        background-color: $color-11;
        color: $color-1;
      }
    }
    .register {
      p {
        color: $color-3;
      }
      button {
        margin: 50px 0px;
        width: 100%;
        height: 50px;
        padding: 10px 0px;
        background-color: $color-4;
        color: $color-11;
      }
    }
  }
}
</style>
