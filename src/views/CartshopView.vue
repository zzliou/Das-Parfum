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
          <div class="item_detail" v-for="(product, index) in cartListToShow" :key="index">
            <div class="name">{{ product.title }}</div>
            <div class="capacity">{{ product.sizeList[product.selectedSizeIndex].capacity }} ml</div>
            <div class="unitPrice"> {{ product.sizeList[product.selectedSizeIndex].price }}</div>
            <div class="quantity">
              <button @click="handleMinus(product)">-</button>
              {{product.quantity}}
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
          <div class="shopping">
          <button><RouterLink to="/productList">繼續購物</RouterLink></button>
        </div>
        <div class="checkout">
          <button>結帳</button>
        </div>
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
let cartListToShow = ref(cartList);
let totalPrice = ref(0);
const router = useRouter()
function goToContact() {
  router.push('/productList')
}


function countTotal() {
  for(let product of cartListToShow.value){
    let itemTotalPrice = product.sizeList[product.selectedSizeIndex].price * product.quantity;
    totalPrice.value = totalPrice.value + itemTotalPrice  
  } 
}
countTotal()
// function handleMinus(product) {
//   if(product.quantity > 1){
//     product.quantity = product.quantity - 1;
//     for(let product of cartListToShow.value){
//     let itemTotalPrice = product.sizeList[0].price * product.quantity;
//     totalPrice.value = totalPrice.value - itemTotalPrice;
//     console.log(cartListToShow,'cartListToShow')
//   }
//   }
// }

function handleMinus(product) {
  if (product.quantity > 1) {
    // 减少产品数量
    product.quantity--;
    totalPrice.value = 0;
    for(let item of cartListToShow.value){
      let itemTotalPrice = item.sizeList[product.selectedSizeIndex].price * item.quantity;
      console.log(item.sizeList[product.selectedSizeIndex].price, item.quantity,itemTotalPrice, 'item.quantity')
      totalPrice.value = totalPrice.value + itemTotalPrice  
    }
  }
}


function handlePlus(product) {
  product.quantity = product.quantity + 1;
  totalPrice.value = 0;
  for(let product of cartListToShow.value){
    let itemTotalPrice = product.sizeList[product.selectedSizeIndex].price * product.quantity;
    totalPrice.value = totalPrice.value + itemTotalPrice  
  }
}
console.log(cartList, 'cartList')
function handleDelete(product) {
  cartListToShow.value = cartListToShow.value.filter(item => item.title !== product.title);
  console.log(cartListToShow.value);
  totalPrice.value = 0;
  for(let item of cartListToShow.value){
      let itemTotalPrice = item.sizeList[product.selectedSizeIndex].price * item.quantity;
      console.log(item.sizeList[product.selectedSizeIndex].price, item.quantity,itemTotalPrice, 'item.quantity')
      totalPrice.value = totalPrice.value + itemTotalPrice 
    }
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
}
</style>
