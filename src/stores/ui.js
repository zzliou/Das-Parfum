import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    loginPopup: false,
    cartPreview: false,
    menuFadeIn: false,
  }),
  actions: {
    showLoginPopup() {
      this.loginPopup = true;
    },
    hideLoginPopup() {
      this.loginPopup = false;
    },
    showCartPreview() {
      this.cartPreview = true;
    },
    hideCartPreview() {
      this.cartPreview = false;
    },
    toggleMenuFadeIn() {
      this.menuFadeIn = !this.menuFadeIn;
    },
  }

})
