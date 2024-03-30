<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1">
        <router-link class="flex h-full items-center text-xl ml-5" :to="{ name: 'Home' }"
          >My Career</router-link
        >

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem" class="ml-9 h-full first:ml-0">
              <a href="" class="flex h-full items-center py-2.5"> {{ menuItem }}</a>
            </li>
          </ul>
        </nav>

        <div class="ml-auto mr-5 flex h-full items-center">
          <ProfileImage v-if="isLoggedIn" @click="logoutUser" />
          <ActionButton v-else text="Sign in" type="secondary" @click="loginUser" class="rounded" />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
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
      menuItems: ['Teams', 'Locations', 'Life at Corp', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false
    }
  },
  computed: {
    headerHeightClass() {
      return this.isLoggedIn ? 'h-32' : 'h-16'
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    },
    logoutUser() {
      this.isLoggedIn = false
    }
  }
}
</script>
