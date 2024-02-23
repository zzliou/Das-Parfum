<template>
  <div class="cartshop">
    <div class="content">
      <div class="item">
        <div class="title">商品名稱</div>
        <div class="title">容量</div>
        <div class="title">數量</div>
        <div class="title">小計</div>
      </div>
      <div class="divider"></div>
      <div class="item_detail">
        <div class="name"></div>
        <div class="capacity"></div>
        <div class="quantity">
          <button>-</button>
          1
          <button>+</button>
        </div>
        <div class="delete">
          <button>刪除</button>
        </div>
        <div class="subtotal"></div>
      </div>
      <div class="divider"></div>
      <div class="countWrapper">
        <div class="totalnumber">
          <div class="total">總計</div>
          <div class="number">XXXX</div>
        </div>
        <div class="checkout">
        <button>結帳</button>
      </div>
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
  height: 1000px;
  background-color: #fffef2;
  font-family: Suisse, sans-serif;

  .content {
    padding: 50px 200px;
    position: relative;
    font-size: 16px;
    .item {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: start;
      .title {
        padding: 5px 20px;
      }
    }

    .item_detail {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: start;
      .name {
        font-weight: 600;
      }

      .quantity {
        button {
          padding: 0px 5px;
          margin-left: 3px;
          background-color: #fffef2;
          border: none;
          cursor: pointer;
        }
      }
      .delete {
        font-size: 16px;
        button {
          background-color: #fffef2;
          border: none;
          cursor: pointer;
        }
      }
    }
    .countWrapper {
      width: 100%;
      position: absolute;
      top: 300px;
      right: 200px;
      padding: 50px 200px;
      .totalnumber {
        display: flex;
        justify-content: flex-end;
        .total {
          font-size: 20px;
        }
        .number {
          font-size: 20px;
        }
      }
      .checkout {
      text-align: end;
      padding: 50px 0px;

      button {
        width: 300px;
        height: 50px;
        background-color: #3333;
        border: #3333;
        font-size: 16px;
      }
    }
    }


    .divider {
        border: solid 1px #3333;
      }

  }
}
</style>
