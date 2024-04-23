import { defineStore } from 'pinia'
import { db, storage } from '@/utils/firebase'
import { ref as dbRef, update } from 'firebase/database'
import { useAuthStore } from '@/stores/auth'

export const useWishStore = defineStore('wish', {
  state: () => ({
    wishList: []
  }),
  actions: {
    addProduct(product){
      const existingProduct = this.wishList.find(item => { 
        return item.id === product.id && item.selectedSizeIndex === product.selectedSizeIndex 
      });
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        let deepCloneProduct = JSON.parse(JSON.stringify(product))
        deepCloneProduct['quantity'] = 1;
        this.wishList.push(deepCloneProduct);
      }
    },
    deleteProduct(product) {
      this.wishList = this.wishList.filter(p => p.id !== product.id)
    },
    setList(list) {
      if(Array.isArray(list)){
        this.wishList = list
      }else {
        this.wishList = []
      }
    },
    submit(){
      const authStore = useAuthStore()

      const userRef = dbRef(db, 'users/' + authStore.user.uid)
      update(userRef, {
        wish: this.wishList
      });
      this.clearCart();
    },
    clearWishList() { 
      this.wishList = [];
    }
  }

})
