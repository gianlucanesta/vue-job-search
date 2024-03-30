<template>
  <h1 class="text-6xl font-bold">Job Results Page</h1>
  <h2>Experiment: {{ experiment }}</h2>
</template>

<script>
export default {
  name: 'JobResultsView',
  computed: {
    experiment() {
      console.log(this.$router)
      return 'irrilevant'
    }
  }
}
</script>
