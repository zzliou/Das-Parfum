<template>
  <div class="container">
    <div class="contact_wrapper">
      <div class="icon"></div>
      <div class="contact">
        <div class="contactus">聯絡我們</div>
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
    <div class="imgWrapper">
      <img src="https://www.aesop.com/u1nb1km7t5q7/66KUvlCYfGi1ySgU3fem4d/3de02a5b0f130223a81253e8d7680f4a/Aesop-Live-1-1-Consultations-Banner-AU-Desktop-2880x940px.jpg" alt="">
    </div>
  </div>
</template>
 
<script setup></script>

<style lang="scss" scoped>
.container {
  background-color: #fffef2;
  font-family: sans-serif;

  .contact_wrapper {
    width: 100%;
    height: auto;
    background-color: #f6f5e8;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    .contact {
      .contactus {
        font-size: 30px;
      }
      width: 50%;
      height: auto;
      text-align: start;
      margin: 50px;
      p {
        font-size: 14px;
      }
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
  .imgWrapper {
    width: 100%;
    height: 300px;
    object-fit: contain;   
  }
}
</style>
