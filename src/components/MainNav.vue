<template>
  <header class="w-full text-sm">Main Nav</header>
  <div class="fixed top-0 left-0 w-full h-16 bg-white">
    <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1">
      <a class="flex h-full items-center text-xl" href="/">{{ company }}</a>
      <h2 class="ml-8 flex h-full items-center">
        Developed by {{ author.firstName }} {{ author.lastName }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'My Career',
      author: {
        firstName: 'Gianluca',
        lastName: 'Nesta'
      }
    }
  }
}
</script>
