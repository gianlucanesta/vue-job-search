<template>
  <input
    type="text"
    :value="value"
    class="h-full w-full text-lg font-normal border-0 bg-transparent p-2 pr-12 focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'TextInput',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    handleInput($event) {
      this.value = $event.target.value
    }
  }
}
</script>
