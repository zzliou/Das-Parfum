<template>
  <div class="product-list">
    <div class="main-title">
      <h1>商品列表</h1>
      <div class="title">
        <div class="sequence">排序</div>
        <div class="drop-down">
          <div class="famous">最熱銷</div>
          <div class="down">⌵</div>
        </div>
      </div>
    </div>

    <div class="divider"></div>
    <div class="product">
      <div class="productwrapper">
        <div class="section" v-for="product in productList" :key="product.id">
          <img
            :src="product.imageSrc"
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
let currency = ref('NT$')
let productList = ref([
  {
    title: '檜木身體潔膚露',
    price: 450,
    id: 1,
    imageSrc: 'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '玫瑰身體去角質露',
    price: 960,
    id: 2,
    imageSrc: 'https://www.canmeng.com.tw/media/catalog/product/cache/0b0cff5e4acb126629a2214954bdc3b0/0/3/03_akwt01_1.png'

  },
  {
    title: '橙香身體乳霜',
    price: 780,
    id: 3,
    imageSrc: 'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'

  },
  {
    title: '天竺葵潤體精油',
    price: 590,
    id: 4,
  },
  {
    title: '滋潤保濕香皂',
    price: 690,
    id: 5
  },
  {
    title: '苦橙甦活身體凝膠',
    price: 680,
    id: 6
  }
])
</script>

<style lang="scss" scoped>
.main-title {
  display: flex;
  margin-left: 50px;
}


.product-list {
  background-color: #fffef2;
  width: 100%;
}
.title {
  display: flex;
  align-items: center;
  font-size: 18px;
  justify-content: flex-end;
  margin-left: auto;
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
}

.product {
  display: flex;
  justify-content: center;
  .productwrapper {
    display: flex;
    justify-content: center;
    width: 1000px;
    height: 100vh;
    flex-wrap: wrap;
}
}

.section {
  width: 300px;
  height: 300px;
  transition: all 0.5s;
  padding: 5px 0px;
  &:hover {
    background-color: $background-1;
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
      width: 300px;
      text-align: center;
      padding: 10px 0px;
      background-color: #252525;
      color: white;
      opacity: 1;
    }
  }

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
    color: #ae9675;
    font-size: 16px;
    padding: 10px 0px;
    transition: all 0.5s;
  }
  .cartwrapper {
    transition: all 0.5s;
  }
  .cart {
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
