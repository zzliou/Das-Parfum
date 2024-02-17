<template>
  <div class="container">
    <div class="icon">
      <div class="icon">
        <svg
          aria-labelledby="aesop-92"
          class="Icon_base__GKZ58 Icon_light__1TZsq Logo_icon__NDEf8"
          data-testid="data-testid-Icon"
          focusable="false"
          height="40"
          role="img"
          tabindex="-1"
          viewBox="0 0 489.7 154.3"
          width="120"
          style="height: 40px; width: 120px"
        >
          <title aria-label="Aesop 商標" id="aesop-92">Aesop</title>
        </svg>
      </div>
    </div>
    <div class="navbar">
      <div class="productsCategories">
        <p @click="changeType('all')">全部商品</p>
        <p @click="changeType('shampooList')">髮品</p>
        <p @click="changeType('bodyList')">身體乳</p>
        <p @click="changeType('combineList')">送禮組合</p>
      </div>
      <div class="choose">
        <p>篩選</p>
      </div>
    </div>
    <div class="productWapper">
      <div class="introduce">
        <div class="maintitle">一年四季提供肌膚潔淨及柔滑的感受</div>
        <div class="description">
          身體潔膚露、保濕產品和調理精油皆蘊含具滋潤作用的草本植物成分，讓肌膚在任何季節皆能保持潔淨柔滑。
        </div>
      </div>
      <div class="section" v-for="product in selectedTypeList" :key="product.id">
        <div class="productPic" @click="goToProductPage(product)">
          <img :src="product.sizeList[product.selectedSizeIndex].imageSrc" alt="" />
        </div>
        <div class="productInfo">
          
          <div class="productitle">{{ product.title }}</div>
          <div class="subtitle">{{ product.subtitle }}</div>
          <div class="sizenprice">
            <div class="size-wrapper">
              <div class="size-list-wrapper">
                <div
                  class="size-option"
                  v-for="(sizeOption, sizeOptionIndex) in product.sizeList"
                  :key="sizeOptionIndex"
                >
                  <input
                    type="radio"
                    :id="sizeOption.id"
                    :checked="product.selectedSizeIndex === sizeOptionIndex"
                    @change="handleChangeSize(product, sizeOptionIndex)"
                  />
                  <label :for="sizeOption.id">{{ sizeOption.capacity }} ml</label>
                </div>
              </div>
            </div>

            <div class="price">NT$ {{ product.sizeList[product.selectedSizeIndex].price }}</div>
          </div>
          <div class="cart">加入購物車</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// let size = ref('容量')
// let price = ref('價格')
const router = useRouter()
let productList = ref([
  {
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 1
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png',
    title: '芫荽籽身體潔膚露',
    subtitle: '溫暖木質辛香',
    size: '容量',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    price: 'NT$600起',
    id: 2
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png',
    title: '玫瑰身體潔膚露',
    subtitle: '玫瑰花、豆蔻、黑胡椒',
    size: '容量',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 3
  },
  {
    title: '天竺葵身體潔膚露',
    subtitle: '綠色、柑橘、清爽幽香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 4
  },
  {
    title: '肌膚救贖身體去角質露',
    subtitle: '清新的高山樟香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 5
  },
  {
    title: '天竺葵身體去角質露',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 6
  },
  {
    title: '天竺葵身體去角質露',
    subtitle: '綠色、柑橘、清爽幽香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/tFPP7nyRPPcpryS80DphL/d00d0928dd23f85b7cd99731b1cd5814/Aesop_Body_Geranium_Leaf_Body_Scrub_180mL_Web_Front_X-Large_3000x3559px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 7
  },
  {
    title: '橙香身體乳霜',
    subtitle: '柑橘、清爽幽香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/4uTvSttlK8K9OstLbJtmri/812b261d1e5570f279d09198bd5bbb97/Aesop_Body_Rind_Concentrate_Body_Balm_100mL_Web_Front_X-Large_3000x3456px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 8
  },
  {
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 9
  },
  {
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 10
  },
  {
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/4uTvSttlK8K9OstLbJtmri/812b261d1e5570f279d09198bd5bbb97/Aesop_Body_Rind_Concentrate_Body_Balm_100mL_Web_Front_X-Large_3000x3456px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 11
  },
  {
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 12
  },
  {
    title: '天竺葵身體二重奏',
    subtitle: '天竺葵身體潔膚露、天竺葵身體乳霜',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/3ATwb5cPDCUqaDqrsAKwk2/b1f2730aadcba05e52d92931fd3a1280/Aesop-Geranium-Leaf-Duet-with-Product-Medium-1238x752px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 13
  },
  {
    title: '潔膚香皂',
    subtitle: '柑橘、花香、清新',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/4etraiSe3vfSdrYGnSxUvA/2d575a9ca21e347268f1809f6a569393/Aesop_Body_Refresh_Bar_Soap_150g_Web_Back_X-Large_3000x1822px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 14
  },
  {
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/2Ov75aNIJhljjOfth2MIVs/4e2ebe7525cf942e3bb9edd62b8a9b6a/Aesop_Body_Protective_Body_Lotion_SPF50_Asia_EU_150mL_Web_Back_X-Large_3000x3456px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 15
  },
  {
    title: '防曬身體乳液SPF50',
    subtitle: '綠薄荷、泛醇',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 16
  },
  {
    title: '苦橙甦活身體凝膠',
    subtitle: '柑橘清新',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/gkTD6WNjUvHKpj2MUjiyB/2ef25158ce59def7a3823422749a2ddc/Aesop_Body_Petitgrain_Reviving_Body_Gel_150mL_Web_Front_Large_900x1037px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 17
  },
  {
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5C0r8KKZI06p7iw6wPCAT/7be3bbe1d1a67f75d5cbd08c57b75302/Aesop_Body_A_Rose_By_Any_Other_Name_Body_Cleanser_100mL_Web_Back_Medium_800x922px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 18
  },
  {
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 19
  },
  {
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/4uTvSttlK8K9OstLbJtmri/812b261d1e5570f279d09198bd5bbb97/Aesop_Body_Rind_Concentrate_Body_Balm_100mL_Web_Front_X-Large_3000x3456px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 20
  }
])

let shampooList = ref([
  {
    title: '苦橙香檸洗髮露',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 1
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png',
    title: '芫荽籽潤髮乳',
    subtitle: '溫暖木質辛香',
    size: '容量',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    price: 'NT$600起',
    id: 2
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/1eb6mjTWLHrYP4nDH3KQLv/9ea5d4ecfa1aa7942c02dce3e1b558ff/Aesop_Hair_Conditioner_100mL_Web_Front_X-Large_3000x3456px.png',
    title: '清新潤髮露',
    subtitle: '有效撫平、柔軟及滋潤髮絲',
    size: '容量',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    price: 'NT$600起',
    id: 3
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/1eb6mjTWLHrYP4nDH3KQLv/9ea5d4ecfa1aa7942c02dce3e1b558ff/Aesop_Hair_Conditioner_100mL_Web_Front_X-Large_3000x3456px.png',
    title: '清新潤髮露',
    subtitle: '有效撫平、柔軟及滋潤髮絲',
    size: '容量',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    price: 'NT$600起',
    id: 4
  },
  {
    title: '苦橙香檸洗髮露',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 5
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png',
    title: '芫荽籽潤髮乳',
    subtitle: '溫暖木質辛香',
    size: '容量',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    price: 'NT$600起',
    id: 6
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/1eb6mjTWLHrYP4nDH3KQLv/9ea5d4ecfa1aa7942c02dce3e1b558ff/Aesop_Hair_Conditioner_100mL_Web_Front_X-Large_3000x3456px.png',
    title: '清新潤髮露',
    subtitle: '有效撫平、柔軟及滋潤髮絲',
    size: '容量',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    price: 'NT$600起',
    id: 7
  },
  {
    pic: 'https://www.aesop.com/u1nb1km7t5q7/1eb6mjTWLHrYP4nDH3KQLv/9ea5d4ecfa1aa7942c02dce3e1b558ff/Aesop_Hair_Conditioner_100mL_Web_Front_X-Large_3000x3456px.png',
    title: '清新潤髮露',
    subtitle: '有效撫平、柔軟及滋潤髮絲',
    size: '容量',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    price: 'NT$600起',
    id: 8
  },
])
let bodyList = ref([
  {
    title: '滋潤保濕霜',
    subtitle: '乾性肌膚適用',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/7GOcMuzhepgAOwZicR9myA/389f68dc37e95c7ca421a1796e06dd1f/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_X-Large_3000x1822px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/28tdvggu9YEZNyr2XUrWao/783019e5f17eabe30706bfe4b73fa92e/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_X-Large_3000x1822px.png'
      }
    ],
    id: 1
  },
  {
    title: '身體去角質露',
    subtitle: '清爽、松針冷冽、樟腦幽香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/7aRY4cLhNoKdLyEIBLlnHu/82174fb813437c62ce67d4462c00db53/Aesop_Body_Redemption_Body_Scrub_180mL_Web_Front_X-Large_3000x3559px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 2
  },
  {
    title: '天竺葵身體去角質露',
    subtitle: '綠色、柑橘、清爽幽香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/7l9Fjb2Mu7AOh7HIYe6JQQ/409822ba52159afbd4b06b8931a49eef/Aesop_Body_Geranium_Leaf_Body_Scrub_180mL_Web_Front_Large_900x1068px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 3
  },
  {
    title: '苦橙香檸身體潔膚露',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      }
    ],
    id: 4
  },
  {
    title: '芫荽籽身體潔膚露',
    subtitle: '溫暖木質辛香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/5t0dzEPWqxftQwus7pXBKW/9e6ea2fd7f92bffce6bed00ae6b7c176/Aesop_Body_Citrus_Melange_Body_Cleanser_Refill_500mL_Web_Front_Large_900x1115px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 5
  },
  {
    title: '玫瑰身體潔膚露',
    subtitle: '玫瑰花瓣、豆蔻、黑胡椒',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/3w8MaHOTW5BzLhLkneCDbU/47b04142ee7c1ab93b300821dc17194c/Aesop_Body_Geranium_Leaf_Body_Balm_100mL_Web_Front_Large_900x1037px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 6
  },
  {
    title: '橙香身體乳霜',
    subtitle: '快速吸收，輕盈保濕',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/9QaSVpupCdHhYMDnGQLRd/ee4e2a903c76677c5967dd17fa4b6119/Aesop_Body_Resolute_Hydrating_Body_Balm_100mL_Web_Front_Large_900x1037px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 7
  },
  {
    title: '滋潤芳香身體乳霜',
    subtitle: '滋養緩和乾燥肌膚',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1JG6lc3V5w2DXbg89MXgnn/4236dacc0d08912fd4789e8186354714/Aesop_Body_Citrus_Melange_Body_Cleanser_100mL_Web_Front_Large_900x916px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 8
  },
])
let combineList = ref([
  {
    title: '詩意旋律',
    subtitle: '清潔露、護手霜、身體潔膚露、乳霜',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/4Ei5FykNQjLJ5OGb04i0rv/f335ea791c71086cc5962322a1e98ed3/Aesop_Kits_Gift_Kits_2023-24_Majestic_Melodies_GL_Web_Front_X-Large_3000x1822px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 1
  },
  {
    title: '心旋和聲',
    subtitle: '手部清潔露、廁後點滴、室內噴霧',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/60WGIxgcYmP8YImmL3HnvM/963d1c080c3f2e5460f50a15335fbd9d/Aesop_Kits_Gift_Kits_2023-24_Heartful_Harmonies_GL_Web_Front_X-Large_3000x1822px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 2
  },
  {
    title: '慷慨節奏',
    subtitle: '天竺葵身體潔膚露、去角質露、身體乳霜',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/2TDHu0T0jvbsUoQcH8prqN/a3a5d66800a71d743167b4db6a247525/Aesop_Kits_Gift_Kits_2023-24_Rousing_Rythyms_GL_Web_Front_X-Large_3000x1822px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 3
  },
  {
    title: '寓言曲調',
    subtitle: '護手霜、潔膚露、護唇膏',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/XkDJAABVq29aLgqi0Wpxn/73d05853da1a2a1fdeef4b1433086e51/Aesop_Kits_Gift_Kits_2023-24_Fabulous_Forms_GL_Web_Front_Large_1500x911px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/1o89OmjZq9MjTymbKLr7JR/0b6c2f8540ca5f375c38e40832141cb4/Aesop_Body_Coriander_Seed_Body_Cleanser_100mL_Web_Front_X-Large_3000x3054px.png'
      }
    ],
    id: 4
  },
  {
    title: '諧美聲部',
    subtitle: '護手霜、清潔露、乾洗手',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/6y2ZMOukY9ToPR0CFnGWjU/e48c2d8f08bb4208f2eadf736f6ba123/Aesop_Kits_Gift_Kits_2023-24_Tuneful_Textures_GL_Web_Front_Large_1500x911px.png'
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc:
          'https://www.aesop.com/u1nb1km7t5q7/6y2ZMOukY9ToPR0CFnGWjU/e48c2d8f08bb4208f2eadf736f6ba123/Aesop_Kits_Gift_Kits_2023-24_Tuneful_Textures_GL_Web_Front_Large_1500x911px.png'
      }
    ],
    id: 5
  },
])
let selectedTypeList = ref(productList.value)


function handleChangeSize(product, sizeOptionIndex) {
  product.selectedSizeIndex = sizeOptionIndex
}

function goToProductPage(product) {
  router.push({ name: 'insidepagesView' })
}

function changeType(type) {
  console.log(type,'type')
  if(type === 'shampooList'){
    selectedTypeList.value = shampooList.value;
  }else if(type === 'bodyList'){
    selectedTypeList.value = bodyList.value;
  }else if(type === 'combineList'){
    selectedTypeList.value = combineList.value;
  }else {
    selectedTypeList.value = productList.value;
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #fffef2;
  .navbar {
    display: flex;
    align-items: center;
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
      margin: 10px 50px 10px auto;
      border: 1px solid #bfbfb5;
      color: #7f7f7d;
      padding: 20px 60px 20px 60px;
    }
  }

  .productWapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .introduce {
      width: 33%;
      box-sizing: border-box;
      padding: 100px 100px;
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
      width: 33%;
      box-sizing: border-box;

      .productPic {
        background-color: #f5f4e9;
        text-align: center;
        margin: 0 2px;
        img {
          width: 400px;
          height: 600px;
          object-fit: contain;
        }
      }

      .productInfo {
        width: auto;
        text-align: center;
        height: 300px;
        color: #7f7f7d;
        transition: all 0.2s linear;
        margin: 0 2px;
        &:hover {
          background-color: #f5f4e9;
          .cart {
            border: solid 1px #1c1c1c;
            background-color: #1c1c1c;
            width: auto;
            height: 100px;
            margin: 0px 0px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #f5f4e9;
            opacity: 1;
            position: relative;
            top: 10px;
          }
        }
        .productitle {
          font-size: 20px;
          font-weight: 600;
          padding-top: 30px;
        }

        .subtitle {
          font-size: 14px;
          color: #7f7f7d;
          margin-bottom: 50px;
        }

        .sizenprice {
          .size-wrapper {
            margin-bottom: 20px;
            .size-list-wrapper {
              justify-content: center;
              display: flex;
            }
          }
          .size {
            margin-right: 20px;
          }
        }
        .cart {
          width: auto;
          height: 100px;
          margin: 0px 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.2s linear;
          position: relative;
          top: 1px;
        }
      }
    }
  }
}

</style>
