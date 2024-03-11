<template>
  <div class="container">
    <div class="navbar">
      <div class="productsCategories">
        <p @click="changeType('all')">全部商品</p>
        <p @click="changeType('shampooList')">髮品</p>
        <p @click="changeType('bodyList')">身體乳</p>
        <p @click="changeType('combineList')">送禮組合</p>
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
                  :key="sizeOptionIndex">
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
          <div class="cart" @click="addCart(product)">加入購物車</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import pic001 from "@/assets/img/Product.pic/p001.png";
import pic002 from "@/assets/img/Product.pic/p002.png";
import pic003 from "@/assets/img/Product.pic/p003.png";
import pic006 from "@/assets/img/Product.pic/p006.png";
import pic007 from "@/assets/img/Product.pic/p007.png";
import pic009 from "@/assets/img/Product.pic/p009.png";
import pic010 from "@/assets/img/Product.pic/p010.png";
import pic013 from "@/assets/img/Product.pic/p013.png";
import pic014 from "@/assets/img/Product.pic/p014.png";
import pic015 from "@/assets/img/Product.pic/p015.png";
import pic016 from "@/assets/img/Product.pic/p016.jpg";
import set001 from "@/assets/img/Home.pic/home-set/set001.png";
import set002 from "@/assets/img/Home.pic/home-set/set002.png";
import set003 from "@/assets/img/Home.pic/home-set/set003.png";
import set004 from "@/assets/img/Home.pic/home-set/set004.png";

const router = useRouter()
let productList = ref([
  {
    title: '甜橙香檸身體凝乳',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic014
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic015
      }
    ],
    id: 1
  },
  {
   
    title: '芫荽籽身體凝乳',
    subtitle: '溫暖木質辛香',
    size: '容量',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic014
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic015
      }
    ],
    price: 'NT$600起',
    id: 2
  },
  {
    title: '玫瑰身體凝乳',
    subtitle: '玫瑰花、豆蔻、黑胡椒',
    size: '容量',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic014
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic015
      }
    ],
    id: 3
  },
  {
    title: '天竺葵清香清潔髮露',
    subtitle: '綠色、柑橘、清爽幽香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic010
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic014
      }
    ],
    id: 4
  },
  {
    title: '森林潤髮油',
    subtitle: '清新的高山樟香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic010
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic014
      }
    ],
    id: 5
  },
  {
    title: '天竺葵髮香噴霧',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic006
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic016
      }
    ],
    id: 6
  },
  {
    title: '天竺葵頭皮露',
    subtitle: '綠色、柑橘、清爽幽香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic007
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic016
      }
    ],
    id: 7
  },
  {
    title: '橙香萬用油',
    subtitle: '柑橘、清爽幽香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic009
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic015
      }
    ],
    id: 8
  },
  {
    title: '晨沐薰衣草面霜',
    subtitle: '薰衣草、朝露、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic001
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic013
      }
    ],
    id: 9
  },
  {
    title: '香草森林面霜',
    subtitle: '香草、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic002
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic013
      }
    ],
    id: 10
  },
  {
    title: '苦橙香檸面霜',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic003
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic013
      }
    ],
    id: 11
  },
  {
    title: '柑橘無油足膜',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic001
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic002
      }
    ],
    id: 12
  },
  {
    title: '綠薄荷淡香足膜',
    subtitle: '綠薄荷、泛醇',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic003
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic002
      }
    ],
    id: 13
  },
  {
    title: '春心和聲',
    subtitle: '手部清潔露、廁後點滴、室內噴霧',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: set001
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: set001
      }
    ],
    id: 14
  },
  {
    title: '夏戀慷慨節奏',
    subtitle: '天竺葵身體潔膚露、去角質露、身體乳霜',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: set002
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: set002
      }
    ],
    id: 15
  },
  {
    title: '秋頌寓言曲調',
    subtitle: '護手霜、潔膚露、護唇膏',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: set003
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: set003
      }
    ],
    id: 16
  },
  {
    title: '冬禮手作諧美聲部',
    subtitle: '護手霜、清潔露、乾洗手',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: set004
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: set004
      }
    ],
    id: 17
  }
])

let shampooList = ref([
{
    title: '天竺葵清香清潔髮露',
    subtitle: '綠色、柑橘、清爽幽香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic010
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic014
      }
    ],
    id: 1
  },
  {
    title: '森林潤髮油',
    subtitle: '清新的高山樟香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic010
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic014
      }
    ],
    id: 2
  },
  {
    title: '天竺葵髮香噴霧',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic006
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic016
      }
    ],
    id: 3
  },
  {
    title: '天竺葵頭皮露',
    subtitle: '綠色、柑橘、清爽幽香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic007
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic016
      }
    ],
    id: 4
  },
  {
    title: '橙香萬用油',
    subtitle: '柑橘、清爽幽香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic009
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic015
      }
    ],
    id: 5
  },
])
let bodyList = ref([
  {
    title: '甜橙香檸身體凝乳',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic014
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic015
      }
    ],
    id: 1
  },
  {
   
    title: '芫荽籽身體凝乳',
    subtitle: '溫暖木質辛香',
    size: '容量',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic014
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic015
      }
    ],
    price: 'NT$600起',
    id: 2
  },
  {
    title: '玫瑰身體凝乳',
    subtitle: '玫瑰花、豆蔻、黑胡椒',
    size: '容量',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic014
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic015
      }
    ],
    id: 3
  },
  {
    title: '橙香萬用油',
    subtitle: '柑橘、清爽幽香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic009
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic015
      }
    ],
    id: 4
  },
  {
    title: '晨沐薰衣草面霜',
    subtitle: '薰衣草、朝露、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic001
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic013
      }
    ],
    id: 5
  },
  {
    title: '香草森林面霜',
    subtitle: '香草、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic002
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic013
      }
    ],
    id: 6
  },
  {
    title: '苦橙香檸面霜',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic003
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic013
      }
    ],
    id: 7
  },
  {
    title: '柑橘無油足膜',
    subtitle: '柑橘、木質、草本芳香',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: pic001
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: pic002
      }
    ],
    id: 8
  },
])
let combineList = ref([
  {
    title: '春心和聲',
    subtitle: '手部清潔露、廁後點滴、室內噴霧',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: set001
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: set001
      }
    ],
    id: 1
  },
  {
    title: '夏戀慷慨節奏',
    subtitle: '天竺葵身體潔膚露、去角質露、身體乳霜',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: set002
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: set002
      }
    ],
    id: 2
  },
  {
    title: '秋頌寓言曲調',
    subtitle: '護手霜、潔膚露、護唇膏',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: set003
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: set003
      }
    ],
    id: 3
  },
  {
    title: '冬禮手作諧美聲部',
    subtitle: '護手霜、清潔露、乾洗手',
    selectedSizeIndex: 0,
    sizeList: [
      {
        capacity: 100,
        price: 500,
        imageSrc: set004
      },
      {
        capacity: 500,
        price: 1400,
        imageSrc: set004
      }
    ],
    id: 4
  },
])
let selectedTypeList = ref(productList.value)


function handleChangeSize(product, sizeOptionIndex) {
  product.selectedSizeIndex = sizeOptionIndex
}

function goToProductPage(product) {
  router.push({ name: 'insidepagesView' ,
  params: {
    product: JSON.stringify(product)
  }
 })
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

let globalObject = getCurrentInstance().appContext.config;
let cartList = globalObject.cartList;

// function addCart(product) {
//   let good = product;
//   good['quantity'] = 1;
//   cartList.push(good)
// }
function addCart(product) {
  // 檢查是否已存在相同 id 的物件
  const existingProduct = cartList.find(item => item.id === product.id);

  if (existingProduct) {
    // 如果已存在，將該物件的 quantity 屬性 +1
    existingProduct.quantity++;
  } else {
    // 如果不存在，將該物件添加到 cartList 中
    let good = product;
    good['quantity'] = 1;
    cartList.push(good);
  }
}


window.scrollTo( 0, 0);
window.scrollTo({
    top: 0,
    behavior: "smooth"
});

</script>

<style lang="scss" scoped>

.container {
  background-color: $color-1;
  .navbar {
    display: flex;
    align-items: center;
    background-color: $color-7;

    .productsCategories {
      display: flex;
      color: $color-8;
      padding: 20px 0px 20px 100px;

      @include mac {
        padding: 10px 0px 10px 100px;
      }

      @include pad {
        padding: 5px 0px 5px 100px;
      }

      p {
        padding: 0px 10px;
        &:hover {
        cursor: pointer;
        text-decoration: underline;
        }
      }
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
      padding: 100px;

      @include mac {
        padding: 80px;
      }
      @include pad {
        padding: 50px;
      }

      .maintitle {
        font-size: 24px;
        padding: 30px 0px;
        @include mac {
          font-size: 22px;
        }
        @include pad {
          font-size: 20px;
        }
      }

      .description {
        font-size: 18px;
        line-height: 3;
        @include mac {
          font-size: 16px;
        }
        @include pad {
          font-size: 16px;
        }
      }
    }

    .section {
      width: 33%;
      box-sizing: border-box;

      .productPic {
        background-color: $color-5;
        text-align: center;
        margin: 0 2px;

        img {
          width: 400px;
          height: 600px;
          object-fit: contain;
          @include mac {
            width: 300px;
            height: 500px;
          }
          @include pad {
            width: 250px;
            height: 450px;
          }
        }
        &:hover {
          cursor: pointer;
        }
      }

      .productInfo {
        width: auto;
        text-align: center;
        height: 300px;
        @include  mac {
          height: 245px;
        }
        @include  pad {
          height: 245px;
        }
        color: $color-8;
        transition: all 0.2s linear;
        margin: 0 2px;
        &:hover {
          background-color: $color-5;
          cursor: pointer;
          .cart {
            border: solid 1px $color-11;
            background-color: $color-11;
            width: auto;
            height: 60px;
            margin: 0px 0px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: $color-5;
            opacity: 1;
            position: relative;
            top: 20px;
            &:active{
              box-shadow: 0 0 10px $color-11;
            }
            @include mac {
              top: 14px;
              height: 40px;
            }
            @include pad {
              top: 14px;
              height: 40px;
            }
          }
        }

        .productitle {
          font-size: 20px;
          font-weight: 600;
          padding-top: 30px;
          padding-bottom: 20px;
        }

        .subtitle {
          font-size: 14px;
          color: $color-8;
          margin-bottom: 50px;
          @include mac {
            margin-bottom: 25px;
          }
          @include pad {
            margin-bottom: 20px;
          }
        }

        .sizenprice {
          .size-wrapper {
            margin-bottom: 20px;
            .size-list-wrapper {
              justify-content: center;
              display: flex;
              input {
                cursor: pointer;
              }
            }
          }
          .size {
            margin-right: 20px;
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

</style>
