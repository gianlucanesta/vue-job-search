<template>
  <JobFiltersSidebarCheckboxGroup
    header="Degrees"
    :unique-values="UNIQUE_DEGREES"
    :action="userStore.ADD_SELECTED_DEGREES"
  />
</template>

<script lang="ts" setup>
import JobFiltersSidebarCheckboxGroup from './JobFiltersSidebarCheckboxGroup.vue'
import { useDegreesStore } from '@/stores/degrees'
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'
const userStore = useUserStore()
const degreesStore = useDegreesStore()
const UNIQUE_DEGREES = computed(() => degreesStore.UNIQUE_DEGREES)
</script>
