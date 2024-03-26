<template>
  <div class="container">
    <div v-show="renderProductList && renderProductList.length > 0" class="navbar">
      <div class="productsCategories">
        <p @click="changeType('all')">全部商品</p>
        <p @click="changeType('shampoo')">髮品</p>
        <p @click="changeType('body')">身體乳</p>
        <p @click="changeType('combine')">送禮組合</p>
      </div>
    </div>
    <div v-show="renderProductList && renderProductList.length > 0" class="productWapper">
      <div class="introduce">
        <div class="maintitle">重新體驗肌膚潔淨及柔滑的感受</div>
        <div class="description">
          所有產品皆含有滋潤功效的草本植物成分，讓肌膚在任何季節都能保持潔淨柔滑。
        </div>
      </div>
      <ProductCard :inputProduct="product" v-for="product in renderProductList" :key="product.id"></ProductCard>
    </div>
    <div v-show="!renderProductList || renderProductList.length <= 0" class="loading-wrapper">
      <icon class="loading-icon" icon="circle-notch" />
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/product'
import ProductCard from '@/components/ProductCard.vue'
import { storeToRefs } from 'pinia'

const productStore = useProductStore();
const productRefStore = storeToRefs(productStore)
const renderProductList = productRefStore.productList

function changeType(type) {
  if(type === 'all') {
    renderProductList.value = productList
  }else {
    renderProductList.value = productList.filter(product => product.tag === type)
  }
}


function goToTop() {
  window.scrollTo({'behavior': 'smooth', 'top': 0})
}
goToTop();

</script>

<style lang="scss" scoped>

.container {
  background-color: $color-1;
  .loading-wrapper {
    height: 600px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading-icon{
      height: 50px;
      animation: rotate 2s linear infinite; 
    }
  }

  .navbar {
    display: flex;
    align-items: center;
    background-color: $color-7;

    @include phone {
      justify-content: center;
    }

    .productsCategories {
      display: flex;
      color: $color-8;
      padding: 20px 0px 20px 100px;

      @include mac {
        padding: 10px 0px 10px 100px;
      }

      @include pad {
        padding: 5px 0px 5px 100px;
      }

      @include phone {
        padding: 5px 0px 5px 0px;
      }

      p {
        padding: 0px 10px;
        &:hover {
        cursor: pointer;
        text-decoration: underline;
        }
      }
    }
  }

  .productWapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    // @include phone {
    //   display: inline-block;
    // }

    .introduce {
      width: 33%;
      box-sizing: border-box;
      padding: 100px;

      @include mac {
        padding: 80px;
      }
      @include pad {
        padding: 50px;
      }

      @include phone {
        width: 100%;
        padding: 30px;
        text-align: center;
      }

      .maintitle {
        font-size: 24px;
        padding: 30px 0px;
        @include mac {
          font-size: 22px;
        }
        @include pad {
          font-size: 20px;
        }
        @include phone {
          font-size: 16px;
        }
      }

      .description {
        font-size: 18px;
        line-height: 3;
        @include mac {
          font-size: 16px;
        }
        @include pad {
          font-size: 16px;
        }
        @include phone {
          display: none;
        }
      }
    }
    &::after {
      content: "";
      flex-grow: 1;
    }
  }
}
</style>
