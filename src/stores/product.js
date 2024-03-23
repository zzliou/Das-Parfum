import { defineStore } from 'pinia'
import { db, storage } from '@/utils/firebase'
import { ref as dbRef, set, onValue } from 'firebase/database'
import { getDownloadURL, ref as storageRef } from "firebase/storage";

export const useProductStore = defineStore('product', {
  state: () => ({
    productList: null,
    currentProduct: null,
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
          this.productList = data;
        })
      })

    },
    async getProductImage(sizeConfig) {
      try {
        const pathReference = storageRef(storage, sizeConfig.imagePath);
        const src = await getDownloadURL(pathReference)
        sizeConfig.imageSrc = src
      } catch (error) {
        sizeConfig.imageSrc = null
      }
    },
    setCurrentProduct(product) {
      this.currentProduct = product
    }
  }

})