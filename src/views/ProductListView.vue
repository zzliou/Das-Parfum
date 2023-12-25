<template>
  <div class="product-list">
    <div class="main-title">
      <h1>商品列表</h1>
    </div>
    <div class="title">
      <div class="sequence">排序</div>
      <div class="drop-down">
        <div class="famous">最熱銷</div>
        <div class="down">⌵</div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="productwrapper">
      <div class="section" v-for="product in productList" :key="product.id">
        <img
          src="https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png"
          alt=""
        />
        <div class="producttitle">{{ product.title }}</div>
        <div class="price">
          <div class="currency">{{ currency }}</div>
          <div class="number">{{ product.price }}</div>
        </div>
        <div class="cartwrapper">
          <div class="cart">加入購物車</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let currency = ref('NT$')
let productList = ref([
  {
    title: '醇香沐浴乳',
    price: 458,
    id: 1
  },
  {
    title: '醇香洗髮乳',
    price: 961,
    id: 2
  },
  {
    title: '醇香洗髮乳',
    price: 961,
    id: 2
  }
])
</script>

<style lang="scss" scoped>
.product-list {
  background-color: #fffef2;
  width: 100%;
}
.title {
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: flex-end;
  .sequence {
    padding: 10px 20px;
  }
  .drop-down {
    border: solid black 1px;
    width: 100px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0px;
  }
}
.divider {
  width: 100%;
  border-bottom: #d5d4c9 solid 1px;
  padding: 50px 0px 50px 0px;
}
.productwrapper {
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
}
.section {
  width: 400px;
  height: 400px;
  transition: all 0.5s;
  padding: 5px 0px;
  &:hover {
    background-color: $background-1;
    // .imgdivider {
    //   background-color: $background-1;
    // }
    .producttitle {
      background-color: $background-1;
    }
    .price {
      background-color: $background-1;
    }
    .cartwrapper {
      background-color: $background-1;
    }
    .cart {
      border: #252525 solid 1px;
      width: 100px;
      text-align: center;
      padding: 10px 0px;
      background-color: #252525;
      color: white;
      opacity: 1;
    }
  }
  // .imgdivider {
  //   border-bottom: #d5d4c9 solid 1px;
  //   width: 100%;
  // }
  img {
    width: 100%;
    height: 100%;
    object-fit: none;
  }
  .producttitle {
    border-top: solid 1px #252525;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 0px;
    transition: all 0.5s;
  }
  .price {
    display: flex;
    color:#AE9675;
    font-size: 16px;
    padding: 10px 0px;
    transition: all 0.5s;
  }
  .cartwrapper {
    transition: all 0.5s;
  }
  .cart{
    border: #252525 solid 1px;
    width: 100px;
    text-align: center;
    padding: 10px 0px;
    background-color: #252525;
    color: white;
    opacity: 0;
    transition: all 0.5s;
  }
}

</style>
