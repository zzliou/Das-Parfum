<template>
  <div class="container">
    <div class="thanksWrapper">
      <div class="textWrapper">
        <div class="icon">
          <img src="@/assets/img/icon/complete.png">
        </div>
        <div class="mainTitle">感謝您的購買！</div>
        <div class="subTitle">已收到您的訂單，將於三個工作天完成包裹寄送，再次感謝您的訂購，預祝您！有個美好的一天！</div>
      </div>
      <div class="buttonWrapper">
        <div class="back">
         <button><RouterLink to="/">返回首頁</RouterLink></button> 
        </div>
        <div class="finish">
          <button @click="closeCurrentWindow">關閉視窗</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()



</script>

<style lang="scss" scoped>
.container {
  background-color: $color-1;
  width: 100%;
  font-family: Suisse Regular, sans-serif;
  padding: 50px 0px;

  .thanksWrapper {
    display: grid;
    place-items: center;

    .textWrapper {
      display: grid;
      place-items: center;
      
      .icon {
        img {
          width: 100px;
          height: 100px;
          @include phone {
            width: 50px;
            height: 50px;
          }
        }
      }

      .mainTitle {
        font-size: 26px;
        font-weight: 600;
        width: 500px;
        text-align: center;
        padding: 50px 0px;
        @include mac {
          padding: 25px 0px;
        }
        @include pad {
          padding: 15px 0px;
        }
        @include phone {
          width: 300px;
          padding: 15px 0px;
        }
      }

      .subTitle {
        font-size: 18px;
        width: 300px;
        text-align: center;
        padding-bottom: 50px;
        @include mac {
          padding-bottom: 25px;
        }
        @include pad {
          padding-bottom: 15px;
        }
        @include phone {
          padding-bottom: 15px;
        }
      }
    }

    .buttonWrapper {
      width: 500px;
      display: flex;
      justify-content: center;

      @include phone {
        width: 300px;
      }

      .finish {
        text-align: start;
        padding: 20px 10px;

        button {
          width: 150px;
          height: 50px;
          background-color: $color-11;
          border: $color-11;
          font-size: 16px;
          color: $color-2;
          @include phone {
            width: 80px;
            font-size: 14px;
          }

          &:hover {
            cursor: pointer;
          }
        }
      }

      .back {
        text-align: end;
        padding: 20px 0px;

        a {
          text-decoration: none;
          color: $color-2;
        }

        button {
          width: 150px;
          height: 50px;
          background-color: $color-11;
          border: $color-11;
          font-size: 16px;
          @include phone {
            width: 80px;
            font-size: 14px;
          }

          &:hover {
            cursor: pointer;
          }
        }
      }
    }

  }

  //   .mainTitle {
  //     width: 80%;
  //     height: auto;

  //     h2 {
  //       font-size: 22px;
  //       font-weight: 600;
  //       text-align: start;
  //     }
  //   }

  //   .orderWrapper {
  //     width: 80%;
  //     margin: 0px 80px 80px 80px;

  //     .listWrapper {
  //       display: flex;
  //       align-items: center;
  //       justify-content: space-between;
  //       padding: 10px 0px;

  //       .item {
  //         padding: 10px 10px 0px 0px;
  //         width: 200px;
  //         font-weight: bold;
  //         font-size: 20px;
  //       }

  //       .detail {
  //         padding: 10px 10px 0px 0px;
  //         width: 200px;
  //         font-weight: bold;
  //       }
  //     }

  //     .totalPrice {
  //       width: 300px;
  //       display: flex;
  //       align-items: center;
  //       margin-left: auto;
  //       padding-top: 20px;
  //       justify-content: space-around;
  //       font-size: 20px;
  //       font-weight: 600;
  //     }
  //   }

  //   .infoWrapper {
  //     width: 80%;
  //     margin: 0px 30px 100px 30px;

  //     .info {
  //       font-size: 22px;
  //       padding: 30px 0px;
  //     }

  //     .inputWrapper {
  //       display: flex;

  //       .title {
  //         font-size: 20px;
  //         padding: 30px 0px;
  //         width: 20%;
  //         font-weight: 600;
  //       }
  //     }

  //     input {
  //       border: none;
  //       background-color: transparent;
  //       outline: none;
  //       font-size: 20px;
  //       width: 80%;
  //       border-bottom: 1px solid $color-3;
  //     }
  //   }

  //   .buttonWrapper {
  //     display: flex;
  //     justify-content: center;
  //     margin-bottom: 50px;

  //     input {
  //       width: 200px;
  //       height: 50px;
  //       background-color: $color-11;
  //       color: $color-2;
  //       font-size: 22px;

  //       &:hover {
  //         cursor: pointer;
  //       }
  //     }

  //     .reset {
  //       padding: 0px 10px;
  //     }

  //   }

  //   .divider {
  //     width: 100%;
  //     border: $color-11 1.5px solid;
  //     margin: 20px 0px;
  //   }

  //   .dividerLiter {
  //     width: 100%;
  //     border: $color-3 1px solid;
  //   }
  // }
}</style>
