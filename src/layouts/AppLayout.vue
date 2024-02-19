<template>
  <div class="header" id="header">
    <div class="navbarLeft">
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/about">關於我們</RouterLink>
      <RouterLink to="/productList">商品列表</RouterLink>
      <RouterLink to="/shop">實體店鋪</RouterLink>
    </div>
    <div class="navbarRight">
      <div class="login" @click="showLoginModal">登入會員</div>
      <RouterLink to="/">購物車</RouterLink>
    </div>
  </div>
  <div class="content">
    <RouterView />
    <Login ref="loginRef"/>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { nextTick, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Footer from './Footer.vue';
import Login from '../components/Login.vue';

const loginRef = ref(null)
function showLoginModal() {
  loginRef.value.show();
}



</script>


<style lang="scss" scoped>
.header{
  width: 100%;
  height: auto;
  background-color: #fffef2;
  display: flex;
  padding-top: 50px;
  .navbarLeft {
    display: flex;
    height: auto;
    font-size: 18px;
    align-items: center;
    gap: 30px;
    padding: 10px 20px;
    a {
      text-decoration: none;
      color: #71716c;
    }
  }
  .navbarRight {
    display: flex;
    height: auto;
    font-size: 18px;
    align-items: center;
    gap: 30px;
    padding: 10px 20px;
    margin-left: auto;
    a {
      text-decoration: none;
      color: #71716c;
    }
  }
}
</style>