<template>
  <div class="content">
    <div class="navbar">
      <div class="city">
        <p @click="changeType('all')">全部店鋪</p>
        <p @click="changeType('northList')">北部</p>
        <p @click="changeType('westList')">中部</p>
        <p @click="changeType('southList')">南部</p>
      </div>
      <div class="shopwapper">
        <div class="section" v-for="shop in selectedTypeList" :key="shop.id">
          <div class="shoptitle">{{ shop.title }}</div>
          <div class="divider"></div>
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
            <div class="address">{{ shop.address }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
let open = ref('營業時間')
let phone = ref('電話')
let location = ref('地址')
let shopList = ref([
  {
    title: '台北永康旗艦店',
    hour: '10:00AM-17:00PM',
    number: '02-23222200',
    address: '台北市大安區永康街31巷6號',
    id: 1
  },
  {
    title: '台北林口店',
    hour: '10:00AM-18:00PM',
    number: '02-66375888',
    address: '新北市林口區文化三路一段356號1F',
    id: 2
  },
  {
    title: '華泰名品城店',
    hour: '10:00AM-21:00PM',
    number: '03-2738666',
    address: '桃園市中壢區春德路189號',
    id: 3
  },
  {
    title: '台中新光店',
    hour: '10:00AM-21:00PM',
    number: '04-22510792',
    address: '台中市西屯區臺灣大道三段301號B2',
    id: 4
  },
  {
    title: '台中勤美店',
    hour: '10:00AM-21:00PM',
    number: '04-23295911',
    address: '台中市西區公益路68號B1',
    id: 5
  },
  {
    title: '台中三井 LaLaPort 店',
    hour: '10:00AM-21:00PM',
    number: '04-22138281',
    address: '台中市東區進德路600號北館4樓',
    id: 6
  },
  {
    title: '台南新天地店',
    hour: '10:00AM-21:00PM',
    number: '06-3030705',
    address: '台南市中西區西門路一段658號4F',
    id: 7
  },
  {
    title: '漢神巨蛋店',
    hour: '10:00AM-21:00PM',
    number: '07-3550705',
    address: '高雄市左營區博愛二路777號B1',
    id: 8
  },
  {
    title: '高雄駁二店',
    hour: '10:00AM-21:00PM',
    number: '07-9631200',
    address: '高雄市鹽埕區大勇路3號(駁二藝術特區C4倉庫)',
    id: 9
  }
])
let northList = ref([
{
    title: '台北永康旗艦店',
    hour: '10:00AM-17:00PM',
    number: '02-23222200',
    address: '台北市大安區永康街31巷6號',
    id: 1
  },
  {
    title: '台北林口店',
    hour: '10:00AM-18:00PM',
    number: '02-66375888',
    address: '新北市林口區文化三路一段356號1F',
    id: 2
  },
  {
    title: '華泰名品城店',
    hour: '10:00AM-21:00PM',
    number: '03-2738666',
    address: '桃園市中壢區春德路189號',
    id: 3
  }
])
let westList = ref([
{
    title: '台中新光店',
    hour: '10:00AM-21:00PM',
    number: '04-22510792',
    address: '台中市西屯區臺灣大道三段301號B2',
    id: 1
  },
  {
    title: '台中勤美店',
    hour: '10:00AM-21:00PM',
    number: '04-23295911',
    address: '台中市西區公益路68號B1',
    id: 2
  },
  {
    title: '台中三井 LaLaPort 店',
    hour: '10:00AM-21:00PM',
    number: '04-22138281',
    address: '台中市東區進德路600號北館4樓',
    id: 3
  }
])
let southList = ref([
{
    title: '台南新天地店',
    hour: '10:00AM-21:00PM',
    number: '06-3030705',
    address: '台南市中西區西門路一段658號4F',
    id: 1
  },
  {
    title: '漢神巨蛋店',
    hour: '10:00AM-21:00PM',
    number: '07-3550705',
    address: '高雄市左營區博愛二路777號B1',
    id: 2
  },
  {
    title: '高雄駁二店',
    hour: '10:00AM-21:00PM',
    number: '07-9631200',
    address: '高雄市鹽埕區大勇路3號(駁二藝術特區C4倉庫)',
    id: 3
  }
])
let selectedTypeList = ref(shopList.value)

function changeType(type) {
  console.log(type,'type')
  if(type === 'northList'){
    selectedTypeList.value = northList.value;
  }else if(type === 'westList'){
    selectedTypeList.value = westList.value;
  }else if(type === 'southList'){
    selectedTypeList.value = southList.value;
  }else {
    selectedTypeList.value = shopList.value;
  }
}
function getCartData() {
  let rawShopList = window.localStorage.getItem('shopList');
  let shopList = JSON.parse(rawShopList)
  console.log(shopList,'shopList')
}
getCartData()
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
      }
      }
    }
    .shopwapper {
      color: $color-9;
      display: flex;
      flex-wrap: wrap;
      width: auto;
      margin: 100px 50px 0px 50px;
      justify-content: center;
      &::after{
          content: "";
          // flex-grow: 100;
          width: 600px;
          height: 300px;
          @include mac {
            width: 300px;
          }
        }
      .section {
        width: 600px;
        height: 300px;
        margin: 20px;

        @include mac {
          width: 300px;
        }
        @include pad {
          width: 300px;
        }
        .shoptitle {
          font-size: 20px;
          margin-bottom: 30px;
          font-weight: 500;
        }
        .openhour {
          display: flex;
          font-size: 18px;
          margin: 10px 5px 10px 0px;
          align-items: center;
        }
        .phonenumber {
          display: flex;
          font-size: 16px;
          margin: 10px 5px 10px 0px;
          align-items: center;
        }
        .location {
          display: flex;
          font-size: 18px;
          margin: 10px 5px 10px 0px;
          align-items: center;
          @include mac {
            font-size: 16px;
          }
        }
        .hour {
          margin-left: auto;
        }
        .number {
          margin-left: auto;
        }
        .address {
          margin-left: auto;
        }
      }
    }
  }
  .divider {
    border-bottom: $color-9 solid 1.5px;
    width: 100%;
    margin-bottom: 30px;
  }
}
</style>
