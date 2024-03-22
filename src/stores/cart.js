import { defineStore } from 'pinia'
import { db, storage } from '@/utils/firebase'
import { ref as dbRef, set, onValue } from 'firebase/database'
import { getDownloadURL, ref as storageRef } from "firebase/storage";

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartList: []
  }),
  actions: {
    addProduct(product){ console.log('product');
      const existingProduct = this.cartList.find(item => { 
        return item.id === product.id && item.selectedSizeIndex === product.selectedSizeIndex 
      });
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        let deepCloneProduct = JSON.parse(JSON.stringify(product))
        deepCloneProduct['quantity'] = 1;
        this.cartList.push(deepCloneProduct);
      }
    }
  }

})
