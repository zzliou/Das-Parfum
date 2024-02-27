<template>
  <div class="container">
    <div class="productWrapper">
      <div class="productPic">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/7qXqWN3EwPQ9EpSd9W646j/8b0519155e0e83ed8c4ed20557bb0a83/Aesop_Hand_Resurrection_Aromatique_Hand_Wash_500mL_Web_Front_Large_900x1115px.png"
          alt=""
        />
      </div>
      <div class="productInfo">
        <div class="name">{{ product.title }}</div>
        <div class="directions">
          這款性質溫和的低泡沫潔膚凝露含有多種淨化肌膚的植物萃取物，可清潔肌膚，散發充滿活力的柑橘芳香。
        </div>
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
            <div class="price">NT$ {{ product.sizeList[product.selectedSizeIndex].price }} </div>
          </div>
        <div class="addCart" @click="addCart(product)">加入購物車</div>
        <div class="divider"></div>
        <div class="introduce">
          <div class="title">膚質感受</div>
          <div class="info">清潔、清爽</div>
          <div class="useDivider"></div>
          <div class="title">香氛</div>
          <div class="info">{{ product.subtitle }}</div>
          <div class="useDivider"></div>
          <div class="title">成份</div>
          <div class="info">苦橙、檸檬皮、葡萄柚皮</div>
          <div class="useDivider"></div>
        </div>
      </div>
    </div>
    <div class="serviceWrapper">
      <div class="section">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/7AI4tKMotpiot46NoMsbRV/ea55cce91cb42d7a8b88d53b9288451f/giftbox.svg"
          alt=""
        />
        <div class="mainTitle">免費禮品包裝</div>
        <p>為您提供禮品包裝、品牌專屬棉袋以及個人化禮物小卡服務，是我們的榮幸。</p>
      </div>
      <div class="section">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/4Wb7WJo1Hhqg95v6CZKEE9/5e8d64187475757f59138ba10479b51a/chat-bubble.svg"
          alt=""
        />
        <div class="mainTitle">諮詢美容顧問</div>
        <p>我們受過專業訓練的顧問，非常樂意在線上為您提供個人化的產品建議。</p>
      </div>
      <div class="section">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/3ZHAFYCvLBqAKjXfINVH1q/acff0cee6551b41d62d3a75c1e9c2780/droplet.svg"
          alt=""
        />
        <div class="mainTitle">下單送試用包</div>
        <p>我們很榮幸為所有訂單提供試用包體驗組。</p>
      </div>
    </div>
    <div class="UsageWrapper">
      <div class="productPic">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/6PqtseSQ1jdHf2eWn52qQy/d391423ab4b5b4a876f597b53508d344/Aesop_Citrus_Melange_Body_Cleanser_Web_PDP_Secondary_50-50_Desktop_1440x1500px.jpg"
          alt=""
        />
      </div>
      <div class="way">
        <div class="howToUse">使用方式</div>
        <P>倒在手中或海綿上。按摩全身濕潤的肌膚，然後徹底洗淨。</P>
        <div class="useDivider"></div>
        <div class="title">用量</div>
        <div class="info">倒在手掌上約一個十元硬幣大小</div>
        <div class="divider"></div>
        <div class="title">質地</div>
        <div class="info">低泡沫透明凝露</div>
      </div>
    </div>
    <p>其他人也考慮了</p>
    <div class="swiper-container">
      <Swiper
        :slidesPerView="4"
        :spaceBetween="30"
        :loop="true"
        :centeredSlides="true"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
        :navigation="true"
        :modules="modules"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="(item, index) in swiperList" :key="index"
          ><img :src="item.src"
        /></SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue' // swiper 所需组件
import { useRoute } from 'vue-router'
import { Navigation, Pagination, Scrollbar, Autoplay, Virtual, EffectFade } from 'swiper/modules'
// import 'swiper/swiper-bundle.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'
const router = useRoute()

const modules = [Navigation, Pagination, Scrollbar, Autoplay, Virtual, EffectFade]
const swiperList = [
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/6F4yhB0VHb1QuCYGfJ6XVf/806de4084613817a14e46774b7c3b6c1/Aesop_Body_Rejuvenate_Intensive_Body_Balm_100mL_Web_Front_Large_900x1037px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/6F4yhB0VHb1QuCYGfJ6XVf/806de4084613817a14e46774b7c3b6c1/Aesop_Body_Rejuvenate_Intensive_Body_Balm_100mL_Web_Front_Large_900x1037px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/6F4yhB0VHb1QuCYGfJ6XVf/806de4084613817a14e46774b7c3b6c1/Aesop_Body_Rejuvenate_Intensive_Body_Balm_100mL_Web_Front_Large_900x1037px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/6F4yhB0VHb1QuCYGfJ6XVf/806de4084613817a14e46774b7c3b6c1/Aesop_Body_Rejuvenate_Intensive_Body_Balm_100mL_Web_Front_Large_900x1037px.png'
  },
]
let product = ref({});
let globalObject = getCurrentInstance().appContext.config;
let cartList = globalObject.cartList;


function getProductData() {
  product.value = JSON.parse(router.params.product)
}

function handleChangeSize(item, sizeOptionIndex) {
  item.selectedSizeIndex = sizeOptionIndex
}

function addCart(product) {
  console.log(product.id, product.selectedSizeIndex, 'product')
  console.log(cartList, 'cartList')


  // 檢查是否已存在相同 id 的物件
  const existingProduct = cartList.find(function(item) { return item.id === product.id && item.selectedSizeIndex === product.selectedSizeIndex});

  if (existingProduct) {
    console.log('已經存在，幫你加一')
    // 如果已存在，將該物件的 quantity 屬性 +1
    existingProduct.quantity++;
  } else {
    console.log('新商品')

    // 如果不存在，將該物件添加到 cartList 中
    let good = JSON.parse(JSON.stringify(product))
    good['quantity'] = 1;
    cartList.push(good);
  }
}

function initPage() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

initPage()
getProductData()

</script>

<style lang="scss" scoped>
.container {
  background-color: $color-1;
  width: 100%;
  height: auto;
  .productWrapper {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    .productPic {
      width: 500px;
      padding: 50px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      @include mac {
          width: 400px;
          // margin-left: 200px;
          // padding: 50px;
        }
        @include pad {
          width: 350px;
          // margin-left: 100px;
          // padding: 40px;
        }
    }
    .productInfo {
      width: 500px;
      padding: 50px;

      @include mac {
        width: 400px;
      }
      @include pad {
        width: 350px;
      }
      .name {
        font-size: 30px;
        font-weight: 600;
        padding: 20px 0px;

        @include mac {
          font-size: 24px;
          font-weight: 600;
          padding: 20px 0px;
        }
        @include pad {
          font-size: 22px;
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
        }
        @include pad {
          font-size: 16px;
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
        margin: 20px 0px;
        text-align: center;
        color: $color-1;
        padding: 5px 0px;
        line-height: 3em;
        cursor: pointer;
        transition: background-color 0.3s, box-shadow 0.3s;
        &:active{
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
      }
      .divider {
        border: #333 solid 1px;
        width: 100%;
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
          border-bottom: 1px solid #d5d4c9;
          padding-bottom: 14px;
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
    .section {
      margin: 10px 10px;
      width: 33.33%;
      height: auto;
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
      }
    }
  }
  .UsageWrapper {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    .productPic {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        margin-right: auto;
      }
    }
    .way {
      width: 50%;
      height: auto;
      padding: 150px 100px;
      background-color: $color-4;

      @include mac {
        padding: 100px 50px;
      }
      @include pad {
        padding: 80px 30px;
      }

      .howToUse {
        font-size: 22px;
        
        @include mac {
          font-size: 16px;
        }
        @include pad {
          font-size: 16px;
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
      }
      .useDivider {
        border: #333 solid 1px;
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
      }
      .divider {
        border: 1px solid #d5d4c9;
        width: 100%;
        margin: 20px 0px;
      }
    }
  }

  p {
    font-size: 26px;
    padding: 30px 50px;

    @include mac {
          font-size: 22px;
          padding: 15px 25px;
        }
        @include pad {
          font-size: 22px;
          padding: 15px 25px;
        }
  }
  .swiper-container {
    height: 500px;
    padding: 50px 0px;

    @include mac {
      height: 330px;
      padding: 50px 25px;
    }
    @include pad {
      height: 300px;
      padding: 50px 25px;
    }
    img {
      width: 450px;
      height: 500px;

      @include mac {
        width: 250px;
        height: 300px;
      }
      @include pad {
        width: 200px;
        height: 250px;
      }
    }
  }
}
</style>
