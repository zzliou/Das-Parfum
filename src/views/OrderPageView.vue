<template>
  <div class="container">
    <div class="oderList">
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
        <div class="listWrapper" v-for="(product, index) in shopcartList" :key="index">
          <div class="detail">{{ product.title }}</div>
          <div class="detail">{{ product.sizeList[product.selectedSizeIndex].capacity }} ml</div>
          <div class="detail">{{product.quantity}}</div>
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
      <div class="mainTitle">
        <h2>填寫訂單資訊</h2>
      </div>
      <form>
        <label for="infoForm">
          <div class="infoWrapper">
            <div class="divider"></div>
            <div class="inputWrapper">
              <div class="title">收件人姓名：</div>
              <input type="text" name="username" placeholder="請輸入全名" id="myInput">
            </div>
            <div class="inputWrapper">
              <div class="title">連絡電話：</div>
              <input type="tel" name="phone" placeholder="0912-000-000" id="myInput">
            </div>
            <div class="inputWrapper">
              <div class="title">收件地址：</div>
              <input type="text" name="address" placeholder="請加入郵遞區號" id="myInput">
            </div>
          </div>
          <div class="buttonWrapper">
            <div class="reset">
              <button type="reset">清除資料</button>
            </div>
            <div class="submit" >
              <button class='submitBtn' @click="submitOrder">確定送出</button>
            </div>
            
          </div>
          <div class="divider"></div>
        </label>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore();
const cartRefStore = storeToRefs(cartStore);
const shopcartList = cartRefStore.cartList


let totalPrice = ref(0);
const router = useRouter()


function submitOrder() {
  cartStore.submit();
  router.push("/FinalpagesView")
}

function countTotal() {
  for(let product of shopcartList.value){
    let itemTotalPrice = product.sizeList[product.selectedSizeIndex].price * product.quantity;
    totalPrice.value = totalPrice.value + itemTotalPrice  
  } 
}
countTotal()

function initPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

initPage()


</script>

<style lang="scss" scoped>
.container {
  background-color: $color-1;
  width: 100%;
  height: auto;
  font-family: Suisse Regular, sans-serif;
  padding: 50px 0px;

  .oderList {
    display: grid;
    place-items: center;

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

    form {
      width: 80%;
      margin: 0px 30px 0px 30px;

      .infoWrapper {
        .info {
          font-size: 22px;
          padding: 30px 0px;
        }

        .inputWrapper {
          display: flex;

          .title {
            font-size: 20px;
            padding: 30px 0px;
            width: 20%;
            font-weight: 600;
            @include mac {
              font-size: 20px;
            }
            @include pad {
              font-size: 16px;
            }
            @include phone {
              width: 30%;
              font-size: 14px;
              padding: 20px 0px;
            }
          }
        }

        input {
          border: none;
          background-color: transparent;
          outline: none;
          font-size: 20px;
          width: 80%;
          border-bottom: 1px solid $color-3;
          @include mac {
              font-size: 20px;
            }
            @include pad {
              font-size: 16px;
            }
            @include phone {
              font-size: 14px;
              width: 70%;
            }
        }
      }

      .buttonWrapper {
          display: flex;
          justify-content: center;
          margin: 50px 0px;
          
          
          @include pad {
            margin: 20px 0px;
          }

          @include phone {
            margin: 20px 0px;
          }

          .reset {
            padding-right: 10px;
          }

          button {
            width: 200px;
            height: 50px;
            background-color: $color-11;
            color: $color-2;
            font-size: 18px;
            padding: 5px;

            &:hover {
              cursor: pointer;
            }

            @include phone {
              width: 100px;
              height: 30px;
              font-size: 14px;
            }
          }
        }
    }

      .bottom {
        width: 80%;
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
        // margin: 20px 0px;
      }
    }
  }
</style>
