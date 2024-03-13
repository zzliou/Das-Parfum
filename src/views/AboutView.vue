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
          <div class="title">好設計造就好生活</div>
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
    position: relative;
    .storyWrapper {
      width: 100%;
      height: auto;
      display: flex;
      background-color: $color-4;
      
      .icon {
        position: absolute;
        top: 180px;
        left: 400px;
        overflow: hidden;

        @include mac {
          top: 200px;
          left: 300px;
        }

        @include pad {
          top: 43px;
          left: 87px;
        }

        @include phone {
          top: 50px;
          left: 126px;
        }

        img {
          width: 100%; 
          height: 100%;
          object-fit: contain;
          @include pad {
            width: 60%;
          }
          @include phone {
            width: 60%;
          }
        }
      }
      .storyArea {
        margin: 50px 50px 0px 650px;
        width: 700px;
        padding: 150px;
        

        @include mac {
          width: 650px;
        }
        @include pad {
          width: 650px;
          margin: 0px;
          padding: 150px 100px;
        }
        @include phone {
          margin: 0px;
          padding: 150px 100px 100px 100px;
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
          @include phone {
            display: none;
          }
        }

        .description {
          font-size: 20px;
          line-height: 2em;
          @include phone {
            font-size: 16px;
            line-height: 2em;
          }
        }
      }
    }

    .productsIdeaWrapper {
      margin-top: 200px;
      width: 100%;
      height: auto;
      display: flex;
      position: relative;

      @include mac {
        margin-top: 100px;
      }

      @include pad {
        margin-top: 50px;
      }
      @include phone {
        margin-top: 0px;
        display: inline-block;
        margin-left: 0px;
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

          @include phone {
            width: 100%;
            object-fit: cover;
          }
        }
        @include phone {
          margin-left: 0px;
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
        @include phone {
          z-index: 1;
          position: absolute;
          top: 234px;
          left: -74px;
          font-weight: bold;
          color: $color-2;
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
          @include phone {
            font-size: 24px;
          }
        }

        .description {
          font-size: 20px;
          line-height: 2em;
          @include phone {
            display: none;
          }
        }
      }
    }
  }

  .designWrapper {
    display: flex;
    width: 100%;
    height: auto;
    margin-top: 200px;
    position: relative;

    @include mac {
      margin-top: 100px;
    }
    @include pad {
      margin-top: 50px;
    }
    @include phone {
      margin-top: 0px;
      display: inline-block;
      margin-left: 0px;
    }
    

    .design {
      width: 50%;
      height: auto;
      margin: 50px 100px;
      
      @include mac {
      margin: 0px 50px;
      }

      @include pad {
      margin: 0px 50px;
      }
      @include phone {
          z-index: 1;
          position: absolute;
          top: 323px;
          left: 158px;
          font-weight: bold;
          color: $color-2;
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
          @include phone {
            font-size: 24px;
          }
      }

      .description {
        font-size: 20px;
        line-height: 2em;
        @include phone {
          display: none;
        }
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
        @include phone {
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .shopWrapper {
    margin-top: 200px;
    width: 100%;
    height: auto;
    display: flex;
    position: relative;

    @include mac {
      margin-top: 100px;
    }
    @include pad {
      margin-top: 50px;
    }
    @include phone {
      margin-top: 0px;
      display: inline-block;
      margin-left: 0px;
    }

    .shop {
      width: 60%;
      height: auto;
      margin: 50px 100px;

      @include mac {
        margin: 0px 50px;
      }
      @include pad {
        margin: 0px 50px;
      }
      @include phone {
          z-index: 1;
          position: absolute;
          top: 178px;
          left: 20px;
          font-weight: bold;
          color: $color-2;
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
        @include phone {
          display: none;
        }
      }
      .description {
        font-size: 20px;
        line-height: 2em;
        @include phone {
            display: none;
          }
      }
      :deep(.app-button.shop-button) {
        position: absolute;
        display: flex;
        margin-top: 50px;
        top: 225px;
            @include mac {
              top: 150px;
            }
            @include phone {
              margin-top: 0px;
              color: $color-11;
              font-size: 22px;
              background-color: $color-4;
              width: 220px;
              height: 75px;
              opacity: 0.8;
              top: 134px;
              right: -85px;
              .wrapper {
                align-items: center;
                padding: 5px 5px;
                border: solid 1px  $color-4;
                .action {
                  margin-left: 90px;
                }
              }
            }
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
      @include phone {
        margin-right: 0px;
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

      @include pad {
        height: 400px;
        padding: 0px 150px 50px 150px;
      }

      @include phone {
        height: 400px;
        padding: 0px;
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

    @include phone {
      display: none;
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
      @include phone {
        font-size: 18px;
      }
    }
    .subtitle {
      font-size: 16px;
    }
  }
}
</style>
