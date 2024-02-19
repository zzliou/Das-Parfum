<template>
  <div class="cartshop">
    <div class="content">
        <div class="item">
          <div class="name">商品名稱</div>
          <div class="price">單價</div>
          <div class="count">數量</div>
          <div class="amount">總計</div>
        </div>
        <div class="item_detail">
          <div class="price"><span>$</span>500</div>
          <div class="count">
            <button>-</button>
            1
            <button>+</button>
          </div> 
          <div class="amount">500</div>
          <div class="delete">
            <button>刪除</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.cartshop {
  width: 100%;
  
  background-color: #F6F5E8;
  .content {
    .item {
      width: 800px;
      height: auto;
      display: flex;
      font-size: 18px;
      font-weight: 600;
      .name {
        color: #3333;
        font
      }
    }
  }
}
</style>
