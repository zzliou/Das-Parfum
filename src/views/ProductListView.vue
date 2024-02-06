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
        <p @click="changeType('combineList')">組合</p>
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

])
let bodyList = ref([
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
])
let combineList = ref([
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
    id: 2
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

  // .icon {
  //   margin: 50px auto 50px 50px;
  // }

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
            top: 8px;
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
          top: 1px
        }
      }
    }
  }
}

</style>
