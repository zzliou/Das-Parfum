<template>
  <div class="cartshop">
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
        <div class="item_detail" v-for="(product, index) in shopcartList" :key="index">
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
        <div class="buttonWrapper">
          <div class="shopping" @click="goShopping">
            <button>繼續購物</button>
          </div>
          <div class="checkout" @click="goOrderpage">
            <button>結帳</button>
          </div>
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

const cartStore = storeToRefs(useCartStore());
const shopcartList = cartStore.cartList

let totalPrice = ref(0);
const router = useRouter()

function goShopping() {
  router.push("/productList")
}

function goOrderpage() {
  router.push('/OrderPageView')
}


function countTotal() {
  totalPrice.value = 0;
  for (let product of shopcartList.value) {
    let itemTotalPrice = product.sizeList[product.selectedSizeIndex].price * product.quantity;
    totalPrice.value = totalPrice.value + itemTotalPrice
  }
}
countTotal()

function handleMinus(product) {
  if (product.quantity > 1) {
    product.quantity--;
    totalPrice.value = 0;
    countTotal()
  }
}


function handlePlus(product) {
  product.quantity = product.quantity + 1;
  totalPrice.value = 0;
  countTotal()
}
function handleDelete(product) {
  cartStore.deleteProduct(product)
  countTotal()
}

</script>

<style lang="scss" scoped>
.cartshop {
  width: 100%;
  height: auto;
  background-color: $color-1;
  font-family: Suisse, sans-serif;

  .content {
    padding: 50px 200px;
    font-size: 16px;
    position: relative;

    @include phone {
      padding: 50px;
    }

    .item {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      @include phone {
        height: auto;
      }


      .title {
        padding: 5px 20px;
        width: 300px;
        text-align: center;

        @include phone {
          padding: 5px 0px;
          font-size: 14px;
        }
      }
    }

    .item_detail {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      @include phone {
        height: auto;
      }

      .name {
        font-weight: 600;
        padding: 5px 20px;
        width: 300px;
        text-align: center;

        @include phone {
          padding: 5px 0px;
          font-size: 14px;
        }
      }

      .capacity {
        padding: 5px 20px;
        width: 300px;
        text-align: center;

        @include phone {
          padding: 5px 0px;
          font-size: 14px;
        }
      }

      .unitPrice {
        padding: 5px 20px;
        width: 300px;
        text-align: center;

        @include phone {
          padding: 5px 0px;
          font-size: 14px;
        }
      }

      .quantity {
        padding: 5px 20px;
        width: 300px;
        display: flex;
        justify-content: center;

        @include phone {
          padding: 5px 0px;
          font-size: 14px;
          align-items: center;
        }

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

          @include phone {
            font-size: 12px;
          }

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

        @include phone {
          padding: 5px 0px;
          font-size: 14px;
        }
      }
    }


    .divider {
      border: solid 1px $color-3;
    }

    .countWrapper {
      margin-top: 20px;

      .totalWrapper {
        display: flex;
        width: 250px;
        margin-left: auto;
        align-items: flex-end;

        @include phone {
          width: 110px;
        }

        .total {
          font-size: 16px;
          margin-right: auto;

          @include phone {
            font-size: 14px;
          }
        }

        .totalPrice {
          font-size: 22px;

          @include phone {
            font-size: 20px;
          }
        }
      }

      .buttonWrapper {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;

        @include phone {
          justify-content: center;
        }

        .shopping {
          text-align: start;
          padding: 20px 10px;

          button {
            a {
              text-decoration: none;
              color: $color-11;
              font-weight: bold;
            }

            width: 300px;
            height: 50px;
            background-color: $color-3;
            border: $color-3;
            font-size: 16px;

            @include phone {
              width: 100px;
              height: 30px;
              font-size: 14px;
            }

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
            @include phone {
              width: 100px;
              height: 30px;
              font-size: 14px;
            }

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
