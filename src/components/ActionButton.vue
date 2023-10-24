<template>
  <button @click="handleClick" :class="{ primary: true }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  methods: {
    handleClick(event) {
      console.log(event)
    }
  },
  props: ['text']
}
</script>
<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}
</style>
