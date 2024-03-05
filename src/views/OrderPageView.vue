<template>
  <div class="container">
    <div class="oderList">
      <div class="mainTitle">
        <h2>查看本次訂單</h2>
      </div>
      <div class="orderWrapper">
        <div class="divider"></div>
        <div class="listWrapper">
          <div class="item">商品名稱</div>
          <div class="item">數量</div>
          <div class="item">單價</div>
          <div class="item">小計</div>
        </div>
        <div class="dividerLiter"></div>
        <div class="listWrapper">
          <div class="detail">XXX</div>
          <div class="detail">XXX</div>
          <div class="detail">XXX</div>
          <div class="detail">XXX</div>
        </div>
        <div class="dividerLiter"></div>
        <div class="totalPrice">
          <div class="title">總計金額</div>
          <div class="number">XXX</div>
        </div>
        <div class="divider"></div>
      </div>
      <div class="mainTitle">
        <h2>填寫訂單資訊</h2>
      </div>
      <form>
        <label for="infoForm">
          <div class="infoWrapper">
            <div class="divider"></div>
            <div class="inputWrapper">
              <div class="title">收件人姓名：</div>
              <input type="text" name="username" placeholder="請輸入全名" id="myInput">
            </div>
            <div class="inputWrapper">
              <div class="title">連絡電話：</div>
              <input type="tel" name="phone" placeholder="0912-000-000" id="myInput">
            </div>
            <div class="inputWrapper">
              <div class="title">收件地址：</div>
              <input type="text" name="address" placeholder="請加入郵遞區號" id="myInput">
            </div>
          </div>
          <div class="buttonWrapper">
            <div class="reset">
              <button type="reset">清除資料</button>
            </div>
            <div class="submit">
              <button class='submitBtn'>確定送出</button>
            </div>
          </div>
        </label>
      </form>
      <div class="bottom">
        <div class="divider"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'


</script>

<style lang="scss" scoped>
.container {
  background-color: $color-1;
  width: 100%;
  font-family: Suisse Regular, sans-serif;
  padding: 50px 0px;

  .oderList {
    display: grid;
    place-items: center;

    .mainTitle {
      width: 80%;
      height: auto;

      h2 {
        font-size: 22px;
        font-weight: 600;
        text-align: start;
      }
    }

    .orderWrapper {
      width: 80%;
      margin: 0px 80px 80px 80px;

      .listWrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0px;

        .item {
          padding: 10px 10px 0px 0px;
          width: 200px;
          font-weight: bold;
          font-size: 20px;
        }

        .detail {
          padding: 10px 10px 0px 0px;
          width: 200px;
          font-weight: bold;
        }
      }

      .totalPrice {
        width: 300px;
        display: flex;
        align-items: center;
        margin-left: auto;
        padding-top: 20px;
        justify-content: space-around;
        font-size: 20px;
        font-weight: 600;
      }
    }

    form {
      width: 80%;
      margin: 0px 30px 0px 30px;

      .infoWrapper {
        .info {
          font-size: 22px;
          padding: 30px 0px;
        }

        .inputWrapper {
          display: flex;

          .title {
            font-size: 20px;
            padding: 30px 0px;
            width: 20%;
            font-weight: 600;
          }
        }

        input {
          border: none;
          background-color: transparent;
          outline: none;
          font-size: 20px;
          width: 80%;
          border-bottom: 1px solid $color-3;
        }
      }

      .buttonWrapper {
          display: flex;
          justify-content: center;
          margin: 50px 0px;

          .reset {
            padding-right: 10px;
          }

          button {
            width: 200px;
            height: 50px;
            background-color: $color-11;
            color: $color-2;
            font-size: 18px;
            padding: 5px;

            &:hover {
              cursor: pointer;
            }
          }
        }
    }

      .bottom {
        width: 80%;
      }

      .divider {
        width: 100%;
        border: $color-11 1.5px solid;
        margin: 20px 0px;
      }

      .dividerLiter {
        width: 100%;
        border: $color-3 1px solid;
      }
    }
  }
</style>
