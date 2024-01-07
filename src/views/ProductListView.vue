<template>
  <div class="product-list">
    <div class="main-title">
      <h1>商品列表</h1>
      <div class="title">
        <div class="sequence">排序</div>
        <div class="drop-down">
          <select v-model="order" @change="handleChange">
            <option value="default">系統推薦</option>
            <option value="price">價格</option>
            <option value="popularity">熱門度</option>
          </select>
        </div>
      </div>
    </div>

    <div class="divider"></div>
    <div class="product">
      <div class="faceWrapper">
        <div class="section" v-for="product in faceList" :key="product.id">
          <img :src="product.imageSrc" alt="" />
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
      <div class="bodyWrapper">
        <div class="section" v-for="product in bodyList" :key="product.id">
          <img :src="product.imageSrc" alt="" />
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
      <div class="hairWrapper">
        <div class="section" v-for="product in hairList" :key="product.id">
          <img :src="product.imageSrc" alt="" />
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
let order = ref('default')
let currency = ref('NT$')
let faceList = ref([
  {
    title: '明亮高效精華 30ml',
    price: 450,
    id: 1,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '透亮調理露 200ml',
    price: 960,
    id: 2,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '花植保濕乳霜 450ml',
    price: 780,
    id: 3,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '深層清潔面膜 125ml',
    price: 590,
    id: 4,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '保濕平衡露 150ml',
    price: 690,
    id: 5,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '花植保濕前導精華 150ml',
    price: 680,
    id: 6,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  }
])
let bodyList = ref([
  {
    title: '純香沐浴乳 130ml',
    price: 450,
    id: 1,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '純香美體潤膚乳 200ml',
    price: 960,
    id: 2,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '迷迭薄荷美體乳液 450ml',
    price: 1780,
    id: 3,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '純香護理精華油 50ml',
    price: 590,
    id: 4,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '雙手撫紋夜間精華 45ml',
    price: 690,
    id: 5,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '潤手霜 (純香) 40ml',
    price: 680,
    id: 6,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  }
])
let hairList = ref([
  {
    title: '明亮高效精華 30ml',
    price: 450,
    id: 1,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '透亮調理露 200ml',
    price: 960,
    id: 2,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '花植保濕乳霜 450ml',
    price: 780,
    id: 3,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '深層清潔面膜 125ml',
    price: 590,
    id: 4,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '保濕平衡露 150ml',
    price: 690,
    id: 5,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  },
  {
    title: '花植保濕前導精華 150ml',
    price: 680,
    id: 6,
    imageSrc:
      'https://www.canmeng.com.tw/media/catalog/product/cache/fd89ce58ead809c2227aedfad753583d/0/1/01_akck01_1.png'
  }
])

function handleChange() {
  console.log('handleChange')
  if (order.value === 'price') {
    console.log('handleChange price')
    faceList.value.sort(function (a, b) {
      return a.price - b.price
    })
  }
  if (order.value === 'price') {
    console.log('handleChange price')
    bodyList.value.sort(function (a, b) {
      return a.price - b.price
    })
  }
  if (order.value === 'price') {
    console.log('handleChange price')
    hairList.value.sort(function (a, b) {
      return a.price - b.price
    })
  }
}
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

  select {
    font-size: 14px;
    font-family: "Noto Serif TC", serif;
    background-color: #F5F4E9;
  }
}
.divider {
  width: 100%;
  border-bottom: #d5d4c9 solid 1px;
}

.product {
    width: 1000px;
    margin: 0px auto;
}
  .faceWrapper {
    display: flex;
    justify-content: center;
    width: 1000px;
    height: 100vh;
    flex-wrap: wrap;
}
  .bodyWrapper {
    display: flex;
    justify-content: center;
    width: 1000px;
    height: 100vh;
    flex-wrap: wrap;
}
  .hairWrapper {
    display: flex;
    justify-content: center;
    width: 1000px;
    height: 100vh;
    flex-wrap: wrap;
}

.section {
  width: 300px;
  height: 300px;
  transition: all 0.5s;
  padding: 5px 5px;
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
