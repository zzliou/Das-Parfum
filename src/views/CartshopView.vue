<template>
  <div class="cartshop">
    <div class="content">
      <div class="item">
        <div class="title">商品名稱</div>
        <div class="title">單價</div>
        <div class="title">數量</div>
        <div class="title">小計</div>
        <div class="title">總計</div>
      </div>
      <div class="divider"></div>
      <div class="item_detail">
        <div class="name">XXXX</div>
        <div class="price"><span>$</span>500</div>
        <div class="count">
          <button>-</button>
          1
          <button>+</button>
        </div>
        <div class="delete">
          <button>刪除</button>
        </div>
        <div class="subtotal">500</div>
      </div>
      <div class="divider"></div>
      <div class="checkout">
        <button>結帳</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

function getCartData() {
  // 獲取購物車資料
  let rawShopList = window.localStorage.getItem('shopList');
  let shopList = JSON.parse(rawShopList)
  console.log(shopList,'shopList');

  // 使用購物車資料初始化 selectedTypeList
  let selectedTypeList = ref(shopList);
}

const router = useRouter();

getCartData();

</script>

<style lang="scss" scoped>
.cartshop {
  width: 100%;
  background-color: #f6f5e8;
  font-family: Suisse, sans-serif;

  .content {
    padding: 50px 200px;

    .item {
      width: 800px;
      height: 100px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-size: 16px;

      .title {
        padding: 5px 20px;
      }
    }

    .item_detail {
      width: 800px;
      height: 300px;
      display: flex;
      // justify-content: space-evenly;
      font-size: 16px;
      padding: 5px 20px;
      .name {
        margin: 10px 75px;
      }
      .price {
        margin: 10px 50px;
      }
      .count {
        margin: 10px;
        button {
          padding: 0px 5px;
          margin-left: 3px;
          background-color: #fffef2;
          border-color: #fffef2;
        }
      }
      .subtotal {
        padding: 10px 40px;
      }
      .delete {
        button {
          padding: 0px 10px;
          background-color: #fffef2;
          border-color: #fffef2;
        }
      }
    }

    .checkout {
      text-align: end;
      padding: 50px 0px;

      button {
        width: 150px;
        height: 50px;
        background-color: #fffef2;
        border-color: #fffef2;
        font-weight: 600;
      }
    }
    .divider {
        border: solid 1px #3333;
      }
  }
}
</style>
