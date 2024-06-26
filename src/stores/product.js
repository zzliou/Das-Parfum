import { defineStore } from 'pinia'
import { db, storage } from '@/utils/firebase'
import { ref as dbRef, onValue } from 'firebase/database'
import { getDownloadURL, ref as storageRef } from "firebase/storage";
export const useProductStore = defineStore('product', {
  state: () => ({
    productList: null,
    filterList: null
  }),
  actions: {
    getProductList() {
      return new Promise((resolve) => {
        const productListRef = dbRef(db, 'product')
        onValue(productListRef, (snapshot) => {
          const data = snapshot.val()
          console.log(data)
          data.forEach(product => {
            product.sizeList.forEach(sizeConfig => {
              this.getProductImage(sizeConfig)
            })
          })
          setTimeout(() => {
            this.productList = data;
            this.filterList = data;
          }, 1000);
        })
      })

    },
    getProductImage(sizeConfig) {
      const pathReference = storageRef(storage, sizeConfig.imagePath);
      getDownloadURL(pathReference).then(res => {
        const src = res
        sizeConfig.imageSrc = src
      }).catch(err => {
        sizeConfig.imageSrc = null
        console.log(err)
      })
    },
    setCurrentProduct(product) {
      this.currentProduct = product
    },
    setFilterList(type) {
      if(type === 'all') {
        this.filterList = this.productList
      }else {
        this.filterList = this.productList.filter(product => product.tag === type)
      }
    }
  }

})
