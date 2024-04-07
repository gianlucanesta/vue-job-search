<template>
  <collapsible-accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="h-8 w-1/2">
            <input id="VueTube" type="checkbox" class="mr-3 cursor-pointer" />
            <label for="VueTube">VueTube</label>
          </li>

          <li class="h-8 w-1/2">
            <input id="Beetween Vue and Me" type="checkbox" class="mr-3 cursor-pointer" />
            <label for="Beetween Vue and Me">Beetween Vue and Me</label>
          </li>

          <li class="h-8 w-1/2">
            <input id="Et vue Brute" type="checkbox" class="mr-3 cursor-pointer" />
            <label for="Et vue Brute">Et vue Brute</label>
          </li>

          <li class="h-8 w-1/2">
            <input id="Vue and a Half Men" type="checkbox" class="mr-3 cursor-pointer" />
            <label for="Vue and a Half Men">Vue and a Half Men</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
export default {
  name: 'JobFiltersSidebarOrganizations',
  components: {
    CollapsibleAccordion
  }
}
</script>
