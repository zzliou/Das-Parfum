<template>
  <div class="container">
    <div class="productWrapper">
      <div class="productPic">
        <img src="@/assets/img/Product.pic/p014.png" alt="" />
      </div>
      <div class="productInfo">
        <div class="name">{{ currentProduct.title }}</div>
        <div class="directions">
          這款性質溫和的低泡沫潔膚凝露含有多種淨化肌膚的植物萃取物，可清潔肌膚，散發充滿活力的柑橘芳香。
        </div>
        <div class="sizenprice">
          <div class="size-wrapper">
            <div class="size-list-wrapper">
              <div class="size-option" v-for="(sizeOption, sizeOptionIndex) in currentProduct.sizeList" :key="sizeOptionIndex">
                <input type="radio" :id="sizeOption.id" :checked="currentProduct.selectedSizeIndex === sizeOptionIndex"
                  @change="handleChangeSize(sizeOptionIndex)" />
                <label :for="sizeOption.id">{{ sizeOption.capacity }} ml</label>
              </div>
            </div>
          </div>
          <div class="price">NT$ {{ currentProduct.sizeList[currentProduct.selectedSizeIndex].price }} </div>
        </div>
        <div class="addCart" @click="addCart(currentProduct)">加入購物車</div>
        <div class="divider"></div>
        <div class="introduce">
          <div class="title">膚質感受</div>
          <div class="info">清潔、清爽</div>
          <div class="useDivider"></div>
          <div class="title">香氛</div>
          <div class="info">{{ currentProduct.subtitle }}</div>
          <div class="useDivider"></div>
          <div class="title">成份</div>
          <div class="info">苦橙、檸檬皮、葡萄柚皮</div>
          <div class="useDivider"></div>
        </div>
      </div>
    </div>
    <div class="serviceWrapper">
      <div class="section">
        <img src="@/assets/img/icon/giftbox.svg" alt="" />
        <div class="mainTitle">免費禮品包裝</div>
        <p>為您提供禮品包裝、品牌專屬棉袋以及個人化禮物小卡服務，是我們的榮幸。</p>
      </div>
      <div class="section">
        <img src="@/assets/img/icon/talk.svg" alt="" />
        <div class="mainTitle">諮詢美容顧問</div>
        <p>我們受過專業訓練的顧問，非常樂意在線上為您提供個人化的產品建議。</p>
      </div>
      <div class="section">
        <img src="@/assets/img/icon/droplet.svg" alt="" />
        <div class="mainTitle">下單送試用包</div>
        <p>我們很榮幸為所有訂單提供試用包體驗組。</p>
      </div>
    </div>
    <div class="UsageWrapper">
      <div class="productPic">
        <img src="@/assets/img/pageofpro.pic/001.jpg" alt="" />
      </div>
      <div class="way">
        <div class="howToUse">使用方式</div>
        <p>倒在手中或海綿上。按摩全身濕潤的肌膚，然後徹底洗淨。</p>
        <div class="useDivider"></div>
        <div class="title">用量</div>
        <div class="info">倒在手掌上約一個十元硬幣大小</div>
        <div class="divider"></div>
        <div class="title">質地</div>
        <div class="info">低泡沫透明凝露</div>
      </div>
    </div>
    <div class="swiper-bottom">
      <Swiper :scrollbar="{
          hide: false,
          draggable: true,
          dragSize: 500,
        }" :slidesPerView="4" :spaceBetween="0" :loop="false" :centeredSlides="false"
        :modules="modules" @swiper="onSwiperFirst">
        <SwiperSlide>
          <div class="recommendArticle">
            <p>推薦搭配使用</p>
          </div>
        </SwiperSlide>
        <SwiperSlide v-for="product in swiperListFirst" :key="product">
          <div class="recommendProductsWrapper" @click="goToProductPage(product)">
            <img :src="product.sizeList[0].imageSrc" />
            <div class="productitle">{{ product.title }}</div>
            <div class="subtitle">{{ product.subtitle }}</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import { useRoute } from 'vue-router'
import { Navigation, Pagination, Scrollbar, Autoplay, Virtual, EffectFade } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'
import pic001 from "@/assets/img/Product.pic/p001.png";
import pic002 from "@/assets/img/Product.pic/p002.png";
import pic009 from "@/assets/img/Product.pic/p009.png";
import pic013 from "@/assets/img/Product.pic/p013.png";
import pic014 from "@/assets/img/Product.pic/p014.png";
import pic015 from "@/assets/img/Product.pic/p015.png";

let swiperFirst = null
function onSwiperFirst(swiper) {
  swiperFirst = swiper
}

const productStore = useProductStore();
const currentProduct = ref(productStore.currentProduct)
const router = useRoute()

const modules = [Navigation, Pagination, Scrollbar, Autoplay, Virtual, EffectFade]

function goToProductPage(product) {
  router.push({
    name: 'insidepagesView',
    params: {
      product: JSON.stringify(product)
    }
  })
}



function handleChangeSize(sizeOptionIndex) {
  console.log(currentProduct, sizeOptionIndex)
  currentProduct.value.selectedSizeIndex = sizeOptionIndex
}

const cartStore = useCartStore();
function addCart(product) {
  cartStore.addProduct(product)
}

function initPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let swiperListFirst = ref([
  {
    title: '甜橙香檸身體凝乳',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic014
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic015
      }
    ],
    id: 1
  },
  {

    title: '芫荽籽身體凝乳',
    subtitle: '溫暖木質辛香',
    size: '容量',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic014
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic015
      }
    ],
    price: 'NT$600起',
    id: 2
  },
  {
    title: '玫瑰身體凝乳',
    subtitle: '玫瑰花、豆蔻、黑胡椒',
    size: '容量',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic014
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic015
      }
    ],
    id: 3
  },
  {
    title: '橙香萬用油',
    subtitle: '柑橘、清爽幽香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic009
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic015
      }
    ],
    id: 4
  },
  {
    title: '晨沐薰衣草面霜',
    subtitle: '薰衣草、朝露、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic001
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic013
      }
    ],
    id: 5
  },
  {
    title: '香草森林面霜',
    subtitle: '香草、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic002
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic013
      }
    ],
    id: 6
  }
])

initPage()




</script>

<style lang="scss" scoped>
.container {
  background-color: $color-1;
  width: 100%;
  height: auto;

  .productWrapper {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @include phone {
      display: inline-block;
    }

    .productPic {
      width: 500px;
      padding: 50px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @include mac {
        width: 350px;
        padding: 0px;
      }

      @include pad {
        width: 350px;
      }
      @include phone {
        width: 350px;
        padding: 0px;
        margin: 0px auto;
      }
    }

    .productInfo {
      width: 500px;
      padding: 0px 50px;

      @include mac {
        width: 450px;
      }

      @include pad {
        width: 350px;
      }
      @include phone {
        width: 350px;
        margin: 0px auto;
        padding: 0px;
      }

      .name {
        font-size: 30px;
        font-weight: 600;
        padding: 20px 0px;

        @include mac {
          font-size: 24px;
          font-weight: 600;
          padding: 10px 0px;
        }

        @include pad {
          font-size: 22px;
          font-weight: 600;
          padding: 20px 0px;
        }
        @include phone {
          font-size: 20px;
          font-weight: 600;
          padding: 20px 0px;
        }
      }

      .directions {
        padding: 10px 0px;
        font-size: 20px;
        display: flex;
        flex-wrap: wrap;

        @include mac {
          font-size: 16px;
          padding: 0px;
        }

        @include pad {
          font-size: 16px;
        }
        @include phone {
          font-size: 14px;
        }
      }

      .sizenprice {
        padding: 10px 0px;
        font-size: 18px;
        display: flex;
        align-items: center;

        @include mac {
          font-size: 16px;
        }

        @include pad {
          font-size: 16px;
        }

        @include phone {
          font-size: 14px;
        }

        .size-list-wrapper {
          display: flex;
        }

        .price {
          font-weight: 800;
          padding-left: 20px;
        }
      }

      .addCart {
        width: 100%;
        height: 50px;
        background-color: $color-9;
        border: none;
        margin: 20px 0px 10px 0px;
        text-align: center;
        color: $color-1;
        padding: 5px 0px;
        line-height: 3em;
        cursor: pointer;
        transition: background-color 0.3s, box-shadow 0.3s;

        &:active {
          box-shadow: 0 0 20px $color-3;
        }

        @include mac {
          padding: 0px;
          margin: 5px 0px;
        }

        @include pad {
          padding: 0px;
          margin: 5px 0px;
        }
        @include phone {
          font-size: 14px;
        }
      }


      .introduce {
        padding: 20px 0px;

        .title {
          font-size: 22px;
          font-weight: 400;
          padding: 14px 0px;

          @include mac {
            font-size: 20px;
            padding: 10px 0px;
          }

          @include pad {
            font-size: 18px;
            padding: 10px 0px;
          }
        }

        .info {
          color: $color-6;
          font-size: 18px;
          border-bottom: 1px solid $color-3;
          padding-bottom: 5px;
          display: flex;
          align-items: center;

          @include mac {
            font-size: 16px;
          }

          @include pad {
            font-size: 16px;
          }
        }
      }
    }
  }

  .serviceWrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;
    text-align: center;
    padding: 20px 0px;

    @include phone {
      padding: 0px 0px 20px 0px;
    }

    .section {
      margin: 10px 10px;
      width: 33.33%;
      height: auto;

      @include phone {
        width: 100px;
      }

      img {
        width: 30px;
        padding: 10px;

        @include mac {
          width: 25px;
          padding: 8px;
        }

        @include pad {
          width: 20px;
          padding: 5px;
        }
        @include phone {
          width: 30px;
          padding: 5px;
        }
      }

      .mainTitle {
        font-size: 24px;
        font-weight: 600;

        @include mac {
          font-size: 20px;
        }

        @include pad {
          font-size: 18px;
        }
        @include phone {
          font-size: 14px;
        }
      }

      p {
        font-size: 20px;
        color: $color-6;

        @include mac {
          font-size: 16px;
          padding: 15px 25px;
        }

        @include pad {
          font-size: 16px;
          padding: 15px 25px;
        }
        @include phone {
          display: none;
        }
      }
    }
  }

  .UsageWrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;

    @include phone {
      display: inline-block;
    }

    .productPic {
      width: 50%;
      height: auto;

      @include phone {
        width: 100%;
        height: 300px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        margin-right: auto;
        
        @include phone {
          object-position: bottom;
        }
      }
    }

    .way {
      width: 50%;
      height: auto;
      padding: 150px 100px;
      background-color: $color-4;

      @include mac {
        padding: 75px 50px;
      }

      @include pad {
        padding: 40px 30px;
      }

      @include phone {
        width: 100%;
        padding: 40px 0px;
      }

      .howToUse {
        font-size: 22px;

        @include mac {
          font-size: 16px;
        }

        @include pad {
          font-size: 16px;
        }
        
        @include phone {
          font-size: 16px;
          padding: 10px;
        }
      }

      p {
        font-size: 26px;

        @include mac {
          font-size: 20px;
          padding: 0px;
        }

        @include pad {
          font-size: 20px;
          padding: 0px;
        }
        
        @include phone {
          font-size: 18px;
          padding: 10px;
        }
      }

      .useDivider {
        border: $color-11 solid 1px;
        width: 100%;
        margin: 10px 0px 20px 0px;
      }

      .title {
        font-size: 26px;
        font-weight: 500;

        @include mac {
          font-size: 18px;
        }

        @include pad {
          font-size: 18px;
        }
        @include phone {
          font-size: 18px;
          padding: 10px;
        }
      }

      .info {
        font-size: 22px;
        color: $color-6;
        padding: 10px 0px;

        @include mac {
          font-size: 18px;
          padding: 5px 0px;
        }

        @include pad {
          font-size: 18px;
          padding: 5px 0px;
        }
        @include phone {
          font-size: 16px;
          padding: 10px;
        }
      }

      .divider {
        border: 1px solid $color-3;
        width: 100%;
        margin: 20px 0px;
      }
    }
  }

  p {
    font-size: 26px;
    padding: 30px 50px 30px 0px;

    @include mac {
      font-size: 22px;
      padding: 15px 25px;
    }

    @include pad {
      font-size: 22px;
      padding: 15px 25px;
    }
    @include phone {
      font-size: 18px;
      padding: 10px;
    }
  }

  .swiper-bottom {
    width: 100%;
    height: auto;
    margin-top: 200px;

    @include mac {
      margin-top: 50px;
    }

    @include phone {
      display: none;
    }

    .recommendArticle {
      padding-left: 10px;
      margin: 100px 0px;
      text-align: center;
      font-weight: bold;
      font-size: 34px;

      @include mac {
        padding-left: 0px;
        margin: 50px 0px;
      }

      @include pad {
        margin: 0px;
      }
    }

    h2 {
      font-size: 40px;

      @include mac {
        font-size: 26px;
      }

      @include pad {
        font-size: 24px;
      }
    }
  }

  .recommendProductsWrapper {
    text-align: center;
    box-sizing: border-box;
    height: 400px;

    img {
      width: 500px;
      height: 300px;
      object-fit: contain;

      @include mac {
        width: 300px;
      }

      @include pad {
        width: 250px;
      }

      &:hover {
        cursor: pointer;
      }
    }

    .productitle {
      font-size: 22px;
      padding: 10px 0px;

      @include mac {
        font-size: 20px;
        padding: 10px 0px;
      }

      @include pad {
        font-size: 18px;
        padding: 10px 0px;
      }

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    .subtitle {
      font-size: 16px;
    }
  } 
}
</style>
