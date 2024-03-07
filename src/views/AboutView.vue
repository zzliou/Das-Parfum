<template>
  <div class="about">
    <div class="container">
      <div class="storyWrapper">
        <div class="icon">
         <img src="@/assets/img/icon/LOGO.png" />
        </div>
        <div class="storyArea">
          <div class="title">我們的故事</div>
          <div class="description">
            我們為你帶來肌膚、秀髮及身體護理的精製配方，務求達至顯著功效之餘，同時讓身體感官享受舒緩鎮靜。
          </div>
        </div>
        <div class="storyImage">
          <img
            src="@/assets/img/About.pic/about1.jpg"
          />
        </div>
      </div>
      <div class="productsIdeaWrapper">
        <div class="ideaImage">
          <img
            src="@/assets/img/About.pic/about2.png"
          />
        </div>
        <div class="productsIdea">
          <div class="title">擁有鑽研產品細節的熱忱</div>
          <div class="description">
            我們秉持堅定的信念，開發一系列專業肌膚、秀髮及身體護理產品。致力於在科學驗證功效的基礎上，選用最優質的植物萃取和抗氧化成分。所有配方有效之餘亦絕對安全。每間店舖的專業顧問都會十分樂意為你介紹Aesop的產品，為你挑選最合適的選擇。
          </div>
        </div>
      </div>
      <div class="designWrapper">
        <div class="design">
          <div class="title">我們堅信，精心構思的設計會讓生活更美好。</div>
          <div class="description">
            堅持自行產品研發，構思更多新產品、研發新配方，為產品構建雛型，憑藉新技術及發展成熟的各項科研方案，創造出各款功效超卓的護理產品。
            並根據顧客的實際需要研發新產品，經過長時間的深入研製才會推出最高品質及有效的配方。
          </div>
        </div>
        <div class="designImage">
          <img
            src="@/assets/img/About.pic/about3.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="shopWrapper">
        <div class="shop">
          <div class="title">精心挑選的門市位置</div>
          <div class="description">
            構思新店的過程中，我們希望能夠融入店鋪所在的街道，為當地作出有益的貢獻，而不是破壞周圍和諧的氛圍。2004年，我們在墨爾本臨海郊區聖吉爾達(St
            Kilda)地下的一個小角落裡，迎接了第一批實體店顧客。那時的店面是由一條通往地下停車場的狹窄坡道改建而成，這片空間為我們日後的店鋪設計樹立了標杆。在開設新店時，首先考慮的一定是在設計中利用當地已有的元素；我們的設計力求謹慎，並尊重過去、現在和未來。
          </div>
          <AppButton :title="'查看所有店舖'" :path="'shop'" class="shop-button"></AppButton>
        </div>
        <div class="shopImage">
          <img
            src="@/assets/img/About.pic/about4.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="swiper-photo">
        <Swiper
          :scrollbar="{
            hide: false,
            draggable: true,
          }"
          :slidesPerView="1"
          :spaceBetween="0"
          :loop="true"
          :centeredSlides="true"
          :pagination="pagination"
          :navigation= "true"
          :modules="modules"
          :autoplay="{ delay: 2000, disableOnInteraction: true }"
          @swiper="onSwiperFirst"
        >
          <SwiperSlide v-for="(item, index) in swiperListFirst" :key="index">
            <div class="shopWrapper">
              <img :src="item.src" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="wisdom">
        <div class="title">‘If the path be beautiful, let us not ask where it leads.’
</div>
        <div class="subtitle">Anatole France</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from '@/components/AppButton.vue'
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue' // swiper 所需组件
import { Navigation, Pagination, Scrollbar, Autoplay, Virtual, EffectFade } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'
import 'swiper/scss/scrollbar'
import shop1 from "@/assets/img/Home.pic/home-store/shop1.png";
import shop2 from "@/assets/img/Home.pic/home-store/shop2.jpg";
import shop3 from "@/assets/img/Home.pic/home-store/shop3.jpg";
import shop4 from "@/assets/img/Home.pic/home-store/shop4.png";



let swiperFirst = null
function handleClikck(swiper) {
  swiper.slideNext()
}
function onSwiperFirst(swiper) {
  swiperFirst = swiper
}
const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    console.log(className, 'className')
    return `<div class="nav-item" > </item>`
  }
}
const modules = [Navigation, Pagination, Scrollbar, Autoplay, Virtual, EffectFade]
const swiperListFirst = ref([
  {
    src: shop1
  },
  {
    src: shop2
  },
  {
    src: shop3
  },
  {
    src: shop4
  }
])

</script>

<style lang="scss" scoped>
.about {
  background-color: $color-2;

  .container {
    .storyWrapper {
      width: 100%;
      height: auto;
      display: flex;
      .icon {
        top: 90px;
        left: 65px;
        margin: 50px 0px 50px 50px;
        overflow: hidden;
        img {
          object-fit: contain;
        }
      }
      .storyArea {
        margin: 50px;
        width: 400px;

        .title {
          font-size: 30px;
          padding: 20px 0px;
        }

        .description {
          font-size: 16px;
        }
      }

      .storyImage {
        margin-left: auto;
        flex-grow: 1;
        img {
          width: 100%;
          height: 600px;
          object-fit: cover;
          object-position: center;
          @include mac {
            height: 300px;
          }
        }
      }
    }

    .productsIdeaWrapper {
      margin-top: 200px;
      width: 100%;
      height: auto;
      display: flex;

      .ideaImage {
        margin-left: 50px;

        img {
          width: auto;
          height: 800px;
          margin-right: auto;
          @include mac {
            height: 600px;
          }
        }
      }

      .productsIdea {
        width: 50%;
        margin-left: 200px;
        @include mac {
          margin-left: 100px;
        }

        .title {
          font-size: 30px;
          padding-bottom: 20px;
        }

        .description {
          font-size: 16px;
        }
      }
    }
  }

  .designWrapper {
    display: flex;
    width: 100%;
    height: auto;
    margin-top: 200px;

    .design {
      width: 50%;
      height: auto;
      margin: 50px 150px;
      
      @include mac {
      margin: 0px 50px;
      }

      .title {
        font-size: 30px;
        padding-bottom: 20px;
      }

      .description {
        font-size: 16px;
        line-height: 3em;
      }
    }

    .designImage {
      margin-left: auto;
      flex-grow: 1;
      img {
        width: 100%;
        height: 500px;
        object-fit: cover;
      }
    }
  }
  .shopWrapper {
    margin-top: 200px;
    width: 100%;
    height: 700px;
    display: flex;
    .shop {
      width: 60%;
      height: auto;
      margin: 50px 150px;
      .title {
        font-size: 30px;
        padding: 20px 0px;
      }
      .description {
        font-size: 16px;
        line-height: 3em;
      }
      .shop-button {
        margin-top: 50px;
      }
    }
    .shopImage {
      margin-right: 50px;
      img {
        width: 100%;
        height: 800px;
        margin-left: auto;
        object-fit: cover;
      }
    }
  }
  .swiper-photo {
    width: 100%;
    height: auto;
    padding: 0px 50px 200px 34px;
    box-sizing: border-box;
    @include mac {
    padding: 0px 50px 100px 50px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
  }
  .wisdom {
    width: 100%;
    height: auto;
    text-align: center; 
    padding-bottom: 200px;
    .title {
      font-size: 30px;
      padding: 20px 0px;
    }
    .subtitle {
      font-size: 16px;
    }
  }
}
</style>
