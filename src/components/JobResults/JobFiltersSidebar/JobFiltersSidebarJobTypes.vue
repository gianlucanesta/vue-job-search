<template>
  <collapsible-accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-col columns-12">
          <li v-for="jobType in UNIQUE_JOB_TYPES" :key="jobTypes" class="h-8 w-full">
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3 cursor-pointer"
              @change="selectJobType"
            />
            <label :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useJobsStore } from '@/stores/jobs'
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'

const selectedJobTypes = ref([])
const jobStore = useJobsStore()

const UNIQUE_JOB_TYPES = computed(() => jobStore.UNIQUE_JOB_TYPES)

const userStore = useUserStore()
const router = useRouter()
const selectJobType = () => {
  userStore.ADD_SELECTED_JOB_TYPES(selectedJobTypes.value)
  router.push({ name: 'JobResults' })
}
</script>
