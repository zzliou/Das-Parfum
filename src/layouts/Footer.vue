<template>
  <div class="footer">
    <div class="wrapper">
      <div class="aboutme">
        <p>關於</p>
        <div class="divider"></div>
        <div class="contactus">
          <a @click="goToContact">聯絡我們</a>
        </div>
        <div class="location">
          <RouterLink to="/shop">實體店鋪</RouterLink>
        </div>
      </div>
      <div class="social-media">
        <p>社群媒體</p>
        <div class="divider"></div>
        <div class="section">
          <img :src="facebook" alt="" />
        </div>
        <div class="section">
          <img :src="instagram" alt="" />
        </div>
        <div class="section">
          <img :src="line" alt="" />
        </div>
      </div>
      <div class="designby">
        <p>©︎ 2023 ALLESGUTE</p>
        <p>SITE BY ZIZILIOU</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import facebook from '@/assets/img/facebook.png'
import instagram from '@/assets/img/instagram.png'
import line from '@/assets/img/line.png'
import { useRouter } from 'vue-router'
const router = useRouter()
function goToContact() {
  router.push('/contact')
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #252525;
  .wrapper {
    display: flex;
    justify-content: space-evenly;
  }
  .aboutme {
    color: #f5f4e9;
    width: 300px;
    height: 300px;
    font-size: 24px;
    .divider {
      width: 100%;
      border-bottom: #f5f4e9 1px solid;
      margin: 5px 0px;
    }
    a {
      color: #f5f4e9;
      font-size: 20px;
      text-decoration: none;
    }
    .contactus {
      margin: 10px 0px;
    }
    .location {
      margin: 10px 0px;
    }
  }
  .social-media {
    color: #f5f4e9;
    width: 300px;
    height: 300px;
    font-size: 24px;
    img {
      width: 30px;
      height: 30px;
      margin: 10px 10px;
    }
    .section {
      display: inline-block;
      margin: 10 px 5px;
    }
    .divider {
      width: 100%;
      border-bottom: #f5f4e9 1px solid;
      margin: 5px 0px;
    }
  }
  .designby {
    color: #f5f4e9;
    width: 300px;
    height: 200px;
    font-size: 16px;
    padding-top: 10px;
  }
}
</style>
