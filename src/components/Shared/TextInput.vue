|
<template>
  <input
    type="text"
    :value="modelValue"
    class="h-full w-full text-lg font-normal border-0 bg-transparent p-2 pr-12 focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  methods: {
    handleInput($event) {
      this.value = $event.target.value
      this.$emit('update:modelValue', this.value)
    }
  }
}
</script>
