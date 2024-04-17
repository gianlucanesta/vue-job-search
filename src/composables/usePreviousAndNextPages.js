import { computed } from 'vue'

const usePreviousAndNextPages = (currentPage, maxPage) => {
  const previousPage = computed(() => {
    if (currentPage.value > 1) {
      return currentPage.value - 1
    } else {
      return null
    }
  })

  const nextPage = computed(() => {
    const nextPage = currentPage.value + 1
    return currentPage.value < maxPage.value ? nextPage : undefined
  })

  return { previousPage, nextPage }
}

export default usePreviousAndNextPages
