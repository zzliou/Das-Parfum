<template>
  <div class="product-card">
    <div class="productPic" @click="goToProductPage(props.inputProduct)">
      <img :src="props.inputProduct.sizeList[props.inputProduct.selectedSizeIndex].imageSrc" alt="" />
    </div>
    <div class="productInfo">
      <div class="productitle">{{ props.inputProduct.title }}</div>
      <div class="subtitle">{{ props.inputProduct.subtitle }}</div>
      <div class="sizenprice">
        <div class="size-wrapper">
          <div class="size-list-wrapper">
            <div class="size-option" v-for="(sizeOption, sizeOptionIndex) in props.inputProduct.sizeList" :key="sizeOptionIndex">
              <input type="radio" :id="sizeOption.id" :checked="props.inputProduct.selectedSizeIndex === sizeOptionIndex"
                @change="handleChangeSize(props.inputProduct, sizeOptionIndex)" />
              <label :for="sizeOption.id">{{ sizeOption.capacity }} ml</label>
            </div>
          </div>
        </div>
        <div class="price">NT$ {{ props.inputProduct.sizeList[props.inputProduct.selectedSizeIndex].price }}</div>
      </div>
      <div class="cart" @click="addCart(props.inputProduct)">加入購物車</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'

const props = defineProps(['inputProduct']);
const product =  props.inputProduct;
const router = useRouter()

function handleChangeSize(product, sizeOptionIndex) {
  product.selectedSizeIndex = sizeOptionIndex
}
const productStore = useProductStore();

function goToProductPage(product) {
  productStore.setCurrentProduct(product)
  router.push({ name: 'insidepagesView' })
}

const cartStore = useCartStore();

function addCart(product) {
  cartStore.addProduct(product)
}


</script>

<style lang="scss" scoped>
.product-card {
  width: 33%;
    box-sizing: border-box;

  .productPic {
    background-color: $color-5;
    text-align: center;
    margin: 0 2px;

    img {
      width: 400px;
      height: 600px;
      object-fit: contain;

      @include mac {
        width: 300px;
        height: 500px;
      }

      @include pad {
        width: 250px;
        height: 450px;
      }

      @include phone {
        width: 250px;
        height: 250px;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }


  .productInfo {
    width: auto;
    text-align: center;
    height: 300px;

    @include mac {
      height: 245px;
    }

    @include pad {
      height: 245px;
    }

    @include phone {
      height: 180px;
    }

    color: $color-8;
    transition: all 0.2s linear;
    margin: 0 2px;

    .cart {
      opacity: 0;
    }

    &:hover {
      background-color: $color-5;
      cursor: pointer;

      .cart {
        border: solid 1px $color-11;
        background-color: $color-11;
        width: auto;
        height: 60px;
        margin: 0px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: $color-5;
        opacity: 1;
        position: relative;
        top: 20px;

        &:active {
          box-shadow: 0 0 10px $color-11;
        }

        @include mac {
          top: 14px;
          height: 40px;
        }

        @include pad {
          top: 14px;
          height: 40px;
        }
      }
    }

    .productitle {
      font-size: 20px;
      font-weight: 600;
      padding-top: 30px;
      padding-bottom: 20px;

      @include phone {
        font-size: 16px;
        padding: 10px 0px;
      }
    }

    .subtitle {
      font-size: 14px;
      color: $color-8;
      margin-bottom: 50px;

      @include mac {
        margin-bottom: 25px;
      }

      @include pad {
        margin-bottom: 20px;
      }

      @include phone {
        margin-bottom: 10px;
        font-size: 12px;
      }
    }

    .sizenprice {
      .size-wrapper {
        margin-bottom: 20px;

        @include phone {
          margin-bottom: 10px;
        }

        .size-list-wrapper {
          justify-content: center;
          display: flex;

          .size-option {
            font-size: 14px;
          }

          input {
            cursor: pointer;
          }
        }
      }

      .size {
        margin-right: 20px;
      }

      .price {
        font-size: 20px;

        @include phone {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
