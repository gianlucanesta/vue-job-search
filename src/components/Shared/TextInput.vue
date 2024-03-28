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
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    handleInput($event) {
      this.$emit('input', $event.target.value)
    }
  }
}
</script>
