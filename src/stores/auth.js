import { defineStore } from 'pinia'
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import { auth, db } from '@/utils/firebase'
import { ref as dbRef, set, onValue, child, push, update } from 'firebase/database'
import { useCartStore } from '@/stores/cart'
import { useOrderStore } from '@/stores/order'

const googleProvider = new GoogleAuthProvider()

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    userDb: null
  }),
  getters: {
    isLogin() {
      return this.user !== null;
    },
  },
  actions: {
    async signInWithGoogle() {
      try {
        const response = await signInWithPopup(auth, googleProvider)
        this.user = response.user
        await this.createGoogleUserData();
        await this.getUserData();
        return true;
      } catch (error) {
        console.error(error)
        return false;
      }
    },
    async createGoogleUserData() {
      const userRef = dbRef(db, 'users/' + this.user.uid)
      await set(userRef, {
        name: this.user.displayName,
      });
    },
    signInWithEmail(email, password) {
      signInWithEmailAndPassword(auth, email, password)
       .then(data => data.user)
        .then((user) => {
          console.log(user,'useruser')
          this.user = user
          this.getUserData(user)
        })
        .catch((error) => {
          console.log('登入帳密錯誤', error)
        })
    },
    async signUpWithEmail(email, password) {
      createUserWithEmailAndPassword(auth, email, password)
      .then(data => data.user).then(async (user) => {
        this.user = user;
        await this.createUserData(user.email.split('@')[0])
        const cartStore = useCartStore();
        const shopcartList = cartStore.cartList
        console.log(shopcartList,'應該有')
        // await this.setCartData();
      })
      .catch(error => {
        console.log('註冊失敗，直接登入',email, password)
        this.signInWithEmail(email, password)
      })
    },
    async createUserData(displayName) {
      const userRef = dbRef(db, 'users/' + this.user.uid)
      await set(userRef, {
        name: displayName,
      });
    },
    async getUserData() {
      const userRef = dbRef(db, 'users/' + this.user.uid)
      await onValue(userRef, (snapshot) => {
        const userData = snapshot.val()
        this.userDb = userData;
      })
    },
    async checkAuthState() {console.log('checkAuthState')
      return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
          console.log(user,'user')
          if (user) {
            this.user = user
            await this.getUserData();
            resolve(user)
          } else {
            this.user = null
            resolve(null)
          }
        }, reject)
      })
    },
    async setCartData() {
      const cartStore = useCartStore();
      const shopcartList = cartStore.cartList
      console.log(shopcartList,'shopcartList')
      const userRef = dbRef(db, 'users/' + this.user.uid)
      await update(userRef, {
        cart: shopcartList
      });

    },
    logout() {
      signOut(auth).then(res => {
        console.log(res,'res')
        this.user = null
        this.clearUserData()
      })
    },
    clearUserData() {
      const orderStore = useOrderStore();
      this.user = null;
      this.userDb = null;
      orderStore.clearOrder();
    }
  }
})
