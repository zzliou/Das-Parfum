<template>
  <div class="container">
    <div class="navbar">
      <div class="productsCategories">
        <p @click="changeType('all')">全部商品</p>
        <p @click="changeType('shampoo')">髮品</p>
        <p @click="changeType('body')">身體乳</p>
        <p @click="changeType('combine')">送禮組合</p>
      </div>
    </div>
    <div class="productWapper">
      <div class="introduce">
        <div class="maintitle">重新體驗肌膚潔淨及柔滑的感受</div>
        <div class="description">
          所有產品皆含有滋潤功效的草本植物成分，讓肌膚在任何季節都能保持潔淨柔滑。
        </div>
      </div>
      <div class="section" v-for="product in renderProductList" :key="product.id">
        <div class="productPic" @click="goToProductPage(product)">
          <img :src="product.sizeList[product.selectedSizeIndex].imageSrc" alt="" />
        </div>
        <div class="productInfo">
          <div class="productitle">{{ product.title }}</div>
          <div class="subtitle">{{ product.subtitle }}</div>
          <div class="sizenprice">
            <div class="size-wrapper">
              <div class="size-list-wrapper">
                <div
                  class="size-option"
                  v-for="(sizeOption, sizeOptionIndex) in product.sizeList"
                  :key="sizeOptionIndex">
                  <input
                    type="radio"
                    :id="sizeOption.id"
                    :checked="product.selectedSizeIndex === sizeOptionIndex"
                    @change="handleChangeSize(product, sizeOptionIndex)"
                  />
                  <label :for="sizeOption.id">{{ sizeOption.capacity }} ml</label>
                </div>
              </div>
            </div>
            <div class="price">NT$ {{ product.sizeList[product.selectedSizeIndex].price }}</div>
          </div>
          <div class="cart" @click="addCart(product)">加入購物車</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import { useProductStore } from '@/stores/product'
import { useRouter } from 'vue-router';

const router = useRouter()
const productStore = useProductStore();
const productList = productStore.productList;
const renderProductList = ref(productList);

function handleChangeSize(product, sizeOptionIndex) {
  product.selectedSizeIndex = sizeOptionIndex
}

function goToProductPage(product) {
  productStore.setCurrentProduct(product)
  router.push({ name: 'insidepagesView' })
}

function changeType(type) {
  if(type === 'all') {
    renderProductList.value = productList
  }else {
    renderProductList.value = productList.filter(product => product.tag === type)
  }
}

let globalObject = getCurrentInstance().appContext.config;
let cartList = globalObject.cartList;

// function addCart(product) {
//   let good = product;
//   good['quantity'] = 1;
//   cartList.push(good)
// }
function addCart(product) {
  // 檢查是否已存在相同 id 的物件
  const existingProduct = cartList.find(item => item.id === product.id);

  if (existingProduct) {
    // 如果已存在，將該物件的 quantity 屬性 +1
    existingProduct.quantity++;
  } else {
    // 如果不存在，將該物件添加到 cartList 中
    let good = product;
    good['quantity'] = 1;
    cartList.push(good);
  }
}


window.scrollTo( 0, 0);
window.scrollTo({
    top: 0,
    behavior: "smooth"
});

</script>

<style lang="scss" scoped>

.container {
  background-color: $color-1;
  .navbar {
    display: flex;
    align-items: center;
    background-color: $color-7;

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

    @include phone {
      display: inline-block;
    }

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

    .section {
      width: 33%;
      box-sizing: border-box;

      @include phone {
        width: 100%;
      }

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
        @include  mac {
          height: 245px;
        }
        @include  pad {
          height: 245px;
        }
        @include  phone {
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
            &:active{
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
          
          @include  phone {
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
          @include  phone {
            margin-bottom: 10px;
            font-size: 12px;
          }
        }

        .sizenprice {
          .size-wrapper {
            margin-bottom: 20px;
            @include  phone {
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
    &::after {
        content: "";
        flex-grow: 1;
      }
  }
}

</style>
