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

<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore, ADD_SELECTED_JOB_TYPES } from '@/stores/user'
import { useJobsStore, UNIQUE_JOB_TYPES } from '@/stores/jobs'
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
export default {
  name: 'JobFiltersSidebarJobTypes',
  components: {
    CollapsibleAccordion
  },
  data() {
    return {
      selectedJobTypes: []
    }
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_JOB_TYPES])
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_JOB_TYPES]),
    selectJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes)
    }
  }
}
</script>
