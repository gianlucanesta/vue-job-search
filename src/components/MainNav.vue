<template>
  <header class="w-full text-sm">Main Nav</header>
  <div class="fixed top-0 left-0 w-full h-16 bg-white">
    <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1">
      <a class="flex h-full items-center text-xl ml-5" :href="url">{{ company }}</a>

      <nav class="ml-12 h-full">
        <ul class="flex h-full list-none">
          <li class="h-full">
            <a href="" class="flex h-full items-center py-2.5">Teams</a>
          </li>
          <li class="ml-9 h-full">
            <a href="" class="flex h-full items-center py-2.5">Location</a>
          </li>
          <li class="ml-9 h-full">
            <a href="" class="flex h-full items-center py-2.5">Life at Corp</a>
          </li>
          <li class="ml-9 h-full">
            <a href="" class="flex h-full items-center py-2.5">How we hire</a>
          </li>
          <li class="ml-9 h-full">
            <a href="" class="flex h-full items-center py-2.5">Students</a>
          </li>
          <li class="ml-9 h-full">
            <a href="" class="flex h-full items-center py-2.5">Jobs</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'My Career',
      url: 'https://careers.google.com'
    }
  }
}
</script>
