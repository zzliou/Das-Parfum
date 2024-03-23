import { defineStore } from 'pinia'
import { db, storage } from '@/utils/firebase'
import { ref as dbRef, update } from 'firebase/database'
import { useAuthStore } from '@/stores/auth'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartList: []
  }),
  actions: {
    addProduct(product){
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
    },
    deleteProduct(product) {
      this.cartList = this.cartList.filter(p => p.id !== product.id)
    },
    setList(list) { console.log(list, 'ssetlist')
      if(Array.isArray(list)){
        this.cartList = list
      }else {
        this.cartList = []
      }
    },
    async submit(){
      const authStore = useAuthStore()

      const userRef = dbRef(db, 'users/' + authStore.user.uid)
      await update(userRef, {
        order: this.cartList
      });
    }
  }

})
