<template>
  <main-nav></main-nav>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import MainNav from '@/components/Navigation/MainNav.vue'
</script>

<style>
main {
  min-height: 100vh;
}
</style>
