<template>
  <header class="w-full text-sm">Main Nav</header>
  <div class="fixed top-0 left-0 w-full h-16 bg-white">
    <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1">
      <a class="flex h-full items-center text-xl ml-5" :href="url">{{ company }}</a>

      <nav class="ml-12 h-full">
        <ul class="flex h-full list-none">
          <li v-for="menuItem in menuItems" :key="menuItem" class="ml-9 h-full first:ml-0">
            <a href="" class="flex h-full items-center py-2.5"> {{ menuItem }}</a>
          </li>
        </ul>
      </nav>

      <div class="ml-auto mr-5 flex h-full items-center"><ActionButton /></div>
    </div>
  </div>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue'
export default {
  name: 'MainNav',
  components: {
    ActionButton
  },
  data() {
    return {
      company: 'My Career',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Locations', 'Life at Corp', 'How we hire', 'Students', 'Jobs']
    }
  }
}
</script>
