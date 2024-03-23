<template>
  <div class="previewWrapper" v-if="isShow" @mouseleave="hide">
    <div class="content">
      <div class="productWrapper">
        <div class="item" v-for="(product, index) in shopcartList" :key="index">
          <div class="name">{{ product.title }}</div>
          <div class="detailWrapper">
            <div class="capacity">
              <div class="title">容量</div>
              {{ product.sizeList[product.selectedSizeIndex].capacity }} ml
            </div>
            <div class="unitPrice">
              <div class="title">單價</div>
              {{ product.sizeList[product.selectedSizeIndex].price }}
            </div>
            <div class="quantity">
              <div class="title">數量</div>
              {{ product.quantity }}
            </div>
          </div>
        </div>
      </div>
      <div class="buttonWrapper" @click="gocheckout">
        <button>前往結帳</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineExpose, ref } from 'vue';
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart'

const cartStore = storeToRefs(useCartStore());
const shopcartList = cartStore.cartList
const router = useRouter()

let isShow = ref(false)
function show() {
  isShow.value = true
}
function hide() {
  isShow.value = false
}
defineExpose({
  show: show,
  hide: hide
})

function gocheckout() {
  router.push('/CartshopView')
}

</script>

<style lang="scss" scoped>
.previewWrapper {
  position: fixed;
  top: 110px;
  right: 0px;
  background-color: $color-4;
  width: 300px;
  height: auto;
  z-index: 1;
  border: solid $color-3 2px;
  font-family: Suisse, sans-serif;

  @include phone {
    width: 250px;
  }

  .content {
    .productWrapper {
      padding: 20px;

      @include phone {
        padding: 5px;
      }

      .item {
        .name {
          font-size: 18px;

          @include phone {
            font-size: 14px;
          }
        }

        .detailWrapper {
          padding: 10px 0px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 18px;

          @include phone {
            font-size: 14px;
          }

          .capacity {
            display: flex;
            align-items: center;

          }

          .unitPrice {
            display: flex;
            align-items: center;
          }

          .quantity {
            display: flex;
            align-items: center;
          }

          .title {
            margin-right: 8px;
          }
        }

        &::after {
          content: "";
          display: block;
          border-top: 1px solid $color-3;
          margin: 10px 0px 20px 0px;
        }
      }
    }

    .buttonWrapper {
      display: flex;
      justify-content: center;

      button {
        a {
          text-decoration: none;
          color: $color-11;
        }

        width: 250px;
        height: auto;
        font-size: 18px;
        font-weight: bold;
        background-color: $color-4;
        border: solid 1px $color-3;
        margin-bottom: 25px;
        padding: 8px 0px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
