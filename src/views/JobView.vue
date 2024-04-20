<template>
  <div>Job Page {{ currentJobId }}</div>
</template>

<script lang="ts">
export default {
  name: 'JobView',
  computed: {
    currentJobId() {
      return this.$route.params.id
    }
  }
}
</script>
