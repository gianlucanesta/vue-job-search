<template>
  <collapsible-accordion :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-col columns-12">
          <li v-for="value in unicValues" :key="value" class="h-8 w-full">
            <input
              :id="value"
              v-model="selectValues"
              :value="value"
              type="checkbox"
              class="mr-3 cursor-pointer"
              @change="selectValue"
            />
            <label :for="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'

const props = defineProps({
  header: {
    type: String,
    required: true
  },
  unicValues: {
    type: Set,
    required: true
  },
  action: {
    type: Function,
    required: true
  }
})

const selectedValues = ref([])

const router = useRouter()
const selectValue = () => {
  props.action(selectedValues.value)
  router.push({ name: 'JobResults' })
}
</script>
