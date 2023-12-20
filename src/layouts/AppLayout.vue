<template>
  <div class="header">
    <div class="navbar">
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/about">實體店鋪</RouterLink>
      <RouterLink to="/contact">關於我們</RouterLink>
    </div>
  </div>
  <div class="content">
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
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