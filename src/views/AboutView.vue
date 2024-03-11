<template>
  <div class="about">
    <div class="container">
      <div class="storyWrapper">
        <div class="icon">
         <img src="@/assets/img/icon/LOGO.png" />
        </div>
        <div class="storyArea">
          <div class="title">故事的起點</div>
          <div class="description">
            「Alles Gute!」源自德語，是德國人經常使用的日常招呼語，有祝福別人一切順利、圓滿的意思。因此，我們以這句招呼語作為品牌名稱，就是希望能夠提供您如同摯友般的祝福，得到身心療癒，讓保養的旅程中盡情享受當下幸福的時刻。
          </div>
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
            致力開發一系列專業的護膚、頭髮和身體護理產品，秉持科學驗證，加入了頂級的植物萃取和抗氧化成分，所有配方都通過嚴格檢驗，只為提供安全、安心的產品。
          </div>
        </div>
      </div>
      <div class="designWrapper">
        <div class="design">
          <div class="title">好設計才是好生活</div>
          <div class="description">
            堅持自行研發產品，不斷構思新點子、開發新配方，以最新技術和成熟的科研方案，並根據客戶的實際需求進行研發，投入時間深入研究，以確保推出的配方具有最高品質和最有效果。
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
          <div class="title">交通便利的門市位置</div>
          <div class="description">
            無論是開車、搭乘大眾運輸還是步行前來，我們的店鋪都是您的理想選擇。靠近多個公共交通站點，步行數分鐘即可抵達，方便快捷。此外，我們也提供寬敞的停車場，讓您可以輕鬆停車後盡情享受購物樂趣，期待與您相見！
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
          :pagination="false"
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
        position: relative;
        top: -20px;
        left: 140px;
        overflow: hidden;

        @include mac {
          top: -40px;
          left: 96px;
        }

        img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }
      }
      .storyArea {
        margin: 50px;
        width: 600px;

        @include mac {
          width: 650px;
        }
        @include pad {
          width: 650px;
        }

        .title {
          font-size: 30px;
          padding: 20px 0px;

          @include mac {
            font-size: 26px;
          }
          @include pad {
            font-size: 24px;
          }
        }

        .description {
          font-size: 16px;
          line-height: 3em;
        }
      }

      // .storyImage {
      //   margin-left: auto;
      //   flex-grow: 1;
      //   img {
      //     width: 100%;
      //     height: 600px;
      //     object-fit: cover;
      //     object-position: center;
      //     @include mac {
      //       height: 300px;
      //     }
      //   }
      // }
    }

    .productsIdeaWrapper {
      margin-top: 200px;
      width: 100%;
      height: auto;
      display: flex;

      @include mac {
        margin-top: 100px;
      }

      @include pad {
        margin-top: 50px;
      }

      .ideaImage {
        margin-left: 50px;

        img {
          width: auto;
          height: 800px;
          margin-right: auto;
          
          @include mac {
            height: 600px;
          }

          @include pad {
            height: 400px;
          }
        }
      }

      .productsIdea {
        width: 50%;
        margin-left: 200px;

        @include mac {
          margin-left: 100px;
        }
        @include pad {
          margin-left: 100px;
        }

        .title {
          font-size: 30px;
          padding-bottom: 20px;
          @include mac {
            font-size: 26px;
            padding-bottom: 10px;
          }
          @include pad {
            font-size: 24px;
            padding-bottom: 10px;
          }
        }

        .description {
          font-size: 16px;
          line-height: 3em;
        }
      }
    }
  }

  .designWrapper {
    display: flex;
    width: 100%;
    height: auto;
    margin-top: 200px;

    @include mac {
      margin-top: 100px;
    }
    @include pad {
      margin-top: 50px;
    }

    .design {
      width: 50%;
      height: auto;
      margin: 50px 150px;
      
      @include mac {
      margin: 0px 50px;
      }

      @include pad {
      margin: 0px 50px;
      }


      .title {
        font-size: 30px;
        padding-bottom: 20px;
        @include mac {
            font-size: 26px;
            padding-bottom: 10px;
          }
          @include pad {
            font-size: 24px;
            padding-bottom: 10px;
          }
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

        @include mac {
          height: 500px;
        }
        @include pad {
          height: 400px;
        }
      }
    }
  }
  .shopWrapper {
    margin-top: 200px;
    width: 100%;
    height: auto;
    display: flex;
    @include mac {
      margin-top: 100px;
    }
    @include pad {
      margin-top: 50px;
    }
    .shop {
      width: 60%;
      height: auto;
      margin: 50px 150px;
      @include mac {
      margin: 0px 50px;
      }

      @include pad {
      margin: 0px 50px;
      }

      .title {
        font-size: 30px;
        padding-bottom: 20px;
        @include mac {
            font-size: 26px;
            padding-bottom: 10px;
          }
          @include pad {
            font-size: 24px;
            padding-bottom: 10px;
          }
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
        @include mac {
          height: 600px;
        }
        @include pad {
          height: 400px;
        }
        
      }
    }
  }
  .swiper-photo {
    width: 100%;
    height: auto;
    
    .shopWrapper {
      width: 100%;
      height: 800px;
      padding: 0px 50px 50px 50px;

      @include mac {
        height: 600px;
        padding: 0px 150px 50px 150px;
      }

      @include mac {
        height: 400px;
        padding: 0px 150px 50px 150px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .wisdom {
    width: 100%;
    height: auto;
    text-align: center; 
    padding-bottom: 200px;
    margin-top: 200px;

    @include mac {
      padding-bottom: 100px;
      margin-top: 100px;
    }

    @include pad {
      padding-bottom: 50px;
      margin-top: 50px;
    }

    .title {
      font-size: 30px;
      padding: 20px 0px;
      @include mac {
        font-size: 26px;
      }

      @include pad {
        font-size: 24px;
      }
    }
    .subtitle {
      font-size: 16px;
    }
  }
}
</style>
