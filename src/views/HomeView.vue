<script setup></script>

<template>
  <div class="content">
    <div class="container">
      <div class="homeVueWapper">
        <div class="swiper-container-zero">
          <Swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :centeredSlides="true" :pagination="pagination"
            :navigation="false" :autoplay="{ delay: 2000, disableOnInteraction: true }" :modules="modules"
            :effect="fade" @swiper="onSwiperZero">
            <SwiperSlide v-for="(item, index) in swiperListZero" :key="index">
              <div class="newsWrapper">
                <div class="news">
                  <div class="smalltitle">{{ item.smalltitle }}</div>
                  <div class="maintitle">{{ item.maintitle }}</div>
                  <div class="subtitle">{{ item.subtitle }}</div>
                  <AppButton :title="'立即探索'" :path="'productList'" class="perfume-button"></AppButton>
                </div>
                <img :src="item.src" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="swiper-container-first">
          <Swiper :scrollbar="{
            hide: false,
            draggable: true,
            dragSize: 600,
          }" 
          :slidesPerView="4" 
          :spaceBetween="0" 
          :breakpoints="responsiveBreakpoints"
          :loop="false" 
          :centeredSlides="false" 
          :pagination="pagination"
          :navigation="{ hiddenClass: 'swiper-button-hidden' }" 
          :modules="modules" @swiper="onSwiperFirst">
            <SwiperSlide>
              <div class="famousArticle">
                <p>臉部調理系列</p>
                <h2>針對多重肌膚問題的高效滋養</h2>
                <p>
                  專為成熟肌膚精心研發的保養配方，注入有益的強效維生素和抗氧化成分，讓肌膚更加健康有光澤。
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide v-for="product in swiperListFirst" :key="product">
              <div class="famousProductsWrapper" @click="goToProductPage(product)">
                <img :src="product.sizeList[0].imageSrc" />
                <div class="productitle">{{ product.title }}</div>
                <div class="subtitle">{{ product.subtitle }}</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="perfumeWapper">
          <div class="perfumeImage">
            <img src="@/assets/img/Home.pic/home-perfume.jpg" alt="" />
          </div>
          <div class="perfumeInformation">
            <div class="title">一滴精華，雙倍享受</div>
            <div class="subtitle">
              突破傳統框架的迷人香水，除了提供現有的 50mL 版本外，還新增了 100mL 的大容量版本。這些大容量版本僅在官網上販售，適合長期使用 的忠實愛好者。
            </div>
            <AppButton :title="'立即探索'" :path="'productList'" class="perfume-button"></AppButton>
          </div>
        </div>
        <div class="surpriseGiftWapper">
          <div class="giftInformation">
            <div class="title">驚喜禮物</div>
            <div class="subtitle">
              慶祝特別的時刻，卻不知道該送什麼，禮物指南中有各種適合不同人的產品，輕鬆解決你的煩惱。
            </div>
            <AppButton :title="'立即挑選'" :path="'combineList'" class="surpriseGift-button"></AppButton>
          </div>
          <div class="giftImage">
            <img src="@/assets/img/Home.pic/home-gift.jpg" alt="" />
          </div>
        </div>
        <div class="videoServiceWapper">
          <div class="videoServiceImage">
            <img src="@/assets/img/Home.pic/home-videocall.jpg" alt="" />
          </div>
          <div class="videoServiceInformation">
            <div class="title">專屬於您的居家諮詢</div>
            <div class="subtitle">
              為了協助您挑選最適合的產品，邀請您與專業顧問進行「線上視訊諮詢」。
            </div>
            <AppButton :title="'立即挑選'" :path="'contact'" class="video-button"></AppButton>
          </div>
        </div>
        <div class="swiper-container-second">
          <Swiper :scrollbar="{
            hide: false,
            draggable: true,
            dragsize: 600,
            mousewheel: true,
          }" :slidesPerView="3" :spaceBetween="10" :loop="true" :centeredSlides="false" :pagination="pagination"
            :autoplay="{ delay: 3000, disableOnInteraction: false }" :navigation="true" :modules="modules"
            @swiper="onSwiperSecond">
            <SwiperSlide v-for="product in swiperListSecond" :key="product">
              <div class="SetWrapper" @click="goToProductPage(product)">
                <img :src="product.sizeList[0].imageSrc" />
                <div class="settitle">{{ product.title }}</div>
                <div class="setsubtitle">{{ product.subtitle }}</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="shop">
          <div class="loctioninfo">
            <div class="shoptitle">尋找店鋪</div>
            <div class="subtitle">
              位於各城市的精華地段中，交通便利方便抵達！就讓我們的美容顧問，為您提供量身訂製的建議吧，期待與您相見的那天到來！
            </div>
            <AppButton :title="'立即出發'" :path="'shop'" class="shop-button"></AppButton>
          </div>
          <div class="swiper-container-third">
            <Swiper :slidesPerView="1" :loop="true" :centeredSlides="true" :pagination="pagination"
              :autoplay="{ delay: 4000, disableOnInteraction: true }" :navigation="false" :modules="modules"
              @swiper="onSwiperThird">
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
                使用專業儀器對所有產品進行全面測試，同時秉持著對動物生命的愛護和尊重，堅持不進行動物實驗
              </div>
            </div>
            <div class="section">
              <div class="ecoTitle">全產品環保包裝</div>
              <div class="ecoSubtitle">
                皆使用可回收或可生物降解的天然材料作為包裝，以減少對地球的塑料污染。同時，我們提供消費者空瓶回收的回購優惠價，鼓勵大家參與環保行動。
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
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'
import 'swiper/scss/scrollbar'
import shop1 from "@/assets/img/Home.pic/home-store/shop1.png";
import shop2 from "@/assets/img/Home.pic/home-store/shop2.jpg";
import shop3 from "@/assets/img/Home.pic/home-store/shop3.jpg";
import BN1 from "@/assets/img/Home.pic/home-BN/banner1.jpg";
import BN2 from "@/assets/img/Home.pic/home-BN/banner2.jpg";
import BN3 from "@/assets/img/Home.pic/home-BN/banner3.png";
import pic001 from "@/assets/img/Product.pic/p001.png";
import pic002 from "@/assets/img/Product.pic/p002.png";
import pic009 from "@/assets/img/Product.pic/p009.png";
import pic013 from "@/assets/img/Product.pic/p013.png";
import pic014 from "@/assets/img/Product.pic/p014.png";
import pic015 from "@/assets/img/Product.pic/p015.png";
import set001 from "@/assets/img/Home.pic/home-set/set001.png";
import set002 from "@/assets/img/Home.pic/home-set/set002.png";
import set003 from "@/assets/img/Home.pic/home-set/set003.png";
import set004 from "@/assets/img/Home.pic/home-set/set004.png";

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
    maintitle: '為您介紹 Alles Gute 香氛系列',
    subtitle:
      '探索三款啟程心靈旅程的香氛────森林、朝露以及夜幕，每三十分鐘銷售5,000份。',
    src: BN1
  },
  {
    smalltitle: '高效配方',
    maintitle: '肌膚調理凝霜',
    subtitle:
      '這款蘊含牛奶般獨特質地、富含維他命 B 和 C 的輕度保濕配方，能有效呵護、柔軟、平衡肌膚。',
    src: BN2
  },
  {
    smalltitle: '陶冶心情',
    maintitle: '2024年全新力作',
    subtitle: '香水系列分為以下幾種香調：花香、清新、木質、馥郁──也可能同時擁有兩種香調特色。',
    src: BN3
  }
])

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

let swiperListSecond = ref([
  {
    title: '春意盎然',
    subtitle: '清潔露、廁後點滴、室內噴霧',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: set001
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: set001
      }
    ],
    id: 1
  },
  {
    title: '夏日戀曲',
    subtitle: '潔膚露、去角質露、身體乳霜',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: set002
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: set002
      }
    ],
    id: 2
  },
  {
    title: '秋頌曲調',
    subtitle: '護手霜、潔膚露、護唇膏',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: set003
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: set003
      }
    ],
    id: 3
  },
  {
    title: '冬季禮遇',
    subtitle: '護手霜、清潔露、乾洗手',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: set004
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: set004
      }
    ],
    id: 4
  },
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

        @include mac {
          top: 100px;
          left: 100px;
        }

        @include pad {
          top: 100px;
          left: 100px;
          width: 60%;
        }

        @include phone {
          top: 280px;
          left: 10px;
          width: 80%;
        }

        .smalltitle {
          font-size: 18px;

          @include mac {
            font-size: 16px;
          }

          @include pad {
            font-size: 16px;
          }
          @include phone {
            font-size: 12px;
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
          @include phone {
            font-size: 18px;
            padding: 8px 0px;
          }
        }

        .subtitle {
          font-size: 24px;
          padding-bottom: 30px;
          line-height: 2em;

          @include mac {
            font-size: 20px;
            padding-bottom: 20px;
          }

          @include pad {
            font-size: 18px;
            padding-bottom: 20px;
          }
          @include phone {
            display: none;
          }
        }

        .perfume-button {
          border: 1px solid $color-1;
          font-size: 12px;
        }
      }

      img {
        width: 100%;
        height: 600px;
        object-fit: cover;

        @include mac {
          height: 450px;
        }

        @include pad {
          height: 400px;
        }
        @include phone {
          height: 400px;
          object-position: right;
        }
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

    @include pad {
      margin-top: 50px;
    }
    @include phone {
      margin-top: 30px;
    }

    .famousArticle {
      padding-left: 100px;
      margin: 100px 0px;
      @include phone {
        display: none;
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
      width: 100%;
      padding-bottom: 120px;

      @include mac {
        height: 400px;
      }

      @include pad {
        height: 350px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;

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
        color: $color-9;
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

    @include mac {
      margin-top: 100px;
    }

    @include pad {
      margin-top: 50px;
    }
    @include phone {
      margin-top: 30px;
    }

    .perfumeImage {
      flex-grow: 1;
      padding-right: 150px;

      @include phone {
        padding-right: 0px;
      }

      img {
        margin-right: auto;
        width: 100%;
        height: 500px;
        object-fit: cover;
        background-position: 0 -100px;

        @include mac {
          height: 350px;
        }

        @include pad {
          height: 300px;
        }
        @include phone {
          height: 200px;
        }
      }

    }

    .perfumeInformation {
      padding-right: 150px;
      width: 450px;
      height: auto;
      text-align: left;

      @include mac {
        width: 350px;
      }

      @include pad {
        width: 300px;
        padding-right: 100px;
      }
      @include phone {
        width: 200px;
        padding: 20px;
        height: auto;
      }

      .title {
        font-size: 30px;

        @include mac {
          font-size: 28px;
        }

        @include pad {
          font-size: 25px;
        }
        @include phone {
          font-size: 20px;
        }
      }

      .subtitle {
        font-size: 16px;
        line-height: 1.7;
        padding-top: 20px;
        color: $color-9;
        @include phone {
          display: none;
        }
      }
    }

    .perfume-button {
      margin-top: 40px;
      border: solid 1px $color-3;
      @include phone {
        width: 77px;
        height: 26px;
        font-size: 16px;
      }
    }
  }

  .surpriseGiftWapper {
    width: 100%;
    height: auto;
    margin-top: 200px;
    display: flex;
    align-items: flex-start;

    @include mac {
      margin-top: 100px;
    }

    @include pad {
      margin-top: 50px;
    }
    @include phone {
      margin-top: 0px;
    }


    .giftInformation {
      padding-left: 150px;
      width: 450px;
      height: auto;
      // text-align: left;

      @include mac {
        width: 350px;
      }

      @include pad {
        width: 300px;
      }
      @include phone {
        width: 200px;
        padding: 20px;
        height: auto;
      }

      .title {
        font-size: 30px;

        @include mac {
          font-size: 28px;
        }

        @include pad {
          font-size: 25px;
        }
        @include phone {
          font-size: 20px;
        }
      }

      .subtitle {
        font-size: 16px;
        line-height: 1.7;
        padding: 20px 0px;
        color: $color-9;
        @include phone {
          display: none;
        }
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
      @include phone {
        padding-left: 0px;
      }

      img {
        margin-left: auto;
        width: 100%;
        height: 500px;
        object-fit: cover;

        @include mac {
          height: 350px;
        }

        @include pad {
          height: 300px;
        }
        @include phone {
          height: 200px;
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

    @include mac {
      margin-top: 100px;
    }

    @include pad {
      margin-top: 50px;
    }
    @include phone {
      margin-top: 0px;
    }

    .videoServiceImage {
      flex-grow: 1;
      padding-right: 150px;
      @include phone {
        padding-right: 0px;
      }

      img {
        margin-right: auto;
        width: 100%;
        height: 500px;
        object-fit: cover;

        @include mac {
          height: 350px;
        }

        @include pad {
          height: 300px;
        }
        @include phone {
          height: 200px;
        }
      }
    }

    .videoServiceInformation {
      padding-right: 150px;
      width: 450px;
      height: auto;
      text-align: left;

      @include mac {
        width: 350px;
      }

      @include pad {
        width: 300px;
      }
      @include phone {
        width: 200px;
        padding: 20px;
        height: auto;
      }

      .title {
        font-size: 30px;

        @include mac {
          font-size: 28px;
        }

        @include pad {
          font-size: 25px;
        }
        @include phone {
          font-size: 20px;
        }
      }

      .subtitle {
        font-size: 16px;
        line-height: 1.7;
        padding: 20px 0px;
        color: $color-9;
        @include phone {
          display: none;
        }
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

    @include mac {
      margin-top: 100px;
    }

    @include pad {
      margin-top: 50px;
    }

    .SetWrapper {
      width: 100%;
      height: auto;
      box-sizing: border-box;
      object-fit: contain;
      text-align: center;
      padding-bottom: 80px;

      @include pad {
        padding-bottom: 50px;
      }

      img {
        width: 350px;
        height: auto;

        &:hover {
          cursor: pointer;
        }

        @include mac {
          width: 300px;
        }

        @include pad {
          width: 280px;
        }
      }

      .settitle {
        font-size: 26px;
        padding: 10px 0px;

        @include mac {
          font-size: 22px;
        }

        @include pad {
          font-size: 20px;
        }

        &:hover {
          cursor: pointer;
          text-decoration: underline;
          font-weight: 600;
        }
      }

      .setsubtitle {
        font-size: 20px;
        color: $color-9;

        @include mac {
          font-size: 16px;
        }

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

    @include mac {
      margin-top: 100px;
    }

    @include pad {
      margin-top: 50px;
    }
    @include phone {
      margin-top: 30px;
      display: inline-block;
    }

    .loctioninfo {
      width: 50%;
      height: auto;
      padding-left: 80px;
      padding-right: 20px;

      @include mac {
        width: 400px;
        padding-left: 40px;
        padding-right: 10px;
      }

      @include pad {
        width: 350px;
        padding-left: 40px;
        padding-right: 10px;
      }

      @include phone {
        text-align: center;
        width: 250px;
        padding-left: 0px;
        padding-right: 0px;
        margin: 0px auto;
      }

      .shoptitle {
        font-size: 30px;

        @include mac {
          font-size: 28px;
        }

        @include pad {
          font-size: 25px;
        }
        @include phone {
          font-size: 20px;
        }
      }

      .subtitle {
        font-size: 16px;
        padding: 10px 0px;
        color: $color-9;
        line-height: 1.7;
        @include phone {
          font-size: 12px;
        }
      }

      .shop-button {
        margin-top: 40px;
        border: solid 1px $color-3;
        @include phone {
          margin-top: 10px;
          position: relative;
          top: -6px;
          bottom: 50px;
        }
      }
    }

    .swiper-container-third {
      width: 50%;
      height: auto;
      margin-left: auto;
    
      @include mac {
        width: 800px;
      }

      @include mac {
        width: 600px;
      }

      .shopimage {
        margin-left: auto;
        width: 100%;
        height: 500px;

        @include mac {
          height: 350px;
        }

        @include pad {
          height: 350px;
        }

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

    @include mac {
      margin-top: 0px;
      font-size: 22px;
    }

    @include pad {
      margin-top: 0px;
      font-size: 20px;
    }
    @include phone {
      margin-top: 0px;
      padding: 30px;
    }

    h2 {
      font-size: 28px;
      color: $color-9;

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
      @include phone {
        display: inline-block;
      }

      .section {
        background-color: $color-5;
        width: 100%;
        height: auto;
        text-align: center;
        padding: 100px 50px;

        @include mac {
          padding: 50px 50px;
        }

        @include pad {
          padding: 50px 50px;
        }

        @include phone {
          padding: 50px 0px;
        }

        .ecoTitle {
          font-size: 26px;
          padding: 20px 0px;
          font-weight: bold;

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

        .ecoSubtitle {
          font-size: 18px;
          color: $color-8;
          line-height: 1.7;
          color: $color-9;

          @include mac {
            font-size: 16px;
          }

          @include pad {
            font-size: 16px;
            line-height: 1.7em;
          }
          @include phone {
            font-size: 14px;
            line-height: 1.5em;
            padding: 0px 20px;
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
