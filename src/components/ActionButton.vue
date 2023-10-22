<template>
  <button
    @click="handleClick"
    class="rounded border-0 bg-brand-blue-1 hover:shadow-blue px-5 py-3 font-medium text-white"
  >
    Sign in
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  methods: {
    handleClick(event) {
      console.log(event)
    }
  }
}
</script>
