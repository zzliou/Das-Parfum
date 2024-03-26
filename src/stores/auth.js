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
import { useUiStore } from './ui'

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
    signInWithGoogle() {
      try {
        signInWithPopup(auth, googleProvider).then(res => {
          const response = res
          this.user = response.user
          this.createGoogleUserData().then(() => {
            this.getUserData();
            const uiStore = useUiStore();
            uiStore.hideLoginPopup();
            return true;
          })
        })
      } catch (error) {
        console.error(error)
        return false;
      }
    },
     createGoogleUserData() {
      const userRef = dbRef(db, 'users/' + this.user.uid)
      return set(userRef, {
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
          const uiStore = useUiStore();
          uiStore.hideLoginPopup();
        })
        .catch((error) => {
          console.log('登入帳密錯誤', error)
        })
    },
    signUpWithEmail(email, password) {
      createUserWithEmailAndPassword(auth, email, password)
      .then(data => data.user).then((user) => {
        this.user = user;
        this.createUserData(user.email.split('@')[0])
        const uiStore = useUiStore();
        uiStore.hideLoginPopup();
      })
      .catch(error => {
        console.log('註冊失敗，直接登入',email, password)
        this.signInWithEmail(email, password)
      })
    },
    createUserData(displayName) {
      const userRef = dbRef(db, 'users/' + this.user.uid)
      return set(userRef, {
        name: displayName,
      });
    },
    getUserData() {
      return new Promise((resolve) => {
        const userRef = dbRef(db, 'users/' + this.user.uid)
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val()
          this.userDb = userData;
          resolve();
        })
      })
    },
    checkAuthState() {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(auth,(user) => {
          console.log(user,'user')
          if (user) {
            this.user = user
            this.getUserData().then(() => {
              resolve(user)
            })
          } else {
            this.user = null
            resolve(null)
          }
        }, reject)
      })
    },
    setCartData() {
      const cartStore = useCartStore();
      const shopcartList = cartStore.cartList
      console.log(shopcartList,'shopcartList')
      const userRef = dbRef(db, 'users/' + this.user.uid)
      update(userRef, {
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
