<template>
  <div class="container">
    <div class="productWrapper">
      <div class="productPic">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/4wpkIvddEPUq5lHYGigqbr/cdb111906ebb82b06080f7d7662daaad/Aesop_Hair_Shampoo_100mL_Web_Front_X-Large_3000x3456px.png"
          alt=""
        />
      </div>
      <div class="productInfo">
        <div class="name">苦橙香檸身體潔膚露</div>
        <div class="directions">
          這款性質溫和的低泡沫潔膚凝露含有多種淨化肌膚的植物萃取物，可清潔肌膚，散發充滿活力的柑橘芳香。
        </div>
        <div class="capacity">
          容量
          <input type="radio" id="contactChoice1" name="contact" value="100ml" />
          <label for="contactChoice1">100ml</label>
          <input type="radio" id="contactChoice2" name="contact" value="500ml" />
          <label for="contactChoice2">500ml</label>
        </div>
        <div class="carshop">添加至購物車</div>
        <div class="button">
          <img src="http://www.w3.org/2000/svg" alt="" />
          <button>♡加入願望清單</button>
        </div>
        <div class="divider"></div>
        <div class="introduce">
          <div class="title">膚質感受</div>
          <div class="info">清潔、清爽</div>
          <div class="useDivider"></div>
          <div class="title">香氛</div>
          <div class="info">柑橘、清新</div>
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
    <div class="swiper-container">
      <Swiper
        :slidesPerView="4"
        :spaceBetween="0"
        :loop="true"
        :centeredSlides="true"
        :pagination="pagination"
        :autoplay="{ delay: 2000, disableOnInteraction: false }"
        :navigation="true"
        :modules="modules"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="(item, index) in swiperList" :key="index"
          ><img :src="item.src"
        /></SwiperSlide>
        <button @click="handleClick">click</button>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue' // swiper 所需组件
import { Navigation, Pagination, Scrollbar, Autoplay, Virtual, EffectFade } from 'swiper/modules'
// import 'swiper/swiper-bundle.css'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/effect-fade'
const handleClick = () => {
  swiperEl.slideNext()
}
let swiperEl = null
function onSwiper(swiper) {
  swiperEl = swiper
}
const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    console.log(className, 'className')
    return `<div class="nav-item" > </item>`
  }
}      
const modules = [Navigation, Pagination, Scrollbar, Autoplay, Virtual, EffectFade]
const swiperList = [
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/6F4yhB0VHb1QuCYGfJ6XVf/806de4084613817a14e46774b7c3b6c1/Aesop_Body_Rejuvenate_Intensive_Body_Balm_100mL_Web_Front_Large_900x1037px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/47vTlo7LEvs0jKwRjhgCxW/0af092fee3c9670b7bdfcf38a2339583/Aesop_Body_Geranium_Leaf_Hydrating_Body_Treatment_100mL_Web_Back_X-Large_3000x3054px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/2g3P3t7grTf9tS2ELzABOf/c0139036ed7ebf790bc26cd1200392ba/Aesop_Home_Beatrice_Oil_Burner_Blend_25mL_Web_Back_Large_900x878px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/2IHPWR79G0XhnFcc1bmhSd/e4c871edf6ce31a10d22bd98b49cf9b4/Aesop_Home_Olous_Aromatique_Room_Spray_100mL_Web_Back_X-Large_3000x3456px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/2g3P3t7grTf9tS2ELzABOf/c0139036ed7ebf790bc26cd1200392ba/Aesop_Home_Beatrice_Oil_Burner_Blend_25mL_Web_Back_Large_900x878px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/1GTKJ1EvgHnUwNZyLskxJE/fa49e741617a4ac24c5ccddbcfe4a5b4/Aesop_Body_Geranium_Leaf_Hydrating_Body_Treatment_100mL_Web_Front_Large_900x916px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/6F4yhB0VHb1QuCYGfJ6XVf/806de4084613817a14e46774b7c3b6c1/Aesop_Body_Rejuvenate_Intensive_Body_Balm_100mL_Web_Front_Large_900x1037px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/47vTlo7LEvs0jKwRjhgCxW/0af092fee3c9670b7bdfcf38a2339583/Aesop_Body_Geranium_Leaf_Hydrating_Body_Treatment_100mL_Web_Back_X-Large_3000x3054px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/2g3P3t7grTf9tS2ELzABOf/c0139036ed7ebf790bc26cd1200392ba/Aesop_Home_Beatrice_Oil_Burner_Blend_25mL_Web_Back_Large_900x878px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/2IHPWR79G0XhnFcc1bmhSd/e4c871edf6ce31a10d22bd98b49cf9b4/Aesop_Home_Olous_Aromatique_Room_Spray_100mL_Web_Back_X-Large_3000x3456px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/2g3P3t7grTf9tS2ELzABOf/c0139036ed7ebf790bc26cd1200392ba/Aesop_Home_Beatrice_Oil_Burner_Blend_25mL_Web_Back_Large_900x878px.png'
  },
  {
    src: 'https://www.aesop.com/u1nb1km7t5q7/1GTKJ1EvgHnUwNZyLskxJE/fa49e741617a4ac24c5ccddbcfe4a5b4/Aesop_Body_Geranium_Leaf_Hydrating_Body_Treatment_100mL_Web_Front_Large_900x916px.png'
  }
]
</script>

<style lang="scss" scoped>
.container {
  background-color: #fffef2;
  width: auto;
  .productWrapper {
    display: flex;
    width: auto;
    .productPic {
      img {
        width: 500px;
        margin-left: 750px;
        padding: 100px;
      }
    }
    .productInfo {
      width: 25%;
      margin-left: auto;
      margin-right: 150px;
      .name {
        font-size: 26px;
        font-weight: 600;
        padding: 20px 0px;
      }
      .directions {
        padding: 10px 0px;
        font-size: 20px;
        display: flex;
        flex-wrap: wrap;
      }
      .capacity {
        padding: 10px 0px;
        font-size: 18px;
        input {
          margin: 10px 0px 20px 0px;
          padding-right: 20px;
        }
      }
      .carshop {
        border-color: #333;
        background-color: #333;
        color: #f6f5e8;
        padding: 20px 15px;
        width: 100%;
        font-size: 20px;
        line-height: 1.6;
      }
      button {
        font-size: 18px;
        border: none;
        margin: 20px 0px;
        background-color: #f5f4e9;
        cursor: pointer;
        transition: box-shadow 0.5s ease;
      }
      .divider {
        border: #333 solid 1px;
      }
      .introduce {
        padding: 20px 0px;
        .title {
          font-size: 22px;
          font-weight: 400;
          padding: 14px 0px;
        }
        .info {
          color: #6c6c6c;
          font-size: 18px;
          border-bottom: 1px solid #d5d4c9;
          padding-bottom: 14px;
          display: flex;
          align-items: center;
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
    .section {
      margin: 10px 10px;
      width: 600px;
      height: auto;
      img {
        width: 30px;
        padding: 10px;
      }
      .mainTitle {
        font-size: 24px;
        font-weight: 600;
      }
      p {
        font-size: 20px;
        color: #6c6c6c;
      }
    }
  }
  .UsageWrapper {
    width: auto;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    background-color: #f5f4e9;
    .productPic {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      margin-right: auto;
    }
    .way {
      width: 50%;
      margin: auto;
      padding: 150px 0px;

      .howToUse {
        font-size: 20px;
      }
      p {
        font-size: 24px;
      }
      .useDivider {
        border: #333 solid 1px;
        width: 100%;
        margin: 10px 0px 20px 0px;
      }
      .title {
        font-size: 20px;
        font-weight: 500;
      }
      .info {
        font-size: 18px;
        color: #6c6c6c;
      }
      .divider {
        border: 1px solid #d5d4c9;
        width: 100%;
        margin: 20px 0px;
      }
    }
  }
  .swiper-container {
    height: 500px;
    padding: 50px 0;
    img {
      width: 450px;
      height: 500px;
    }
    .nav-item {
      background: red;
    }
    :deep(.swiper-button-next) {
      color: black;
    }
  }
}
</style>
