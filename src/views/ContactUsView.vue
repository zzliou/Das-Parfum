<template>
  <div class="container">
    <div class="first-title">
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
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  background-color: #faf8f5;
  .first-title {
    text-align: center;
    h2 {
      font-size: 50px;
    }
    p {
      margin-bottom: 100px;
      font-size: 25px;
    }
  }
  .block {
    display: flex;
    justify-content: center;
  }
  .phoneWrapper {
    width: 600px;
    height: 600px;
    margin-right: 50px;
    .phoneTitle {
      font-size: 25px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    .divider {
      width: 100%;
      border-bottom: #d5d4c9 solid 1px;
    }
    .phone {
      display: flex;
      font-size: 20px;
      margin: 20px auto 20px 0px;
    }
  }
  .messageWapper {
    width: 600px;
    height: 600px;
    .messageTitle {
      font-size: 25px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    .divider {
      width: 100%;
      border-bottom: #d5d4c9 solid 1px;
    }
    .input-text {
      font-size: 20px;
      font-weight: 500;
      margin: 20px auto 20px 0px;
    }
    .inputGroup {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 50px;
      font-size: 20px;
    }
    .lastname {
      height: 40px;
      width: 200px;
      bottom: 0;
      padding: 0 16px;
      border-color: #3827204d;
    }
    .firstname {
      height: 40px;
      width: 200px;
      bottom: 0;
      padding: 0 16px;
      border-color: #3827204d;
    }
    .email {
      height: 40px;
      width: 200px;
      bottom: 0;
      padding: 0 16px;
      border-color: #3827204d;
    }
    .phonenumber {
      height: 40px;
      width: 200px;
      bottom: 0;
      padding: 0 16px;
      border-color: #3827204d;
    }
    .input-message {
      font-size: 20px;
      font-weight: 500;
      margin: 20px auto 20px 0px;
    }
    .button {
      .submit {
      width: 180px;
      height: 40px;
      background-color: #382720;
      color: white;
      font-size: 16px;
      margin: 50px auto 0px 0px;
    }
    }
  }
}
</style>
