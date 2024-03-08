<template>
  <div class="container">
    <div class="contact_wrapper">
      <div class="icon">
        <img src="@/assets/img/icon/LOGO.png" />
      </div>
      <div class="contact">
        <div class="contactus">聯絡我們</div>
        <p>
          我們很高興與您分享，您將可以在舒適的家中，與顧問預約視訊諮詢服務。根據您的獨特需求，我們將為您量身打造這項服務──其中可能包含送禮的建議、您的肌膚保養推薦，或者關於個人或家居香氛配方的選擇──我們的顧問將進行產品示範，與您分享使用方法及技巧，並提供您專屬的個人化建議。
        </p>
        <p>
          預約視訊諮詢不須收費，每場視訊諮詢為 30
          分鐘，讓我們有足夠時間深入討論您有興趣的主題。我們提供中文服務，您可以透過電腦、平板、手機等裝置進行線上視訊諮詢服務。請確保您有穩定的網路連接。
        </p>
      </div>
    </div>
    <div class="contactWay_wrapper">
      <div class="video">
        <div class="title">視訊諮詢</div>
        <div class="subtitle">
          比起以往，許多人必須花更多的時間待在家中，因此我們希望線上諮詢的方式，能為您帶來和店鋪相同的體驗。我們非常期待以這種嶄新的形式與您見面，並歡迎您與我們分享任何回饋。
        </div>
        <a href="https://www.example.com">立即開始</a>
      </div>
      <div class="mail">
        <div class="title">寄信給我們</div>
        <div class="subtitle">在採購或保養上有任何問題，都可以透過郵件跟我們聊聊唷．</div>
        <a href="mailto:info@example.com">立即傳送</a>
      </div>
      <div class="phone">
        <div class="title">諮詢專線</div>
        <div class="subtitle">歡迎撥打諮詢專線，將由專人為您服務。</div>
        <a href="tel:+1234567890">立即撥打</a>
      </div>
    </div>
    <div class="imgWrapper">
      <img
        src="https://www.aesop.com/u1nb1km7t5q7/66KUvlCYfGi1ySgU3fem4d/3de02a5b0f130223a81253e8d7680f4a/Aesop-Live-1-1-Consultations-Banner-AU-Desktop-2880x940px.jpg"
        alt="" />
    </div>
  </div>
</template>

<script setup>
window.scrollTo(0, 0);
window.scrollTo({
  top: 0,
  behavior: "smooth"
});

</script>


<style lang="scss" scoped>
.container {
  background-color: $color-1;

  .contact_wrapper {
    width: 100%;
    height: auto;
    background-color: $color-4;
    display: flex;
    justify-content: center;
    padding-top: 50px;

    .icon {
      top: 90px;
      left: 65px;
      margin: 50px 0px 50px 50px;
      overflow: hidden;

      img {
        object-fit: contain;
      }
    }

    .contact {
      width: 50%;
      height: auto;
      text-align: start;
      margin: 50px;

      .contactus {
        font-size: 30px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  .contactWay_wrapper {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    margin-top: 100px;

    .video {
      width: 300px;
      height: 300px;
      margin: 20px 20px 20px 20px;

      @include pad {
        margin: 10px 10px 10px 10px;
      }

      .title {
        font-size: 25px;
        padding-bottom: 20px;
        position: relative;
      }

      .title::before {
        content: "";
        display: block;
        border-left: 5px solid #252525;
        height: 25px;
        position: absolute;
        left: -20px;
        top: 9px;
      }

      .subtitle {
        font-size: 18px;
        padding-bottom: 20px;
      }

      a {
        font-size: 16px;
        text-decoration: none;
        color: $color-11;
        display: flex;
        justify-content: center;
        width: 250px;
        height: auto;
        border: solid 1px $color-11;
        position: relative;
        top: 50px;
        transition: width 1s, height 1s, background-color 1s;
        padding: 10px 20px;

        &:hover {
          background-color: $color-11;
          color: $color-2;
        }
      }
    }

    .mail {
      width: 300px;
      height: 300px;
      margin: 20px 20px 20px 20px;

      @include pad {
        margin: 10px 10px 10px 10px;
      }

      .title {
        font-size: 25px;
        padding-bottom: 20px;
        position: relative;
      }

      .title::before {
        content: "";
        display: block;
        border-left: 5px solid #252525;
        height: 25px;
        position: absolute;
        left: -20px;
        top: 9px;
      }

      .subtitle {
        font-size: 18px;
        padding-bottom: 20px;
      }

      a {
        font-size: 16px;
        text-decoration: none;
        color: $color-11;
        display: flex;
        justify-content: center;
        width: 250px;
        height: auto;
        border: solid 1px $color-11;
        position: relative;
        top: 150px;
        transition: width 1s, height 1s, background-color 1s;
        padding: 10px 20px;

        &:hover {
          background-color: $color-11;
          color: $color-2;
        }
      }
    }

    .phone {
      width: 300px;
      height: 300px;
      margin: 20px 20px 20px 20px;

      @include pad {
        margin: 10px 10px 10px 10px;
      }

      .title {
        font-size: 25px;
        padding-bottom: 20px;
        position: relative;
        /* 將 .title 設置為相對定位的父元素 */
      }

      .title::before {
        content: "";
        display: block;
        border-left: 5px solid #252525;
        height: 25px;
        position: absolute;
        left: -20px;
        top: 9px;
      }

      .subtitle {
        font-size: 18px;
        padding-bottom: 20px;
      }

      a {
        font-size: 16px;
        text-decoration: none;
        color: $color-11;
        display: flex;
        justify-content: center;
        width: 250px;
        height: auto;
        border: solid 1px $color-11;
        position: relative;
        top: 150px;
        transition: width 1s, height 1s, background-color 1s;
        padding: 10px 20px;

        &:hover {
          background-color: $color-11;
          color: $color-2;
        }
      }
    }
  }

  .imgWrapper {
    margin-top: 100px;

    img {
      width: 100%;
      height: 600px;
      object-fit: cover;
    }
  }
}
</style>
