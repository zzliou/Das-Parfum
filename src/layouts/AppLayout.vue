<template>
  <div class="header">
    <div class="navbar">
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/contact">關於我們</RouterLink>
      <RouterLink to="/productList">商品列表</RouterLink>
      <RouterLink to="/shop">實體店鋪</RouterLink>
    </div>
    
  </div>
  <div class="content">
    <RouterView />
  </div>
  <Footer></Footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './Footer.vue';
</script>


<style lang="scss" scoped>
.header{
  width: 100%;
  height: 80px;
  background-color: #fffef2;
  .navbar {
    display: flex;
    height: 100%;
    font-size: 14px;
    align-items: center;
    gap: 30px;
    margin-left: 10px;
    a {
      text-decoration: none;
      color: #333333;
    }
  }
}
</style>