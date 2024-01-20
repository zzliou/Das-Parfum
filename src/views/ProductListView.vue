<template>
  <div class="container">
    <div class="icon">
      <div class="icon">
        <svg aria-labelledby="aesop-92" class="Icon_base__GKZ58 Icon_light__1TZsq Logo_icon__NDEf8"
          data-testid="data-testid-Icon" focusable="false" height="40" role="img" tabindex="-1" viewBox="0 0 489.7 154.3"
          width="120" style="height: 40px; width: 120px">
          <title aria-label="Aesop 商標" id="aesop-92">Aesop</title>
        </svg>
      </div>
    </div>
    <div class="navbar">
      <div class="productsCategories">
        <p>全部商品</p>
        <p>髮品</p>
        <p>身體乳</p>
        <p>組合</p>
      </div>
      <div class="choose">
        <p>篩選</p>
      </div>
    </div>
    <div class="productWapper">
      <div class="introduce">
        <div class="maintitle">
          一年四季提供肌膚潔淨及柔滑的感受
        </div>
        <div class="description">
          身體潔膚露、保濕產品和調理精油皆蘊含具滋潤作用的草本植物成分，讓肌膚在任何季節皆能保持潔淨柔滑。
        </div>
      </div>
      <div class="section" v-for="product in productList" :key="product.id">
        
        <div class="productPic"> <img :src="product.pic" alt=""></div>
        <div class="productitle">{{ product.title }}</div>
        <div class="subtitle">{{ product.subtitle }}</div>
        <div class="info">
          <div class="size">{{ size }}</div>
          <div class="price">{{ product.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let size = ref('容量')
let price = ref('價格')
let productList = ref([
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 1
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 2
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 3
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 4
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 5
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 6
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 7
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 8
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 9
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 10
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 11
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 12
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 13
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 14
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 15
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 16
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 17
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 18
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 19
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png',
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    size: '容量',
    price: 'NT$500起',
    id: 20
  },
])
</script>

<style lang="scss" scoped> 
.container {
   background-color: #FFFEF2;
   .icon {
     margin: 50px auto 50px 50px;
   }

   .navbar {
     display: flex;
     background-color: #ebeade;

     .productsCategories {
       display: flex;
       color: #7f7f7d;
       padding: 20px 0px 20px 100px;

       p {
         padding: 0px 10px;
       }
     }

     .choose {
       margin-left: auto;
       margin-right: 50px;
       border: 1px solid #bfbfb5;
       color: #7f7f7d;
       padding: 20px 0px 20px 100px;
     }
   }
  .productWapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .introduce {
      width: 400px;
      margin-top: 100px;
      margin-left: 100px;
      .maintitle {
        font-size: 24px;
        padding: 30px 0px;
      }
      .description {
        font-size: 18px;
        line-height: 2;
      }
    }
    .section {
      width: 400px;
      text-align: center;
      .productPic {
        img {
          width: 400px;
          height: 400px;
          object-fit: contain;
          background-color: #f5f4e9;
          padding: 50px;
        }
      }
      .productitle {
        font-size: 16px;
        font-weight: 600;
        margin-top: 50px;
      }
      .subtitle {
        font-size:14px;
        color:#7f7f7d;
        margin-bottom: 50px;
      }
      .info {
        width: 400px;
        height: 200px;
        color:#7f7f7d;
        font-size: 14px;
        display: flex;
        text-align: center;

        .size {
          margin-right: 10px;
        }
      }

    }
 }
}
</style>