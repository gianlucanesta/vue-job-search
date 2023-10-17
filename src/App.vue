<template>
  <h1 class="mt-10 text-center text-6xl">Hello Vue</h1>
  <MainNav />
  <MainNav></MainNav>
  <main-nav />
  <main-nav></main-nav>
</template>

<script>
import MainNav from './components/MainNav.vue'

export default {
  name: 'App',
  components: {
    MainNav
  }
}
</script>
