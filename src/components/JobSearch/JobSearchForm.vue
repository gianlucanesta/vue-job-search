<template>
  <form class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label for="" class="absolute left-0 -top-10">Role</label>
        <!-- <input v-model="role" /> -->
        <text-input placeholder="Software engineer" />
        <span
          class="flex h-full items-center border-l border-r border-solid border-brand-gray-3 bg-brand-gray-2 px-3"
        >
          in
        </span>
      </div>
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label for="" class="absolute left-0 -top-10">Where?</label>
        <!-- <input v-model="location" /> -->
        <text-input placeholder="Los Angeles, CA" />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import TextInput from '../Shared/TextInput.vue'
export default {
  name: 'JobSearchForm',
  components: { ActionButton, TextInput },
  data() {
    return {
      role: '',
      location: ''
    }
  },
  methods: {}
}
</script>
