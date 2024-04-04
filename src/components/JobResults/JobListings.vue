<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
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
    displayedJobs() {
      if (this.jobs.length > 0) {
        return this.jobs.slice(0, 10)
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
