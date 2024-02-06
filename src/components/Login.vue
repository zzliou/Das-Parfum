<template>
  <div class="login-dialogue" v-if="isShow">
    <div class="wrapper">
      <div class="loginTitle">登入您的帳號</div>
      <input type="email" name="email" placeholder="輸入您的電子郵件">
      <input type="password" name="password" placeholder="輸入密碼">
      <input type="submit" value="登入">
      <button @click="hide">X</button>
    </div>
  </div>
</template>


<script setup>
import { defineProps, defineExpose, ref } from 'vue'
  defineProps(['title']);
  let isShow = ref(false);
  function show() {
    isShow.value = true;
  }
  function hide(){
    isShow.value = false;
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
  background-color: wheat;
  width: 500px;
  height: 800px;
  z-index: 1;
}
</style>