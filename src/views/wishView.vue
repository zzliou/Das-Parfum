<template>
  <div class="wishWrapper">
    <div class="content">
      <div v-show="wishList && wishList.length > 0" class="title">您的願望清單共有 {{ productCount }} 個商品</div>
      <div class="divider"></div>
      <div v-show="wishList && wishList.length > 0" class="product-wrapper">
        <div class="item_detail" v-for="(product, index) in wishList" :key="index">
          <div class="icon-wrapper">
            <icon class="icon" @click="handleDelete(product); showAlertdelete()" icon="trash-can"></icon>
            <icon class="icon" @click="goToProductPage(product)" icon="magnifying-glass-plus"></icon>
            <icon class="icon" @click="showAlert(); addCart(product);" icon="cart-shopping"></icon>
          </div>
          <div class="productPic"><img :src="product.sizeList[product.selectedSizeIndex].imageSrc" alt="" /></div>
          <div class="name">{{ product.title }}</div>
          <div class="capacity">容量 {{ product.sizeList[product.selectedSizeIndex].capacity }} ml</div>
          <div class="unitPrice"> 售價 NT$ {{ product.sizeList[product.selectedSizeIndex].price }}</div>
        </div>
      </div>
      <div v-show="!wishList || wishList.length <= 0" class="remind-text">尚未收藏商品</div>
      <div class="divider"></div>
      <div class="countWrapper">
        <!-- <div class="totalWrapper">
          <div class="total">總計 {{ product.length }}</div>
           <div class="totalPrice">{{ totalPrice }}</div>
        </div> -->
        <div class="buttonWrapper">
          <div class="shopping" @click="goShopping">
            <button>繼續購物</button>
          </div>
          <div class="checkout">
            <button v-if="authStore.isLogin" @click="goOrderpage">立即結帳</button>
            <button v-else @click="showLogin">立即結帳 (請先登入會員)</button>
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
import { useAuthStore } from '@/stores/auth'
import { useUiStore } from '@/stores/ui'
import { useWishStore } from '@/stores/wish'
import { useProductStore } from '@/stores/product'

const authStore = useAuthStore()
const uiStore = useUiStore();
const cartStore = useCartStore()
// const cartRefStore = storeToRefs(cartStore);
const wishStore = useWishStore()
const wishRefStore = storeToRefs(wishStore);
const wishList = wishRefStore.wishList
// let renderProductList = wishRefStore.filterList


let totalPrice = ref(0);
const router = useRouter()

function goShopping() {
  router.push("/productList")
}
function showLogin() {
  uiStore.showLoginPopup();
}
function goOrderpage() {
  router.push('/OrderPageView')
}

function showAlertdelete() {
  alert('刪除商品')
}
function showAlert() {
  alert('已加入購物車')
}

function addCart(product) {
  cartStore.addProduct(product)
}


let productCount = ref(0); 

function goProductCount() {
  let totalCount = 0;
  for (let product of wishList.value) {
    totalCount += product.quantity;
  }
  productCount.value = Math.max(0, totalCount);
}
goProductCount();

function handleDelete(product) {
  wishStore.deleteProduct(product)
  goProductCount();
}

function countTotal() {
  totalPrice.value = 0;
  for (let product of wishList.value) {
    let itemTotalPrice = product.sizeList[product.selectedSizeIndex].price * product.quantity;
    totalPrice.value = totalPrice.value + itemTotalPrice
  }
}
countTotal()





const productStore = useProductStore();
function goToProductPage(product) {
  productStore.setCurrentProduct(product)
  router.push({ name: 'productDetailView', params: { id: product.id } })
}

</script>

<style lang="scss" scoped>
.wishWrapper {
  width: 100%;
  height: auto;
  background-color: $color-1;
  font-family: Suisse, sans-serif;

  .content {
    padding: 50px 200px;
    position: relative;

    @include phone {
      padding: 50px;
    }

    .title {
      font-weight: 600;
      font-size: 20px;
      margin: 20px 0px;

      @include phone {
        display: flex;
        justify-content: center;
      }
    }

    .product-wrapper {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;


      .icon-wrapper {
        display: flex;
        flex-direction: column;
        font-size: 20px;
        position: absolute;
        top: 20px;
        right: 20px;
        color: $color-6;

        :hover {
          cursor: pointer;
          color: $color-9;
        }

        .icon {
          padding: 8px;
        }
      }

      .item_detail {
        width: 350px;
        height: 440px;
        box-sizing: border-box;
        background-color: $color-5;
        margin: 20px;
        position: relative;
        border-radius: 10px;

        .productPic {

          img {
            width: 300px;
            height: 300px;
            object-fit: contain;
            display: flex;
            margin-left: auto;
            margin-right: auto;
          }
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

        .buttonWrapper {
          display: flex;

          .addCart {
            padding: 5px;
          }

          .goProductPage {
            padding: 5px;
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
              font-size: 12px;
            }

            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
    .remind-text {
      color: $color-6;
      font-weight: 600;
      font-size: 24px;
      width: 100%;
      height: 500px;
      word-spacing: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
