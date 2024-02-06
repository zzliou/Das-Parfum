<template>
  <div class="container">
    <div class="imgWrapper">
      <img src="https://www.aesop.com/u1nb1km7t5q7/66KUvlCYfGi1ySgU3fem4d/3de02a5b0f130223a81253e8d7680f4a/Aesop-Live-1-1-Consultations-Banner-AU-Desktop-2880x940px.jpg" alt="">
    </div>
    <div class="contact_wrapper">
      <div class="icon"></div>
      <div class="contact">
        <h2>聯絡我們</h2>
        <p>我們很高興與您分享，您將可以在舒適的家中，與 Aesop 顧問預約視訊諮詢服務。根據您的獨特需求，我們將為您量身打造這項服務──其中可能包含送禮的建議、您的肌膚保養推薦，或者關於個人或家居香氛配方的選擇──我們的顧問將進行產品示範，與您分享使用方法及技巧，並提供您專屬的個人化建議。</p>
        <p>預約視訊諮詢不須收費，每場視訊諮詢為 30 分鐘，讓我們有足夠時間深入討論您有興趣的主題。我們提供中文服務，您可以透過電腦、平板、手機等裝置進行線上視訊諮詢服務。請確保您有穩定的網路連接。</p>
      </div>
    </div>
    <div class="contactWay_wrapper">
      <div class="video">
       <h2>線上視訊諮詢</h2>
       <p>比起以往，許多人必須花更多的時間待在家中，因此我們希望線上諮詢的方式，能為您帶來和店鋪相同的體驗。我們非常期待以這種嶄新的形式與您見面，並歡迎您與我們分享任何回饋。</p>
      </div>
      <div class="form">
        <h2>填寫表單</h2>
        <p>歡迎填寫諮詢表單，並留下您的聯絡資訊，將由專業的顧問與您聯繫。</p>
      </div>
      <div class="phone">
        <h2>撥打諮詢專線</h2>
        <p>歡迎撥打0800-000-123諮詢專線，將由專人為您服務。</p>
      </div>
    </div>
    
    <!-- <div class="first-title">
      <h2>聯絡我們</h2>
      <p>您可撥打服務專線或透過下方表單填寫與我們聯繫。</p>
    </div>
    <div class="block">
      <div class="phoneWrapper">
        <div class="phoneTitle">聯絡方式</div>
        <div class="divider"></div>
        <div class="phone">
          <div class="phoneText">服務專線:</div>
          <div class="number">0800-007-909</div>
        </div>
      </div>
      <div class="messageWapper">
        <div class="messageTitle">留言給我們</div>
        <div class="divider"></div>
        <div class="input-text">資料</div>
        <div class="inputGroup">
          <div class="lastname"><input type="text" name="username" placeholder="姓" /></div>
          <div class="firstname"><input type="text" name="username" placeholder="名" /></div>
          <div class="email">
            <input type="email" name="user_email" placeholder="輸入您的email" />
          </div>
          <div class="phonenumber">
            <input type="tel" name="user_phone" placeholder="輸入您的手機號碼" />
          </div>
        </div>
        <div class="input-message">留言</div>
        <textarea name="user_message" rows="4" cols="50" placeholder="留下想對我們說的話"></textarea>
        <div class="button">
          <button type="submit">
            <span>送出</span>
          </button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  background-color: #fffef2;
  font-family: sans-serif;
  .imgWrapper {
    width: 100%;
    object-fit: contain;
  }
  .contact_wrapper {
    width: 100%;
    height: auto;
    background-color: #dad9cf;
    display: flex;
    justify-content: center;
    .contact {
      width: 50%;
      height: auto;
      text-align: start;
      margin: 50px;
    }
    .online-service {
      font-size: 22px;
      text-align: start;
      padding: 50px;
    }
    p {
      font-size: 16px;
    }
  }

//   .first-title {
//     text-align: center;
//     h2 {
//       font-size: 50px;
//     }
//     p {
//       margin-bottom: 100px;
//       font-size: 25px;
//     }
//   }
//   .block {
//     display: flex;
//     justify-content: center;
//   }
//   .phoneWrapper {
//     width: 600px;
//     height: 600px;
//     margin-right: 50px;
//     .phoneTitle {
//       font-size: 25px;
//       font-weight: 500;
//       margin-bottom: 20px;
//     }
//     .divider {
//       width: 100%;
//       border-bottom: #d5d4c9 solid 1px;
//     }
//     .phone {
//       display: flex;
//       font-size: 20px;
//       margin: 20px auto 20px 0px;
//     }
//   }
//   .messageWapper {
//     width: 600px;
//     height: 600px;
//     .messageTitle {
//       font-size: 25px;
//       font-weight: 500;
//       margin-bottom: 20px;
//     }
//     .divider {
//       width: 100%;
//       border-bottom: #d5d4c9 solid 1px;
//     }
//     .input-text {
//       font-size: 20px;
//       font-weight: 500;
//       margin: 20px auto 20px 0px;
//     }
//     .inputGroup {
//       display: flex;
//       flex-wrap: wrap;
//       margin-bottom: 50px;
//       font-size: 20px;
//     }
//     .lastname {
//       height: 40px;
//       width: 200px;
//       bottom: 0;
//       padding: 0 16px;
//       border-color: #3827204d;
//     }
//     .firstname {
//       height: 40px;
//       width: 200px;
//       bottom: 0;
//       padding: 0 16px;
//       border-color: #3827204d;
//     }
//     .email {
//       height: 40px;
//       width: 200px;
//       bottom: 0;
//       padding: 0 16px;
//       border-color: #3827204d;
//     }
//     .phonenumber {
//       height: 40px;
//       width: 200px;
//       bottom: 0;
//       padding: 0 16px;
//       border-color: #3827204d;
//     }
//     .input-message {
//       font-size: 20px;
//       font-weight: 500;
//       margin: 20px auto 20px 0px;
//     }
//     .button {
//       .submit {
//       width: 180px;
//       height: 40px;
//       background-color: #382720;
//       color: white;
//       font-size: 16px;
//       margin: 50px auto 0px 0px;
//     }
//     }
//   }
// }
}
</style>
