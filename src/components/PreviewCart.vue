<template>
  <div @mouseover="showPopup" @mouseleave="hidePopup">
    <!-- 購物車 -->
  </div>
  <!-- 彈窗 -->
  <div v-if="isPopupVisible" class="popup">
    <!-- 彈窗內容 -->
    <div class="previewCart">
      <div class="content">
        <div class="item">
          <div class="title">商品名稱</div>
          <div class="title">容量</div>
          <div class="title">單價</div>
          <div class="title">數量</div>
          <div class="title">小計</div>
        </div>
        <div class="divider"></div>
        <div class="product-wrapper">
          <div class="item_detail" v-for="(product, index) in cartListToShow" :key="index">
            <div class="name">{{ product.title }}</div>
            <div class="capacity">{{ product.sizeList[product.selectedSizeIndex].capacity }} ml</div>
            <div class="unitPrice"> {{ product.sizeList[product.selectedSizeIndex].price }}</div>
            <div class="quantity">
              <button @click="handleMinus(product)">-</button>
              {{ product.quantity }}
              <button @click="handlePlus(product)">+</button>
              <div class="delete">
                <button @click="handleDelete(product)">刪除</button>
              </div>
            </div>
            <div class="subtotal">{{ product.sizeList[product.selectedSizeIndex].price * product.quantity }}</div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="countWrapper">
          <div class="totalWrapper">
            <div class="total">總計</div>
            <div class="totalPrice">{{ totalPrice }}</div>
          </div>
          <div class="checkout">
            <button>前往結帳</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineExpose, ref } from 'vue'

export default {
  data() {
    return {
      isPopupVisible: false
    };
  },
  methods: {
    showPopup() {
      this.isPopupVisible = true;
    },
    hidePopup() {
      this.isPopupVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.login-dialogue {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: $color-4;
  width: 500px;
  height: 800px;
  z-index: 1;

  .closed {
    button {
      cursor: pointer;
      margin: 20px 0px 0px 450px;
      border-style: none;
      background-color: $color-4;
      font-size: 22px;
    }
  }

  .content {
    padding: 50px 200px;
    font-size: 16px;
    position: relative;

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

      .unitPrice {
        padding: 5px 20px;
        width: 300px;
        text-align: center;
      }

      .quantity {
        padding: 5px 20px;
        width: 300px;
        display: flex;
        justify-content: center;

        button {
          padding: 0px 5px;
          margin-left: 3px;
          background-color: $color-1;
          border: none;
          cursor: pointer;
        }

        .delete {
          font-size: 16px;
          text-align: start;

          button {
            background-color: $color-1;
            border: none;
            transition: opacity 0.3s ease;
          }
        }
      }

      .subtotal {
        padding: 5px 20px;
        width: 300px;
        text-align: center;
      }
    }


    .divider {
      border: solid 1px $color-3;
    }

    .countWrapper {
      bottom: 300px;
      right: 200px;
      margin-top: 20px;

      .totalWrapper {
        display: flex;
        width: 500px;
        margin-left: auto;
        align-items: flex-end;

        .total {
          font-size: 16px;
          margin-right: auto;
        }

        .totalPrice {
          font-size: 22px;
        }
      }

      .buttonWrapper {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;

        .shopping {
          text-align: start;
          padding: 20px 10px;

          RouterLink {
            text-decoration: none;
          }

          button {
            width: 300px;
            height: 50px;
            background-color: $color-3;
            border: $color-3;
            font-size: 16px;

            &:hover {
              cursor: pointer;
            }
          }
        }

        .checkout {
          text-align: end;
          padding: 20px 0px;

          button {
            width: 300px;
            height: 50px;
            background-color: $color-11;
            border: $color-11;
            font-size: 16px;
            color: $color-2;

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}</style>
