import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => ({
    isLoggedIn: false
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
