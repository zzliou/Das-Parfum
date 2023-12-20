<template>
  <div class="content">
    <div class="area">
      <div class="city">
        <P>北部</P>
        <p>中部</p>
        <p>南部</p>
      </div>
      <div class="location">
      <div class="shop">
        <h2>永康旗艦店</h2>
        <div class="divider"></div>
        <p>地址： 10650台北市大安區永康街31巷6號</p>
      </div>
      <div class="shop">
        <h2>新北林口店</h2>
        <div class="divider"></div>
        <p>地址： 10650台北市大安區永康街31巷6號</p>
      </div>
      <div class="shop">
        <h2>板橋市府店</h2>
        <div class="divider"></div>
        <p>地址： 10650台北市大安區永康街31巷6號</p>
      </div>
      <div class="shop">
        <h2>勤美旗艦店</h2>
        <div class="divider"></div>
        <p>地址： 10650台北市大安區永康街31巷6號</p>
      </div>
      <div class="shop">
        <h2>台中lalaport店</h2>
        <div class="divider"></div>
        <p>地址： 10650台北市大安區永康街31巷6號</p>
      </div>
      <div class="shop">
        <h2>彰化員林店</h2>
        <div class="divider"></div>
        <p>地址： 10650台北市大安區永康街31巷6號</p>
      </div>
      <div class="shop">
        <h2>台南中西店</h2>
        <div class="divider"></div>
        <p>地址： 10650台北市大安區永康街31巷6號</p>
      </div>
      <div class="shop">
        <h2>高雄巨蛋店</h2>
        <div class="divider"></div>
        <p>地址： 10650台北市大安區永康街31巷6號</p>
      </div>
      <div class="shop">
        <h2>高雄大立店</h2>
        <div class="divider"></div>
        <p>地址： 10650台北市大安區永康街31巷6號</p>
      </div>
    </div>
    </div>
  </div>
</template>


<script setup>

</script>

<style lang="scss" scoped>
.content {
  background-color: #FFFFFF;
  .area {
    width: 1327px;
    height: 600px;
    .city {
      color: #4D4D4D;
      font-size: 24px;
      font-weight: 600;
      display: flex;
      justify-content: space-evenly;
      width: 1327px;
      height: 100px;
    }

    .location {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .shop {
      color: #4D4D4D;
      display: flex;
      flex-wrap: wrap;
      width: 300px;
      height: 300px;
      margin: 0px 40px 0px 41px;
      align-content: center;
    }
    .divider {
      border-bottom: #f5f5f5 solid 3px;
      width: 100%;
    }
  }
  }
</style>