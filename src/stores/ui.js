import { defineStore } from 'pinia'
import { db, storage } from '@/utils/firebase'
import { ref as dbRef, update, onValue } from 'firebase/database'
import { useAuthStore } from '@/stores/auth'

export const useUiStore = defineStore('ui', {
  state: () => ({
    loginPopup: false,
  }),
  actions: {
    showLoginPopup() {
      this.loginPopup = true;
    },
    hideLoginPopup() {
      this.loginPopup = false;
    }
  }

})
