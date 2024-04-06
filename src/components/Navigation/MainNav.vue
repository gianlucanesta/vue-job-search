<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1">
        <router-link class="flex h-full items-center text-xl ml-5" :to="{ name: 'Home' }"
          >My Career</router-link
        >

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem.text" class="ml-9 h-full first:ml-0">
              <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">
                {{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="ml-auto mr-5 flex h-full items-center">
          <ProfileImage v-if="userStore.isLoggedIn" @click="logoutUser" />
          <ActionButton v-else text="Sign in" type="secondary" @click="loginUser" class="rounded" />
        </div>
      </div>
      <the-subnav v-if="userStore.isLoggedIn" />
    </div>
  </header>
</template>

<script>
import { mapStores } from 'pinia'
import useUserStore from '@/stores/user'
import ActionButton from '@/components/Shared/ActionButton.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'
import TheSubnav from '@/components/Navigation/TheSubnav.vue'

export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav
  },
  data() {
    return {
      menuItems: [
        {
          text: 'Teams',
          url: '/'
        },
        {
          text: 'Locations',
          url: '/'
        },
        {
          text: 'Life at Corp',
          url: '/'
        },
        {
          text: 'How we hire',
          url: '/'
        },
        {
          text: 'Students',
          url: '/'
        },
        {
          text: 'Jobs',
          url: '/jobs/results'
        }
      ]
    }
  },
  computed: {
    ...mapStores(useUserStore),
    headerHeightClass() {
      return this.userStore.isLoggedIn ? 'h-32' : 'h-16'
    }
  },
  methods: {
    loginUser() {
      this.userStore.isLoggedIn = true
    },
    logoutUser() {
      this.userStore.isLoggedIn = false
    }
  }
}
</script>
