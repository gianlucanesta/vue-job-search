<template>
  <job-filters-sidebar-checkbox-group
    header="Organizations"
    :unique-values="UNIQUE_ORGANIZATIONS"
    :action="userStore.ADD_SELECTED_ORGANIZATIONS"
  />
</template>

<script lang="ts" setup>
import JobFiltersSidebarCheckboxGroup from './JobFiltersSidebarCheckboxGroup.vue'
import { useJobsStore } from '@/stores/jobs'
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'
const userStore = useUserStore()
const jobsStore = useJobsStore()
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS)
</script>
