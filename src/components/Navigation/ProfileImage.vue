<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" alt="User profile image" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const imageLink = ref(
  'https://lh3.googleusercontent.com/ogw/AF2bZyiPvvefZHrZaUx1mWE77ALRFAtohHvwi_D3mXBynPqBVWk=s32-c-mo'
)
</script>
