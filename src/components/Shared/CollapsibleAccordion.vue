<template>
  <div class="border-b border-solid border-brand-gray-1 py-5">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      role="button"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>

      <font-awesome-icon :icon="caretIcon" />
    </div>

    <div v-if="isOpen" class="mt-5 w-full">
      <slot>
        <p>Whoops, somebody forgot to populate me!</p>
      </slot>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name: 'CollapsibleAccordion',
  setup() {
    const header = ref('Cool Title')
    const isOpen = ref(false)

    const open = () => {
      isOpen.value = !isOpen.value
    }

    const caretIcon = computed(() => {
      return isOpen.value ? ['fas', 'angle-up'] : ['fas', 'angle-down']
    })

    return { header, isOpen, open, caretIcon }
  }
  // data() {
  //   return {
  //     isOpen: false
  //   }
  // },
  // props: {
  //   header: {
  //     type: String,
  //     required: true
  //   }
  // },
  // methods: {
  //   open() {
  //     this.isOpen = !this.isOpen
  //   }
  // },
  // computed: {
  //   caretIcon() {
  //     return this.isOpen ? ['fas', 'angle-up'] : ['fas', 'angle-down']
  //   }
  // }
}
</script>
