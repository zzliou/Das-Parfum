import { defineStore } from 'pinia'
import {
  GoogleAuthProvider,
} from 'firebase/auth'
import { db, storage } from '@/utils/firebase'
import { ref as dbRef, set, onValue } from 'firebase/database'
import { getDownloadURL, ref as storageRef } from "firebase/storage";
const googleProvider = new GoogleAuthProvider()

export const useProductStore = defineStore('product', {
  state: () => ({
    productList: null,
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
        console.log(src,'啦啦啦')
        sizeConfig.imageSrc = src
      } catch (error) {
        sizeConfig.imageSrc = null
      }

    }
  }

})
