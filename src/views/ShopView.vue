<template>
  <div class="content">
    <div class="navbar">
      <div class="city">
        <p @click="changeType('all')">全部店鋪</p>
        <p @click="changeType('northList')">北部</p>
        <p @click="changeType('westList')">中部</p>
        <p @click="changeType('southList')">南部</p>
      </div>
      <div class="shopWrapper">
        <div class="section" v-for="shop in selectedTypeList" :key="shop.id">
          <div class="store-pic">
            <img :src="shop.src" />
          </div>
          <div class="info">
            <div class="title">
              <div class="name"> {{ shop.title }}</div>
              <div class="icon"> <a :href="shop.googleUrl" target="_blank">
                  <img src="@/assets/img/icon/googlemap.svg" alt="">
                </a></div>
            </div>
            <!-- <div class="shoptitle">{{ shop.title }}</div> -->
            <div class="divider"></div>
            <div class="subtitle">
              <div class="openhour">
                <div class="open">{{ open }}</div>
                <div class="hour">{{ shop.hour }}</div>
              </div>
              <div class="phonenumber">
                <div class="phone">{{ phone }}</div>
                <div class="number">{{ shop.number }}</div>
              </div>
              <div class="location">
                <div class="location">{{ location }}</div>
                <div class="address">
                  <a :href="shop.googleUrl" target="_blank">{{ shop.address }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import shop1 from "@/assets/img/Home.pic/home-store/shop1.png";
import shop2 from "@/assets/img/Home.pic/home-store/shop2.jpg";
import shop3 from "@/assets/img/Home.pic/home-store/shop3.jpg";
import shop4 from "@/assets/img/Home.pic/home-store/shop4.png";

const router = useRouter()
let open = ref('Open.')
let phone = ref('Tel.')
let location = ref('Add.')
let shopList = ref([
  {
    title: '永康旗艦店',
    hour: '10:00AM-17:00PM',
    number: '02-23222200',
    address: '台北市大安區永康街31巷6號',
    googleUrl: 'https://maps.app.goo.gl/CJYqdnSoCshtykQF8',
    src: shop1,
    id: 1
  },
  {
    title: '台北林口店',
    hour: '10:00AM-18:00PM',
    number: '02-66375888',
    address: '新北市林口區文化三路一段356號1F',
    googleUrl: 'https://maps.app.goo.gl/DtuTYJRT9SCe2MH67',
    src: shop2,
    id: 2
  },
  {
    title: '華泰名品城店',
    hour: '10:00AM-21:00PM',
    number: '03-2738666',
    address: '桃園市中壢區春德路189號',
    googleUrl: 'https://maps.app.goo.gl/3qtDRzqr8AnVh7ks5',
    src: shop3,
    id: 3
  },
  {
    title: '台中新光店',
    hour: '10:00AM-21:00PM',
    number: '04-22510792',
    address: '台中市西屯區臺灣大道三段301號B2',
    googleUrl: 'https://maps.app.goo.gl/DzTmbFNm8LXuefh97',
    src: shop4,
    id: 4
  },
  {
    title: '台中勤美店',
    hour: '10:00AM-21:00PM',
    number: '04-23295911',
    address: '台中市西區公益路68號B1',
    googleUrl: 'https://maps.app.goo.gl/uHN7i4z9mav2UPnDA',
    src: shop1,
    id: 5
  },
  {
    title: '三井LaLa店',
    hour: '10:00AM-21:00PM',
    number: '04-22138281',
    address: '台中市東區進德路600號北館4樓',
    googleUrl: 'https://maps.app.goo.gl/zwo14MK4ULxiwUEs5',
    src: shop2,
    id: 6
  },
  {
    title: '台南新天地店',
    hour: '10:00AM-21:00PM',
    number: '06-3030705',
    address: '台南市中西區西門路一段658號4F',
    googleUrl: 'https://maps.app.goo.gl/5cHrDnZQ6fGEe6nJA',
    src: shop3,
    id: 7
  },
  {
    title: '漢神巨蛋店',
    hour: '10:00AM-21:00PM',
    number: '07-3550705',
    address: '高雄市左營區博愛二路777號B1',
    googleUrl: 'https://maps.app.goo.gl/GQZPNRqbL7qhZQ8V8',
    src: shop4,
    id: 8
  },
  {
    title: '高雄駁二店',
    hour: '10:00AM-21:00PM',
    number: '07-9631200',
    address: '高雄市鹽埕區大勇路3號(駁二藝術特區C4倉庫)',
    googleUrl: 'https://maps.app.goo.gl/16uvzTFgAweKM26N9',
    src: shop1,
    id: 9
  }
])
let northList = ref([
  {
    title: '台北永康旗艦店',
    hour: '10:00AM-17:00PM',
    number: '02-23222200',
    address: '台北市大安區永康街31巷6號',
    googleUrl: 'https://maps.app.goo.gl/CJYqdnSoCshtykQF8',
    src: shop1,
    id: 1
  },
  {
    title: '台北林口店',
    hour: '10:00AM-18:00PM',
    number: '02-66375888',
    address: '新北市林口區文化三路一段356號1F',
    googleUrl: 'https://maps.app.goo.gl/DtuTYJRT9SCe2MH67',
    src: shop2,
    id: 2
  },
  {
    title: '華泰名品城店',
    hour: '10:00AM-21:00PM',
    number: '03-2738666',
    address: '桃園市中壢區春德路189號',
    googleUrl: 'https://maps.app.goo.gl/3qtDRzqr8AnVh7ks5',
    src: shop3,
    id: 3
  }
])
let westList = ref([
  {
    title: '台中新光店',
    hour: '10:00AM-21:00PM',
    number: '04-22510792',
    address: '台中市西屯區臺灣大道三段301號B2',
    googleUrl: 'https://maps.app.goo.gl/DzTmbFNm8LXuefh97',
    src: shop1,
    id: 1
  },
  {
    title: '台中勤美店',
    hour: '10:00AM-21:00PM',
    number: '04-23295911',
    address: '台中市西區公益路68號B1',
    googleUrl: 'https://maps.app.goo.gl/uHN7i4z9mav2UPnDA',
    src: shop2,
    id: 2
  },
  {
    title: '台中三井LaLa店',
    hour: '10:00AM-21:00PM',
    number: '04-22138281',
    address: '台中市東區進德路600號北館4樓',
    googleUrl: 'https://maps.app.goo.gl/zwo14MK4ULxiwUEs5',
    src: shop3,
    id: 3
  }
])
let southList = ref([
  {
    title: '台南新天地店',
    hour: '10:00AM-21:00PM',
    number: '06-3030705',
    address: '台南市中西區西門路一段658號4F',
    googleUrl: 'https://maps.app.goo.gl/5cHrDnZQ6fGEe6nJA',
    src: shop1,
    id: 1
  },
  {
    title: '漢神巨蛋店',
    hour: '10:00AM-21:00PM',
    number: '07-3550705',
    address: '高雄市左營區博愛二路777號B1',
    googleUrl: 'https://maps.app.goo.gl/GQZPNRqbL7qhZQ8V8',
    src: shop2,
    id: 2
  },
  {
    title: '高雄駁二店',
    hour: '10:00AM-21:00PM',
    number: '07-9631200',
    address: '高雄市鹽埕區大勇路3號(駁二藝術特區C4倉庫)',
    googleUrl: 'https://maps.app.goo.gl/16uvzTFgAweKM26N9',
    src: shop3,
    id: 3
  }
])
let selectedTypeList = ref(shopList.value)

function changeType(type) {
  console.log(type, 'type')
  if (type === 'northList') {
    selectedTypeList.value = northList.value;
  } else if (type === 'westList') {
    selectedTypeList.value = westList.value;
  } else if (type === 'southList') {
    selectedTypeList.value = southList.value;
  } else {
    selectedTypeList.value = shopList.value;
  }
}
function getCartData() {
  let rawShopList = window.localStorage.getItem('shopList');
  let shopList = JSON.parse(rawShopList)
  console.log(shopList, 'shopList')
}
getCartData()

window.scrollTo(0, 0);
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
</script>

<style lang="scss" scoped>
.content {
  background-color: $color-1;

  .navbar {
    width: auto;
    align-items: center;
    justify-content: center;

    .city {
      display: flex;
      background-color: $color-7;

      p {
        font-size: 16px;
        padding: 0px 20px;

        &:hover {
          cursor: pointer;
          font-weight: 800;
          text-decoration: underline;
          font-size: 18px;
        }
      }
    }

    .shopWrapper {
      color: $color-9;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: auto;
      margin: 100px 50px 0px 50px;

      @include phone {
        margin: 50px 50px 0px 50px;
      }
      
      .section {
        width: 650px;
        height: 300px;
        margin: 50px;
        display: flex;
        box-sizing: border-box;

        @include mac {
          width: 480px;
          height: 300px;
          margin: 20px;
        }

        @include pad {
          width: 400px;
          height: 200px;
          margin: 20px;
        }

        @include phone {
          width: 200px;
          height: 100px;
          margin: 10px;
        }

        .store-pic {
          margin-right: 30px;

          img {
            width: 300px;
            height: 300px;
            object-fit: cover;
            border-radius: 10px;
            @include mac {
              width: 200px;
              height: 200px;
            }
            @include pad {
              width: 150px;
              height: 150px;
            }
            @include phone {
              width: 80px;
              height: 80px;
            }
          }
        }
        .info {
          height: auto;
          .title {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            @include phone {
              margin-bottom: 10px;
            }

            .name {
              font-size: 20px;
              font-weight: 500;
              
              @include mac {
                font-size: 16px;
              }
              @include pad {
                font-size: 14px;
              }
              @include phone {
                width: 150px;
                font-size: 12px;
              }
            }

            img {
              width: 100%;
              height: 25px;
              padding-left: 20px;

              @include mac {
                  height: 20px;
              }

              @include pad {
                  height: 20px;
              }
              @include pad {
                  height: 20px;
              }
             }
          }

          .divider {
            border-bottom: $color-9 solid 1.5px;
            width: 100%;
            margin-bottom: 115px;

            @include mac {
              margin-bottom: 55px;
            }
            @include pad {
              margin-bottom: 0px;
            }
            @include phone {
              margin-bottom: 0px;
            }
          }

          .subtitle {
            position: absolute;
            color: $color-9;
            
            .openhour {
              display: flex;
              font-size: 20px;
              margin: 10px 5px 10px 0px;
              align-items: center;
              text-align: start;
              @include mac {
                font-size: 16px;
              }
              @include pad {
                font-size: 16px;
              }
              @include phone {
                font-size: 12px;
                margin: 5px 5px 5px 0px;
              }
            }

            .phonenumber {
              display: flex;
              font-size: 20px;
              margin: 10px 5px 10px 0px;
              align-items: center;
              text-align: start;
              @include mac {
                font-size: 16px;
              }
              @include pad {
                font-size: 16px;
              }
              @include phone {
                font-size: 12px;
                margin: 5px 5px 5px 0px;
              }
            }

            .location {
              display: flex;
              font-size: 20px;
              align-items: center;
              text-align: start;

              .address{
                a {
                text-decoration: none;
                color: $color-9;
                }
              }

              @include mac {
                font-size: 16px;
              }
              @include pad {
                font-size: 16px;
              }
              @include phone {
                display: none;
              }
            }
          }
        }
      }
      &::after {
        content: "";
        flex-grow: 1;
      }
    }
  }
}
</style>
