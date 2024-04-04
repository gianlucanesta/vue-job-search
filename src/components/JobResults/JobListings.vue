<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
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
      return previousPage >= firstPage ? previousPage : null
    },
    nextPage() {
      return this.currentPage + 1
      const maxPage = Math.ceil(this.jobs.length / 10)
      return this.currentPage < maxPage ? this.currentPage + 1 : null
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
