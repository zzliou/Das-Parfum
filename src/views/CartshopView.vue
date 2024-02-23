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
      <div class="item_detail" v-for="(product, index) in cartListToShow" :key="index">
        <div class="name">{{ product.title }}</div>
        <div class="capacity">{{ product.sizeList[0].capacity }} ml</div>
        <div class="quantity">
          <button>-</button>
          1
          <button>+</button>  
        </div>
        <div class="delete">
          <button>刪除</button>
        </div>
        <div class="subtotal">{{ product.sizeList[0].price }}</div>
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
import { ref, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router'

let globalObject = getCurrentInstance().appContext.config;
let cartList = globalObject.cartList;
let cartListToShow = ref(cartList)
console.log(cartListToShow,'cartListToShow')
</script>

<style lang="scss" scoped>
.cartshop {
  width: 100%;
  height: 1000px;
  background-color: $color-1;
  font-family: Suisse, sans-serif;

  .content {
    padding: 50px 200px;
    position: relative;
    font-size: 16px;
    .item {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      .title {
        padding: 5px 20px;
        width: 300px;
        text-align: center;
      }
    }

    .item_detail {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      .name {
        font-weight: 600;
        padding: 5px 20px;
        width: 300px;
        text-align: center;
      }
      .capacity {
        padding: 5px 20px;
        width: 300px;
        text-align: center;
      }
      .quantity {
        padding: 5px 20px;
        text-align: center;
        button {
          padding: 0px 5px;
          margin-left: 3px;
          background-color: $color-1;
          border: none;
          cursor: pointer;
        }
      }
      .delete {
        font-size: 16px;
        text-align: start;
        button {
          background-color: $color-1;
          border: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          &:hover {
            cursor: pointer;
            opacity: 1;
          }
        }
      }
      .subtotal {
        padding: 5px 20px;
        width: 300px;
        text-align: center;
      }
    }
    .countWrapper {
      position: absolute;
      top: 300px;
      right: 200px;
      .totalnumber {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .total {
          font-size: 16px;
          margin-right: auto;
        }
        .number {
          font-size: 20px;
        }
      }
      .checkout {
      text-align: end;
      padding: 50px 0px;

      button {
        width: 500px;
        height: 50px;
        background-color: $color-3;
        border: $color-3;
        font-size: 16px;
        &:hover {
        cursor: pointer;
        }
      }
    }
    }


    .divider {
        border: solid 1px $color-3;
      }

  }
}
</style>
