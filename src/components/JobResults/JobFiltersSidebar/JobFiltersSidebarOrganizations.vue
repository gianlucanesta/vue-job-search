<template>
  <collapsible-accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-col columns-12">
          <li v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization" class="h-8 w-full">
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3 cursor-pointer"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
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

const selectedOrganizations = ref([])

const jobsStore = useJobsStore()
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS)

const userStore = useUserStore()
const router = useRouter()
const selectOrganization = () => {
  userStore.ADD_SELECTED_ORGANIZATIONS(selectedOrganizations.value)
  router.push({ name: 'JobResults' })
}
</script>
