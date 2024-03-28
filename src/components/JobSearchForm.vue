<template>
  <form class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label for="" class="absolute left-0 -top-10">Role</label>
        <input
          type="text"
          :value="role"
          placeholder="Software engineer"
          class="h-full w-full text-lg font-normal border-0 bg-transparent p-2 pr-12 focus:outline-none"
        />
        <span
          class="flex h-full items-center border-l border-r border-solid border-brand-gray-3 bg-brand-gray-2 px-3"
        >
          in
        </span>
      </div>
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label for="" class="absolute left-0 -top-10">Where?</label>
        <input
          type="text"
          :value="location"
          placeholder="Los Angeles, CA"
          class="h-full w-full text-lg font-normal border-0 bg-transparent p-2 pr-12 focus:outline-none"
        />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from '@/components/ActionButton.vue'
export default {
  name: 'JobSearchForm',
  data() {
    return {
      role: '',
      location: ''
    }
  },
  components: { ActionButton }
}
</script>
