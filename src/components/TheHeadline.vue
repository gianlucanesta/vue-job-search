<template>
  <section>
    <h1>Build for everyone</h1>
    <h2>Find your next job</h2>
  </section>
</template>

<script>
export default {
  name: 'TheHeadline',
  data() {
    return {
      sample: 'Hello'
    }
  },
  created() {
    console.log("hey, I've been created. My data exists now: ", this.sample)
  }
}
</script>
