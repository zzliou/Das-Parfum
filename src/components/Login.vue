<template>
  <div class="login-button">
    <div class="wrapper">
      <div class="loginTitle">登入您的帳號</div>
      <input type="email" name="email" placeholder="輸入您的電子郵件">
      <input type="password" name="password" placeholder="輸入密碼">
      <input type="submit" value="登入">
    </div>
  </div>
</template>


<script setup>
import { defineProps, defineExpose, ref } from 'vue'
  defineProps(['title']);
  let isShow = ref(false);
  function show() {
    isShow = true;
    console.log(isShow,'isSHow');
  }
  function hide(){
    isShow = false;
  }
  defineExpose({
    show: show,
    hide: hide
  })
</script>

<style lang="scss" scoped>
.app-button {
  width: fit-content;
  transition: all .3s;
  &:hover {
    cursor: pointer;
    border-color: #333;
    background-color: #333;
    color: #fffef2;
  }
  .wrapper {
    display: flex;
    padding: 20px 20px;
    border: solid 1px rgba(51,51,51,.2);
    .action {
      margin-left: 150px;
    }
  }
}
</style>