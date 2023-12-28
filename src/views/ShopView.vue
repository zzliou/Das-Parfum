<template>
  <div class="content">
    <div class="area">
      <div class="city">
        <p>北部</p>
        <p>中部</p>
        <p>南部</p>
      </div>
      <div class="shopwapper">
        <div class="section" v-for="shop in shopList" :key="shop.id">
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
import { ref } from 'vue'
let open = ref('營業時間')
let phone = ref('電話')
let location = ref('地址')
let shopList = ref([
  {
    title: '台北永康旗艦店',
    hour: '10:00AM-17:00PM',
    number: '0545876842',
    address: '0650台北市大安區永康街31巷6號',
    id: 1
  },
  {
    title: '台北永康旗艦店',
    hour: '10:00AM-17:00PM',
    number: '0545876842',
    address: '0650台北市大安區永康街31巷6號',
    id: 2
  }
])
</script>

<style lang="scss" scoped>
.content {
  background-color: #ffffff;
  .area {
    width: auto;
    .city {
      color: #4d4d4d;
      font-size: 24px;
      font-weight: 600;
      display: flex;
      justify-content: space-evenly;
      width: auto;
    }
    .shopwapper {
      color: #4d4d4d;
      display: flex;
      flex-wrap: wrap;
      width: auto;
      margin: 0px 40px 0px 41px;
      .section {
        width: 300px;
        height: 300px;
        margin: 20px;
        .shoptitle {
          font-size: 24px;
          margin-bottom: 10px;
          }
        .openhour {
          display: flex;
          font-size: 18px;
          margin: 10px 5px 10px 0px;
        }
        .phonenumber {
          display: flex;
          font-size: 18px;
          margin: 10px 5px 10px 0px;
        }
        .location {
          display: flex;
          font-size: 18px;
          margin: 10px 5px 10px 0px;
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
      border-bottom: black solid 5px;
      width: 100%;
    }
  }
</style>
