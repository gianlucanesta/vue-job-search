import { createPinia, setActivePinia } from 'pinia'
import { useUsersStore } from '@/stores/user'

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('keeps track of if user is logged in', () => {
    // const store = useUsersStore()
    // expect(store.isLoggedIn).toBe(false)
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  describe('loginUser', () => {
    it('logs user in', () => {
      // const store = useUsersStore()
      // store.loginUser()
      // expect(store.isLoggedIn).toBe(true)
    })
  })
})
