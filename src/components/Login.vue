<template>
  <div class="login-dialogue" v-if="isShow">
    <div class="closed">
      <button @click="hide">Ｘ</button>
    </div>
    <div class="wrapper">
      <div class="loginTitle">登入您的帳號</div>
      <div class="email">電子郵件</div>
      <input type="email" name="email" placeholder="輸入您的電子郵件" />
      <div class="password">密碼</div>
      <input type="password" name="password" placeholder="輸入密碼" />
      <div class="loginButton">
        <input type="submit" value="登入" />
      </div>
      <div class="register">
        <h3>還沒有Aesop帳戶?</h3>
        <p>
          在建立 Aesop
          帳戶後，您可以將喜愛的產品收藏至願望清單中，也能查看訂單歷史紀錄，並輕鬆享有快速結帳功能。
        </p>
        <div class="register">
          <button>註冊</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineExpose, ref } from 'vue'
defineProps(['title'])
let isShow = ref(false)
function show() {
  isShow.value = true
}
function hide() {
  isShow.value = false
}
defineExpose({
  show: show,
  hide: hide
})
</script>

<style lang="scss" scoped>
.login-dialogue {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #faf8f5;
  width: 500px;
  height: 800px;
  z-index: 1;
  .closed {
    button {
      cursor: pointer;
      margin: 20px 0px 0px 450px;
      border-style: none;
      background-color: #faf8f5;
      font-size: 22px;
    }
  }
  .wrapper {
    font-family: sans-serif;
    padding: 50px;
    text-align: start;
    .loginTitle {
      font-size: 26px;
      padding: 50px 0px;
    }
    .email {
      font-size: 16px;
      padding: 10px 0px;
    }
    .password {
      font-size: 16px;
      padding: 10px 0px;
    }
    input {
      width: 100%;
      background-color: #faf8f5;
      height: 30px;
      border: none;
      border-bottom: 1px solid #a09f9b;
    }
    .loginButton {
      input {
        margin: 50px 0px;
        width: 100%;
        height: 50px;
        padding: 10px 0px;
        background-color: #333333;
        color: #faf8f5;
      }
    }
    .register {
      p {
        color: #c3c3bb;
      }
      button {
        margin: 50px 0px;
        width: 100%;
        height: 50px;
        padding: 10px 0px;
        background-color: #faf8f5;
        color: #333333;
      }
    }
  }
}
</style>
