<template>
  <div class="container">
    <div class="contact_wrapper">
      <div class="icon">
        <img src="@/assets/img/icon/LOGO.png" />
      </div>
      <div class="contact">
        <div class="contactus">聯絡我們</div>
        <p>
          你可以在家裡舒服地預約視訊諮詢服務。我們會根據你的需求量身打造服務，可能包括送禮建議、肌膚保養推薦，或是挑選個人或家居香氛。我們的顧問會示範產品，和你分享使用方法，還有提供專屬的個人建議
        </p>
        <p>
          預約視訊諮詢完全免費！每次約定都有30分鐘的時間，讓我們能夠好好討論您想討論的肌膚問題，歡迎利用電腦、平板或手機上開展線上視訊諮詢。記得要確保你的網路連接穩定喔！
        </p>
      </div>
    </div>
    <div class="contactWay_wrapper">
      <div class="video">
        <div class="title">視訊諮詢</div>
        <div class="subtitle">
          我們想透過網路諮詢，給你帶來跟實體店一樣的感受，期待以全新的方式與您見面！
        </div>
        <a href="https://www.example.com">立即開始</a>
      </div>
      <div class="mail">
        <div class="title">寄信給我們</div>
        <div class="subtitle">在選購或保養上有任何問題，都可以透過郵件跟我們聊聊唷．</div>
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
      margin: 20px 30px 20px 30px;
      box-sizing: border-box;

      @include mac {
        margin: 10px 20px 10px 20px;
      }

      @include pad {
        margin: 10px 10px 10px 10px;
      }

      .title {
        font-size: 25px;
        padding: 0px 0px 20px 20px;
        position: relative; 

        @include mac {
          font-size: 20px;
        }

        @include pad {
          font-size: 20px;
        }
      }

      .title::before {
        content: "";
        display: block;
        border-left: 5px solid #252525;
        height: 25px;
        position: absolute;
        left: 8px;
        top: 4px;
      }

      .subtitle {
        font-size: 18px;
        padding: 0px 20px;

        @include mac {
          font-size: 16px;
        }

        @include pad {
          font-size: 16px;
        }
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
        top: 120px;
        transition: width 1s, height 1s, background-color 1s;
        padding: 10px 20px;

        &:hover {
          background-color: $color-11;
          color: $color-2;
        }

        @include mac {
        top: 53px;
        }
      }
    }

    .mail {
      width: 300px;
      height: 300px;
      margin: 20px 30px 20px 30px;

      @include mac {
        margin: 10px 20px 10px 20px;
      }

      @include pad {
        margin: 10px 10px 10px 10px;
      }

      .title {
        font-size: 25px;
        padding: 0px 0px 20px 20px;
        position: relative;

        @include mac {
          font-size: 20px;
        }

        @include pad {
          font-size: 20px;
        }
      }

      .title::before {
        content: "";
        display: block;
        border-left: 5px solid #252525;
        height: 25px;
        position: absolute;
        left: 8px;
        top: 4px;
      }

      .subtitle {
        font-size: 18px;
        padding: 0px 20px;

        @include mac {
          font-size: 16px;
        }

        @include pad {
          font-size: 16px;
        }
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

        @include mac {
          top: 75px;
        }

        @include pad {
          top: 50px;
        }
      }
    }

    .phone {
      width: 300px;
      height: 300px;
      margin: 20px 20px 20px 20px;

      @include mac {
        margin: 10px 20px 10px 20px;
      }

      @include pad {
        margin: 10px 10px 10px 10px;
      }

      .title {
        font-size: 25px;
        padding: 0px 0px 20px 20px;
        position: relative;
        @include mac {
          font-size: 20px;
        }

        @include pad {
          font-size: 20px;
        }
      }

      .title::before {
        content: "";
        display: block;
        border-left: 5px solid #252525;
        height: 25px;
        position: absolute;
        left: 8px;
        top: 4px;
      }

      .subtitle {
        font-size: 18px;
        padding: 0px 20px;

        @include mac {
          font-size: 16px;
        }

        @include pad {
          font-size: 16px;
        }
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

        @include mac {
          top: 73px;
        }

        @include pad {
          top: 29px;
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
    
    @include mac {
      margin-top: 0px;
      img {
        height: 400px;
      }
    }

    @include pad {
      margin-top: 0px;
      img {
        height: 400px;
      }
    }

  }
}
</style>
