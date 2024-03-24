<template>
  <div class="navbar">
    <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/about">關於我們</RouterLink>
      <RouterLink to="/productList">商品列表</RouterLink>
      <RouterLink to="/shop">實體店鋪</RouterLink>
      <RouterLink to="/contact">聯絡我們</RouterLink>
  </div>
</template>


<script setup>

</script>

<style lang="scss" scoped>
  .navbar {
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
</style>