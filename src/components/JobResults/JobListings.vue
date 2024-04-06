<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
        </div>
        <div class="flex items-center justify-center">
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import JobListing from '@/components/JobResults/JobListing.vue'
export default {
  name: 'JobListings',
  components: {
    JobListing
  },
  data() {
    return {
      jobs: []
    }
  },
  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || 1)
    },
    previousPage() {
      const previousPage = this.currentPage - 1
      const firstPage = 1
      return previousPage >= firstPage ? previousPage : undefined
    },
    nextPage() {
      const nextPage = this.currentPage + 1
      const maxPage = Math.ceil(this.jobs.length / 10)
      return this.currentPage < maxPage ? nextPage : undefined
    },
    displayedJobs() {
      const pageNumber = this.currentPage
      const firstJobIndex = (pageNumber - 1) * 10
      const lastJobIndex = firstJobIndex + 10
      if (this.jobs.length > 0) {
        return this.jobs.slice(firstJobIndex, lastJobIndex)
      } else {
        return []
      }
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:5000/jobs')
    this.jobs = response.data
  }
}
</script>
