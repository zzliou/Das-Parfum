<template>
  <div class="member">
    <div class="order">
      <div class="order-detail">
        <div class="mainTitle">
          <h2>本次訂單明細</h2>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart'
import { useAuthStore } from '@/stores/auth'
import { useUiStore } from '@/stores/ui'
import { useOrderStore } from '@/stores/order'

const authStore = useAuthStore()
const uiStore = useUiStore();
const cartStore = useCartStore()
const cartRefStore = storeToRefs(cartStore);
const shopcartList = cartRefStore.cartList


const orderStore = useOrderStore();
const orderRefStore = storeToRefs(orderStore)
orderStore.getOrder();
const order = orderRefStore.order;

let totalPrice = ref(0);
const router = useRouter()

function countTotal() {
  totalPrice.value = 0;
  for (let product of shopcartList.value) {
    let itemTotalPrice = product.sizeList[product.selectedSizeIndex].price * product.quantity;
    totalPrice.value = totalPrice.value + itemTotalPrice
  }
}
countTotal()


</script>

<style lang="scss" scoped>
.member {
  width: 100%;
  height: auto;
  padding: 50px 0px;
  background-color: $color-1;

  .order {
    display: grid;
    place-items: center;

    .order-detail {
      width: 80%;
      height: auto;

      .mainTitle {
        width: 80%;
        height: auto;

        h2 {
          font-size: 22px;
          font-weight: 600;
          text-align: start;

          @include pad {
            font-size: 20px;
          }

          @include phone {
            font-size: 16px;
          }
        }
      }

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
      }
    }

    .divider {
      width: 100%;
      border: $color-11 1.5px solid;
      margin: 10px 0px;

      @include phone {
        margin: 5px 0px;
      }
    }

    .dividerLiter {
      width: 100%;
      border: $color-3 1px solid;
    }
  }
}
</style>
