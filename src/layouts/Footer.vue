<template>
  <div class="footer">
    <div class="container">
      <div class="subscribe_wrapper">
       <div class="booking">訂閱電子報</div>
       <div class="divider"></div>
       <div class="email">
        <input type="email">
        <button> → </button>
       </div>
       <div class="check">
        <input type="checkbox" id="blue" name="color" value="blue">
        <p>訂閱電子報，讓我們提供您最新的相關資訊。若您選擇訂閱，即表示您已閱讀並了解我們的隱私權政策。</p>
       </div>
      </div>
      <div class="wrapper">
        <div class="mainTitle">訂單與諮詢</div>
        <div class="divider"></div>
        <div class="contact">
          <RouterLink to="/contact">聯絡我們↗</RouterLink>
        </div>
        <p>常見問答</p>
        <p>寄送規則</p>
        <p>我要退貨</p>
        <p>訂單查詢</p>
      </div>
      <div class="wrapper">
        <div class="mainTitle">服務</div>
        <div class="divider"></div>
        <p>企業贈禮</p>
        <p>線上客服</p>
        <p>預約保養</p>
      </div>
      <div class="wrapper">
        <div class="mainTitle">所在區域</div>
        <div class="divider"></div>
        <p>地點：台灣</p>
        <p>語言：繁體中文</p>
      </div>
      <div class="eco_wrapper">
        <div class="mainTitle">環境永續性</div>
        <div class="divider"></div>
        <p>所有產品均為天然純素，且所有成分未進行動物測試實驗。我們是一間擁有跳躍小兔（Leaping Bunny）與 B 型共益企業（B Corporation）認證的公司。 了解更多</p>
      </div>
      <div class="wrapper">
        <div class="mainTitle">關於我們</div>
        <div class="divider"></div>
        <p>品牌故事</p>
        <p>招聘人才</p>
        <p>隱私權政策</p>
      </div>
      <div class="wrapper">
        <div class="mainTitle">社群媒體</div>
        <div class="divider"></div>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goToContact() {
  router.push('/contact')
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: auto;
  .container {
    background-color: $color-11;
    color: $color-10;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    font-family: sans-serif;
    font-size: 16px;
    padding: 50px 40px;

    @include phone {
      font-size: 12px;
      padding: 20px;
      // display: inline-block;
    }
    .subscribe_wrapper {
      padding: 25px;
      width: 20%;
      height: 250px;
      text-align: start;
      @include pad {
        padding: 10px;
      }
      @include phone {
        width: auto;
        height: 220px;
      }
      .divider {
        border: $color-10 1px solid;
        width: 100%;
        margin: 10px 0px 20px 0px;
      }
      .booking {
        font-size: 16px;
        padding: 10px 0px;
      }
      .email {
        display: flex;
        input {
        width: 60%;
        padding: 10px 0px;
      }
        button {
          background-color: $color-11;   
          color: $color-10;
        }
      }
      .check {
        display: flex;
        p {
          font-size: 16px;
        }
        input {
          margin-right: 30px;
        }
      }
    }
    .wrapper {
      width: 20%;
      height: 250px;
      padding: 25px;
      text-align: start;
      @include pad {
        padding: 10px;
      }
      @include phone {
       display: none;
      }
      .mainTitle {
        padding: 10px 0px;
      }
      .divider {
        border: $color-10 1px solid;
        width: 100%;
        margin: 10px 0px 20px 0px;
      }

    }
    .eco_wrapper {
      padding-top: 50px;
      margin-right: 25px;
      width: 40%;
      height: 250px;
      text-align: start;
      .divider {
        border: $color-10 1px solid;
        width: 100%;
        margin: 10px 0px 20px 0px;
      }
      @include phone {
       display: none;
      }
    }
      .contact {
        a {
        text-decoration: none;
        color: $color-10;
        &:hover {
          cursor: pointer;
        }
        }
      }
  }
}
</style>
