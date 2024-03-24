<template>
  <div class="member">
    <div class="order">
      <div class="order-detail">
        <div class="mainTitle">
          <h2>查看本次訂單</h2>
        </div>
        <div class="orderWrapper">
          <div class="divider"></div>
          <div class="listWrapper">
            <div class="item">商品名稱</div>
            <div class="item">容量</div>
            <div class="item">數量</div>
            <div class="item">單價</div>
            <div class="item">小計</div>
          </div>
          <div class="dividerLiter"></div>
          <div class="listWrapper" v-for="(product, index) in order" :key="index">
            <div class="detail">{{ product.title }}</div>
            <div class="detail">{{ product.sizeList[product.selectedSizeIndex].capacity }} ml</div>
            <div class="detail">{{ product.quantity }}</div>
            <div class="detail">{{ product.sizeList[product.selectedSizeIndex].price }}</div>
            <div class="detail">{{ product.sizeList[product.selectedSizeIndex].price * product.quantity }}</div>
          </div>
          <div class="dividerLiter"></div>
          <div class="totalPrice">
            <div class="title">總計金額:NT$</div>
            <div class="number">{{ totalPrice }}</div>
          </div>
          <div class="divider"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useOrderStore } from '@/stores/order'
import { storeToRefs } from 'pinia'

const orderStore = useOrderStore();
const orderRefStore = storeToRefs(orderStore)
orderStore.getOrder();
const order = orderRefStore.order;


</script>

<style lang="scss" scoped>
.member {
  .orderWrapper {
      width: 80%;
      margin: 0px 80px 80px 80px;

      @include mac {
        width: 80%;
        margin: 0px 0px 80px 0px;
      }
      @include pad {
        width: 800px;
        margin: 0px;
      }
      @include phone {
        width: 347px;
        margin: 0px;
      }

      .listWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0px;
        .item {
          display: grid;
          padding: 10px 10px 10px 0px;
          width: 300px;
          font-weight: bold;
          font-size: 20px;
          @include mac {
            width: 200px;
          }
          @include pad {
            font-size: 16px;
          }
          @include phone {
            font-size: 14px;
            width: 150px;
            padding: 0px;
          }
        }


        .detail {
          display: flex;
          justify-content: space-between;
          padding: 10px 10px 0px 0px;
          width: 300px;
          font-size: 20px;
          @include mac {
            width: 200px;
          }
          @include pad {
            font-size: 16px;
          }
          @include phone {
            font-size: 14px;
          }
        }
      }

      .totalPrice {
        width: 300px;
        display: flex;
        margin-left: auto;
        padding: 20px 0px;
        font-size: 25px;
        font-weight: 600;
        justify-content: center;
        align-items: center;
        @include mac {
          font-size: 20px;
        }
        @include phone {
          font-size: 16px;
          padding: 5px 0px;
          justify-content: end;
        }
      }
    }
}
</style>
