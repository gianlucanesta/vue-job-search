<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span> <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job here</h2>
  </section>
</template>

<script lang="ts" setup>
import nextElementInList from '../../utils/nextElementInList'

import { ref, computed, onMounted, onBeforeMount } from 'vue'

const action = ref('Build')
const interval = ref<ReturnType<typeof setInterval>>()

const actionClasses = computed(() => {
  return {
    [action.value.toLowerCase()]: true
  }
})

const changeTitle = () => {
  interval.value = setInterval(() => {
    const actions = ['Build', 'Create', 'Design', 'Code']
    action.value = nextElementInList(actions, action.value)
  }, 3000)
}

onMounted(changeTitle)

onBeforeMount(() => {
  clearInterval(interval.value)
})

// export default {
//   name: 'TheHeadline',
//   data() {
//     return {
//       action: 'Build',
//       interval: null
//     }
//   },
//   computed: {
//     actionClasses() {
//       return {
//         [this.action.toLowerCase()]: true
//       }
//     }
//   },
//   created() {
//     this.changeTitle()
//   },
//   beforeUnmount() {
//     clearInterval(this.interval)
//   },
//   methods: {
//     changeTitle() {
//       this.interval = setInterval(() => {
//         const actions = ['Build', 'Create', 'Design', 'Code']
//         this.action = nextElementInList(actions, this.action)
//       }, 3000)
//     }
//   }
// }
</script>
<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
