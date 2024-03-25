<template>
  <!-- <button :class="buttonClass" @click="doubleHeight">
    Height {{ height }} Area {{ area }}
    {{ text }}
  </button> -->
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  computed: {
    area() {
      return this.width * this.height
    }
  },
  methods: {
    handleClick(event) {
      console.log(event)
    },
    doubleHeight() {
      this.height = this.height * 2
    }
  },
  props: ['text'],
  data() {
    return {
      primary: true,
      width: 10,
      height: 5
    }
  },
  computed: {
    buttonClass() {
      return {
        primary: this.primary,
        secondary: !this.primary
      }
    }
  }
}
</script>
<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}

.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2  hover:text-white;
}
</style>
