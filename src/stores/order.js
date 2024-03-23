import { defineStore } from 'pinia'
import { db, storage } from '@/utils/firebase'
import { ref as dbRef, update, onValue } from 'firebase/database'
import { useAuthStore } from '@/stores/auth'

export const useOrderStore = defineStore('order', {
  state: () => ({
    order: []
  }),
  actions: {
    async getOrder() {
      const authStore = useAuthStore()

      const userRef = dbRef(db, 'users/' + authStore.user.uid)
      await onValue(userRef, (snapshot) => {
        const userData = snapshot.val()
        this.userDb = userData;
        this.order = this.userDb.order
      })
    },
    clearOrder() {
      this.order = [];
    }
  }

})
