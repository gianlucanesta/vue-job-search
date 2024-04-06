import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    return {
      isLoggedIn: false
    }
  }),
  actions: {
    loginUser() {
      this.isLoggedIn = true
    },
    logoutUser() {
      this.isLoggedIn = false
    }
  }
})
