<template>
  <main class="flex h-screen flex-col">
    <section class="pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2"><the-headline /><job-search-form /></div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
            src="https://www.gstatic.com/hiring/CportalUi/hero_4_1x.png"
            alt="hero illustration"
            class="w-80"
          />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>

    <spot-light class="flex flex-row justify-center pb-16">
      <template #default="slotProps">
        <router-link
          to="/jobs/results"
          class="mx-5 flex h-[268px] w-[530px] flex-col rounded-lg border bg-brand-gray-2"
        >
          <div
            :style="{ 'background-image': 'url(' + slotProps.spotlight.img + ')' }"
            class="flex h-full flex-col justify-end bg-cover"
          ></div>

          <div class="text-black">
            <div class="px-6 py-4">
              <h3 class="text-xl">{{ slotProps.spotlight.title }}</h3>

              <p class="pt-4">{{ slotProps.spotlight.description }}</p>
            </div>
          </div>

          <router-link to="/jobs/results" class="px-6 pb-4 text-sm text-brand-blue-1"
            >See jobs</router-link
          >
        </router-link>
      </template>
    </spot-light>
  </main>
</template>
<script>
import TheHeadline from '@/components/JobSearch/TheHeadline.vue'
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue'
import SpotLight from './SpotLight.vue'

export default {
  name: 'TheHero',
  components: {
    TheHeadline,
    JobSearchForm,
    SpotLight
  }
}
</script>
