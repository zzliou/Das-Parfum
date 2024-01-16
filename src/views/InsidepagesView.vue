<template>
  <div class="container">
    <div class="productWrapper">
      <div class="productPic">
        <img src="" alt="" />
      </div>
      <div class="productInfo">
        <div class="name">苦橙香檸身體潔膚露</div>
        <div class="directions">
          這款性質溫和的低泡沫潔膚凝露含有多種淨化肌膚的植物萃取物，可清潔肌膚，散發充滿活力的柑橘芳香。
        </div>
        <div class="capacity">容量</div>
        <div>
          <input type="radio" id="contactChoice1" name="contact" value="100ml" />
          <label for="contactChoice1">100ml</label>
          <input type="radio" id="contactChoice2" name="contact" value="500ml" />
          <label for="contactChoice2">500ml</label>
        </div>
        <div class="carshop">添加至購物車</div>
        <button>加入願望清單</button>
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
        <div class="freePack">免費禮品包裝</div>
        <p>為您提供禮品包裝、品牌專屬棉袋以及個人化禮物小卡服務，是我們的榮幸。</p>
      </div>
      <div class="section">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/4Wb7WJo1Hhqg95v6CZKEE9/5e8d64187475757f59138ba10479b51a/chat-bubble.svg"
          alt=""
        />
        <div class="customerService">諮詢美容顧問</div>
        <p>我們受過專業訓練的顧問，非常樂意在線上為您提供個人化的產品建議。</p>
      </div>
      <div class="section">
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/3ZHAFYCvLBqAKjXfINVH1q/acff0cee6551b41d62d3a75c1e9c2780/droplet.svg"
          alt=""
        />
        <div class="package">下單送試用包</div>
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
      <div class="howToUse">使用方式</div>
      <P>倒在手中或海綿上。按摩全身濕潤的肌膚，然後徹底洗淨。</P>
      <div class="useDivider"></div>
      <div class="title">用量</div>
      <div class="info">倒在手掌上約一個十元硬幣大小</div>
      <div class="useDivider"></div>
      <div class="texture">質地</div>
      <div class="textureInfo">低泡沫透明凝露</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  background-color: #faf8f5;
  width: auto;
  .productWrapper {
    display: flex;
    width: auto;
    .productPic {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
    .productInfo {
      width: 500px;
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
      }
      input {
        padding: 10px 0px;
        font-size: 18px;
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
          color: #6C6C6C;
          font-size: 18px;
          border-bottom: 1px solid #d5d4c9;
          padding-bottom: 14px;
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
