<template>
  <div class="login-dialogue" v-if="isShow">
    <div class="closed">
      <button @click="uiStore.hideLoginPopup">Ｘ</button>
    </div>
    <div class="wrapper">
      <div class="loginTitle">登入您的帳號</div>
      <div class="email">電子郵件</div>
      <input type="email" v-model="email" name="email" placeholder="輸入您的電子郵件" />
      <div class="password">密碼</div>
      <input type="password" v-model="password" name="password" placeholder="輸入密碼" />
      <div class="loginButton">
        <button @click="loginWithEmail">登入</button>
      </div>
      <div class="loginButton">
        <button @click="loginWithGoogle">google登入</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { useUiStore } from '@/stores/ui'

const uiStore = useUiStore();
const uiRefStore = storeToRefs(uiStore);
const isShow = uiRefStore.loginPopup;
const email = ref('')
const password = ref('')
const name = ref('')


const authStore = useAuthStore()

function loginWithEmail() {
  authStore.signUpWithEmail(email.value, password.value, name.value)
}

function loginWithGoogle() {
  authStore.signInWithGoogle()
}

</script>

<style lang="scss" scoped>
.login-dialogue {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: $color-4;
  width: 500px;
  height: 800px;
  z-index: 1;

  @include phone {
    width: 350px;
    height: 500px;
    transform: translateX(-50%);
  }
  .closed {
    button {
      cursor: pointer;
      margin: 20px 0px 0px 450px;
      border-style: none;
      background-color: $color-4;
      font-size: 22px;
      @include phone {
        margin: 20px 0px 0px 300px;
      }
    }
  }
  .wrapper {
    font-family: sans-serif;
    padding: 50px;
    text-align: start;
    @include phone {
      padding: 20px;
    }
    .loginTitle {
      font-size: 26px;
      padding: 50px 0px;
      @include phone {
        font-size: 20px;
        padding: 20px 0px;
      }
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
      background-color: $color-4;
      height: 30px;
      border: none;
      border-bottom: 1px solid $color-10;
    }
    .loginButton {
      button {
        // margin: 50px 0px;
        margin-bottom: 20px;
        width: 100%;
        height: 50px;
        padding: 10px 0px;
        background-color: $color-11;
        color: $color-1;
      }
    }
    .register {
      p {
        color: $color-3;
      }
      button {
        margin: 50px 0px;
        width: 100%;
        height: 50px;
        padding: 10px 0px;
        background-color: $color-4;
        color: $color-11;
        @include phone {
          margin: 20px 0px;
        }
      }
    }
  }
}
</style>
