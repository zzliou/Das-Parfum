<script setup></script>

<template>
  <div class="content">
    <div class="container">
      <div class="homeVueWapper">
        <div class="swiper-container-zero">
          <Swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :loop="true"
            :centeredSlides="true"
            :pagination="pagination"
            :navigation="false"
            :autoplay="{ delay: 2000, disableOnInteraction: true }"
            :modules="modules"
            :effect="fade"
            @swiper="onSwiperZero"
          >
            <SwiperSlide v-for="(item, index) in swiperListZero" :key="index">
              <div class="newsWrapper">
                <div class="news">
                  <div class="smalltitle">{{ item.smalltitle }}</div>
                  <div class="maintitle">{{ item.maintitle }}</div>
                  <div class="subtitle">{{ item.subtitle }}</div>
                  <AppButton
                    :title="'立即探索'"
                    :path="'productList'"
                    class="perfume-button"
                  ></AppButton>
                </div>
                <img :src="item.src" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="swiper-container-first">
          <Swiper
            :scrollbar="{
              hide: false,
              draggable: true,
              dragSize: 600,
            }"
            :slidesPerView="4"
            :spaceBetween="0"
            :loop="false"
            :centeredSlides="false"
            :pagination="pagination"
            :navigation="true"
            :modules="modules"
            @swiper="onSwiperFirst"
          >
            <SwiperSlide>
              <div class="famousArticle">
                <p>臉部調理系列</p>
                <h2>針對多重肌膚問題的高效滋養</h2>
                <p>
                  專為成熟肌膚及都市居民精心研發的保養配方，在日常保濕之外，為肌膚注入有益的強效維生素及抗氧化成分所帶來的額外益處。
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide v-for="(item, index) in swiperListFirst" :key="index">
              <div class="famousProductsWrapper" @click="goToProductPage(item)">
                <img :src="item.src" />
                <div class="productitle">{{ item.title }}</div>
                <div class="subtitle">{{ item.subtitle }}</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="perfumeWapper">
          <div class="perfumeImage">
            <img
              src="@/assets/img/首頁素材/首頁-香氛調.jpg"
              alt=""
            />
          </div>
          <div class="perfumeInformation">
            <div class="title">熟悉香調，加倍享受</div>
            <div class="subtitle">
              我們突破傳統框架的三款迷人香水──悟香水、熾香水及馬拉喀什馥郁香水──除了原有的 50 mL
              版本外，現在正式推出 100mL 大容量版本，僅在 Aesop.com
              官網上販售，適合長期使用Aesop經典香水系列的忠實愛好者。
            </div>
            <AppButton :title="'立即探索'" :path="'productList'" class="perfume-button"></AppButton>
          </div>
        </div>
        <div class="surpriseGiftWapper">
          <div class="giftInformation">
            <div class="title">驚喜禮物</div>
            <div class="subtitle">
              如果您希望展現自己慷慨餽贈的精神、計劃慶祝重要的日子，或是想要挑選禮物但又缺乏靈感，不妨讓我們助您一臂之力。我們的禮物指南介紹了適合送給各類人士的多款產品。
            </div>
            <AppButton :title="'立即挑選'" :path="'combineList'" class="surpriseGift-button"></AppButton>
          </div>
          <div class="giftImage">
            <img
              src="@/assets/img/首頁素材/首頁驚喜禮物.png"
              alt=""
            />
          </div>
        </div>
        <div class="videoServiceWapper">
          <div class="videoServiceImage">
            <img
              src="@/assets/img/首頁素材/首頁-居家諮詢.png"
              alt=""
            />
          </div>
          <div class="videoServiceInformation">
            <div class="title">在舒適家中享有專屬諮詢</div>
            <div class="subtitle">
              為了幫助您選擇合適的禮物，我們歡迎您與我們經驗豐富的專業顧問一起進行「線上視訊諮詢」。
            </div>
            <AppButton :title="'立即挑選'" :path="'contact'" class="video-button"></AppButton>
          </div>
        </div>
        <div class="swiper-container-second">
          <Swiper
            :scrollbar="{
              hide: false,
              draggable: true,
              dragsize: 600,
              mousewheel: true,
            }"
            :slidesPerView="3"
            :spaceBetween="10"
            :loop="true"
            :centeredSlides="false"
            :pagination="pagination"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :navigation="true"
            :modules="modules"
            @swiper="onSwiperSecond"
          >
            <SwiperSlide v-for="(item, index) in swiperListSecond" :key="index">
              <div class="SetWrapper"  @click="goToProductPage(item)">
                <img :src="item.src" />
                <div class="settitle">{{ item.title }}</div>
                <div class="setsubtitle">{{ item.subtitle }}</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="shop">
          <div class="loctioninfo">
            <div class="shoptitle">尋找店鋪</div>
            <div class="subtitle">
              每間門店皆有專業美容顧問,並針對您的送禮需求提供量身定制的建議,期待與您相見。
            </div>
            <AppButton :title="'立即出發'" :path="'shop'" class="shop-button"></AppButton>
          </div>
          <div class="swiper-container-third">
            <Swiper
              :slidesPerView="1"
              :loop="true"
              :centeredSlides="true"
              :pagination="pagination"
              :autoplay="{ delay: 4000, disableOnInteraction: true }"
              :navigation="false"
              :modules="modules"
              @swiper="onSwiperThird"
            >
              <SwiperSlide v-for="(item, index) in swiperListThird" :key="index">
                <div class="shopimage">
                  <img :src="item.src" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div class="wisdom-wrapper">
          <h2>'You are very much ON TIME, and in your TIME ZONE which God set up for you.'</h2>
          <p>''在上帝為你安排的時區裡，一切都是準時的。''</p>
        </div>
        <div class="eco-wrapper">
          <div class="textwrapper">
            <div class="section">
              <div class="ecoTitle">無動物實驗</div>
              <div class="ecoSubtitle">
                以專業儀器進行全產品測試，秉持愛護及尊重動物生命，堅持不使用動物實驗。
              </div>
            </div>
            <div class="section">
              <div class="ecoTitle">全產品環保包裝</div>
              <div class="ecoSubtitle">
                選擇FSC認證環保材質，百分之百以可回收或可生物降解的天然材料作為包材使用，減少對地球的塑料污染，提供消費者空瓶回收之回購優惠價。
              </div>
            </div>
            <div class="section">
              <div class="ecoTitle">降低碳足跡</div>
              <div class="ecoSubtitle">
                減少生產和運輸過程中的能源消耗，採用節能技術，降低80%碳足跡。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="goTop">
      <a href="#header" target="_self">
        <img src="https://cdn-icons-png.flaticon.com/512/11848/11848591.png" />
      </a>
    </div>
  </div>
</template>

<script setup>
import AppButton from '@/components/AppButton.vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue' // swiper 所需组件
import { Navigation, Pagination, Scrollbar, Autoplay, Virtual, EffectFade } from 'swiper/modules'
// import 'swiper/swiper-bundle.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'
import 'swiper/scss/scrollbar'
import shop1 from "@/assets/img/首頁素材/首頁-門市圖/shop1.png";
import shop2 from "@/assets/img/首頁素材/首頁-門市圖/shop2.png";
import shop3 from "@/assets/img/首頁素材/首頁-門市圖/shop3.png";
import BN1 from "@/assets/img/首頁素材/首頁-BN/banner1.jpg";
import BN2 from "@/assets/img/首頁素材/首頁-BN/banner2.jpg";
import BN3 from "@/assets/img/首頁素材/首頁-BN/banner3.png";

let swiperZero = null
let swiperFirst = null
let swiperSecond = null
let swiperThird = null
function test() {
  console.log('123')
}
function handleClick(swiper) {
  swiper.slideNext()
}
function onSwiperZero(swiper) {
  swiperZero = swiper
}
function onSwiperFirst(swiper) {
  swiperFirst = swiper
}
function onSwiperSecond(swiper) {
  swiperSecond = swiper
}
function onSwiperThird(swiper) {
  swiperThird = swiper
}

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    console.log(className, 'className')
    return `<div class="nav-item" > </item>`
  }
}
const modules = [Navigation, Pagination, Scrollbar, Autoplay, Virtual, EffectFade]

const swiperListZero = ref([
  {
    smalltitle: '家居香氛',
    maintitle: '為您介紹 Aesop 線香系列',
    subtitle:
      '探索三款使人踏上心靈漫遊之旅的香氛──紫記線香、蜻蛉線香、更級線香──以及呈現謙遜美學的青銅線香座。',
    src: BN1
  },
  {
    smalltitle: '高效配方',
    maintitle: '肌膚調理凝露',
    subtitle:
      '這款具有蜂蜜般獨特質地、蘊含維他命 B 和 C 的輕度保濕配方，能有效呵護、柔軟、平衡肌膚。',
    src: BN2
  },
  {
    smalltitle: '陶冶心情',
    maintitle: '2024年全新力作',
    subtitle: '香水系列分為以下幾種香調：花香、清新、木質、馥郁──也可能同時擁有兩種香調特色。',
    src: BN3
  }
])

const swiperListFirst = ref([
  {
    title: '芫荽籽身體潔膚露',
    subtitle: '溫暖木質辛香',
    src: 'https://www.aesop.com/u1nb1km7t5q7/nWdJmaoekK7lzZDGZs6Ap/b47f80e978322c2faf73a5ebb46ad8aa/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Front_X-Large_3000x1592px.png'
  },
  {
    title: '橙香面部精華素',
    subtitle: '維他命Ｃ打底精華',
    src: 'https://www.aesop.com/u1nb1km7t5q7/nWdJmaoekK7lzZDGZs6Ap/b47f80e978322c2faf73a5ebb46ad8aa/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Front_X-Large_3000x1592px.png'
  },
  {
    title: '日夜滋養組合',
    subtitle: '極致保濕配方',
    src: 'https://www.aesop.com/u1nb1km7t5q7/nWdJmaoekK7lzZDGZs6Ap/b47f80e978322c2faf73a5ebb46ad8aa/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Front_X-Large_3000x1592px.png'
  },
  {
    title: '大馬仕玫瑰保養精華',
    subtitle: '植物萃取天然成分',
    src: 'https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png'
  },
  {
    title: '健康滋養面霜',
    subtitle: '超導保濕成分',
    src: 'https://www.aesop.com/u1nb1km7t5q7/53Q5a81QFoAlk9fqyzPRWi/ff703aa4abdc6d0fa3479da1347a19a7/Aesop_Skin_Damascan_Rose_Facial_Treatment_25mL_Web_Large_684x668px.png'
  }
])
const swiperListSecond = ref([
  {
    title: '諧美聲部',
    subtitle: '護手霜、清潔露、乾洗手',
    src: 'https://www.aesop.com/u1nb1km7t5q7/6y2ZMOukY9ToPR0CFnGWjU/e48c2d8f08bb4208f2eadf736f6ba123/Aesop_Kits_Gift_Kits_2023-24_Tuneful_Textures_GL_Web_Front_Large_1500x911px.png'
  },
  {
    title: '寓言曲調',
    subtitle: '護手霜、潔膚露、護唇膏',
    src: 'https://www.aesop.com/u1nb1km7t5q7/XkDJAABVq29aLgqi0Wpxn/73d05853da1a2a1fdeef4b1433086e51/Aesop_Kits_Gift_Kits_2023-24_Fabulous_Forms_GL_Web_Front_Large_1500x911px.png'
  },
  {
    title: '慷慨節奏',
    subtitle: '天竺葵身體潔膚露、去角質露、身體乳霜',
    src: 'https://www.aesop.com/u1nb1km7t5q7/2TDHu0T0jvbsUoQcH8prqN/a3a5d66800a71d743167b4db6a247525/Aesop_Kits_Gift_Kits_2023-24_Rousing_Rythyms_GL_Web_Front_X-Large_3000x1822px.png'
  },
  {
    title: '心旋和聲',
    subtitle: '手部清潔露、廁後點滴、室內噴霧',
    src: 'https://www.aesop.com/u1nb1km7t5q7/60WGIxgcYmP8YImmL3HnvM/963d1c080c3f2e5460f50a15335fbd9d/Aesop_Kits_Gift_Kits_2023-24_Heartful_Harmonies_GL_Web_Front_X-Large_3000x1822px.png'
  },
  {
    title: '詩意旋律',
    subtitle: '清潔露、護手霜、身體潔膚露、乳霜',
    src: 'https://www.aesop.com/u1nb1km7t5q7/4Ei5FykNQjLJ5OGb04i0rv/f335ea791c71086cc5962322a1e98ed3/Aesop_Kits_Gift_Kits_2023-24_Majestic_Melodies_GL_Web_Front_X-Large_3000x1822px.png'
  }
])

const swiperListThird = ref([
  {
    src: shop1
  },
  {
    src: shop2
  },
  {
    src: shop3
  }
])
const router = useRouter()
// let selectedTypeList = ref(index.value)

function goToProductPage(product) {
  console.log(product,'product')
  router.push({ name: 'insidepagesView' ,
  params: {
    product: JSON.stringify(product)
  }
 })
}

</script>

<style lang="scss" scoped>
.content {
  background-color: $color-1;
  width: 100%;

  .homeVueWapper {
    width: 100%;
    height: auto;
  }

  .swiper-container-zero {
    width: 100%;
    height: auto;
    .newsWrapper {
      display: flex;
      position: relative;
      color: $color-2;

      .news {
        position: absolute;
        top: 200px;
        left: 200px;

        @include pad {
          top: 100px;
          left: 100px;
          width: 50%;
        }
        .smalltitle {
          font-size: 18px;
          @include mac {
          font-size: 16px;
          }
          @include pad {
          font-size: 16px;
          }
        }

        .maintitle {
          font-size: 28px;
          padding: 20px 0px;
          @include mac {
            font-size: 22px;
            padding: 10px 0px;
          }
          @include pad {
            font-size: 20px;
            padding: 10px 0px;
          }
        }

        .subtitle {
          font-size: 24px;
          padding-bottom: 30px;
          @include mac {
            font-size: 20px;
            padding-bottom: 20px;
          }
          @include mac {
            font-size: 18px;
            padding-bottom: 20px;
          }
        }
        .perfume-button {
          border: 1px solid $color-1;
        }

      }

      img {
        width: 100%;
        height: 600px;
        object-fit: cover;
      }
    }
  }

  .swiper-container-first {
    width: 100%;
    height: auto;
    margin-top: 200px;
    @include mac {
    margin-top: 100px;
    }

    .famousArticle {
      padding-left: 100px;
      margin: 100px 0px;

      @include mac {
      margin: 0px;
      }
      @include pad {
      margin: 0px;
      }

      p {
        font-size: 16px;
        @include pad {
        font-size: 14px;  
        }
      }

      h2 {
        font-size: 22px;
        @include pad {
        font-size: 20px;  
        }
      }
    }

    .famousProductsWrapper {
      text-align: center;
      box-sizing: border-box;
      height: 400px;

      img {
        width: 400px;
        height: 200px;
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

  .perfumeWapper {
    width: 100%;
    height: auto;
    margin-top: 200px;
    display: flex;
    align-items: flex-start;

    @include pad {
      margin-top: 100px;
    }

    .perfumeImage {
      flex-grow: 1;
      padding-right: 150px;
      @include pad {
        padding-right: 80px;
      }
      
      img {
        margin-right: auto;
        width: 100%;
        height: 500px;
        object-fit: cover;
        @include pad {
          height: 300px;
        }
      }
      
    }

    .perfumeInformation {
      padding-right: 150px;
      width: 450px;
      height: auto;
      text-align: left;


      .title {
        font-size: 30px;
        @include pad {
         font-size: 25px;
        }
      }
      .subtitle {
        font-size: 16px;
        line-height: 1.7;
        padding-top: 20px;
      }
    }
    .perfume-button {
      margin-top: 40px;
      border: solid 1px $color-3;
    }
  }
  .surpriseGiftWapper {
    width: 100%;
    height: auto;
    margin-top: 200px;
    display: flex;
    @include pad {
      margin-top: 100px;
    }

    .giftInformation {
      padding-left: 150px;
      width: 450px;
      height: auto;
      text-align: left;

      .title {
        font-size: 30px;
        @include pad {
          font-size: 25px;
        }
      }

      .subtitle {
        font-size: 16px;
        line-height: 1.7;
        padding: 20px 0px;
      }
      .surpriseGift-button {
        margin-top: 40px;
        border: solid 1px $color-3;
      }
    }

    .giftImage {
      flex-grow: 1;
      padding-left: 150px;
      @include pad {
        padding-left: 80px;
      }
      img {
        margin-left: auto;
        width: 100%;
        height: 500px;
        object-fit: cover;
        @include pad {
          height: 300px;
        }
      }
    }
  }
  .videoServiceWapper {
    width: 100%;
    height: auto;
    margin-top: 200px;
    display: flex;
    align-items: flex-start;
    @include pad {
      margin-top: 100px;
    }

    .videoServiceImage {
      flex-grow: 1;
      padding-right: 150px;
      @include pad {
        padding-right: 80px;
      }
      img {
        margin-right: auto;
        width: 100%;
        height: 500px;
        object-fit: cover;
        @include pad {
        height: 300px;
        }
      }
    }

    .videoServiceInformation {
      padding-right: 150px;
      width: 450px;
      height: auto;
      text-align: left;

      .title {
        font-size: 30px;
        @include pad {
          font-size: 25px;
        }
      }

      .subtitle {
        font-size: 16px;
        line-height: 1.7;
        padding: 20px 0px;
      }
      .video-button {
        margin-top: 40px;
        border: solid 1px $color-3;
      }
    }
  }

  .swiper-container-second {
    width: 100%;
    height: auto;
    margin-top: 200px;

    .SetWrapper {
      width: 600px;
      height: 550px;
      box-sizing: border-box;
      object-fit: contain;
      text-align: center;
      @include mac {
        width: 450px;
        } 
        @include pad {
        width: 350px;
        } 

      img {
        width: 600px;
        height: auto;
        &:hover {
          cursor: pointer;
        }
        @include mac {
        width: 450px;
        } 
        @include pad {
        width: 350px;
        } 
      }
      .settitle {
        font-size: 26px;
        padding: 10px 0px;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
          font-weight: 600;
        }
        @include pad {
        font-size: 22px;
        padding: 10px 0px;
        } 
      }
      .setsubtitle {
        font-size: 20px;
        @include pad {
        font-size: 16px;
        } 
      }
    }
  }

  .shop {
    width: 100%;
    height: auto;
    margin-top: 200px;
    display: flex;
    @include pad {
      margin-top: 200px;
      } 

    .loctioninfo {
      width: 50%;
      height: auto;
      padding-left: 80px;
      padding-right: 20px;
      @include pad {
      padding-left: 40px;
      } 

      .shoptitle {
        font-size: 30px;
      @include pad {
        font-size: 25px;
      } 
      }

      .subtitle {
        font-size: 16px;
        padding: 10px 0px;
      }
      .shop-button {
        margin-top: 40px;
        border: solid 1px $color-3;
      }
    }

    .swiper-container-third {
      width: 50%;
      height: auto;
      margin-left: auto;

      .shopimage {
        margin-left: auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .wisdom-wrapper {
    margin-top: 100px;
    padding: 100px;
    text-align: center;

    h2 {
      font-size: 28px;
      @include mac {
        font-size: 22px;
      }
      @include pad {
        font-size: 20px;
      }
    }

    p {
      font-size: 22px;
      @include mac {
        font-size: 16px;
      }
      @include pad {
        font-size: 16px;
      }
    }
  }

  .eco-wrapper {
    width: 100%;

    .textwrapper {
      display: flex;
      width: 100%;
      height: auto;
      align-content: center;
      justify-content: center;

      .section {
        background-color: $color-5;
        width: 100%;
        height: auto;
        text-align: center;
        padding: 100px 50px;

        .ecoTitle {
          font-size: 26px;
          padding: 20px 0px;
          @include mac {
          font-size: 22px;
          }
          @include pad {
          font-size: 20px;
          }
        }

        .ecoSubtitle {
          font-size: 18px;
          color: $color-8;
          @include mac {
          font-size: 16px;
          }
          @include pad {
          font-size: 16px;
          line-height: 1.7em;
          }
        }
      }
    }
  }

  .goTop {
    position: fixed;
    right: 60px;
    bottom: 60px;

    img {
      width: 50px;
      height: 50px;
    }
  }
}

</style>
