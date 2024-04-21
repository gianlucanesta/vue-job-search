<template>
  <main-nav></main-nav>
  <router-view></router-view>
</template>

<script lang="ts">
import MainNav from '@/components/Navigation/MainNav.vue'

export default {
  name: 'App',
  components: {
    MainNav
  }
}
</script>
