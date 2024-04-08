import { render, screen } from '@testing-library/vue'
import { createTestingPinia } from '@pinia/testing'

import TheSubnav from '@/components/Navigation/TheSubnav.vue'
import { useJobsStore } from '@/stores/jobs'

describe('TheSubnav', () => {
  const renderTheSubnav = (routeName) => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()
    render(TheSubnav, {
      global: {
        plugins: [pinia],
        mocks: {
          $route: { name: routeName }
        },
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })

    return { jobsStore }
  }

  describe("when the user is on the 'Jobs' page", () => {
    it('displays jobs count', async () => {
      const routeName = 'JobResults'
      const { jobsStore } = renderTheSubnav(routeName)
      const numberOfJobs = 16
      jobsStore.FILTERED_JOBS_BY_ORGANIZATION = Array(numberOfJobs).fill({})

      const jobCount = await screen.findByText(numberOfJobs)

      expect(jobCount).toBeInTheDocument()
    })
  })

  describe("when the user is not on the 'Jobs' page", () => {
    it('does NOT displays jobs count', async () => {
      const routeName = 'Home'
      const { jobsStore } = renderTheSubnav(routeName)
      const numberOfJobs = 16
      jobsStore.FILTERED_JOBS_BY_ORGANIZATION = Array(numberOfJobs).fill({})

      renderTheSubnav(routeName)

      const jobCount = await screen.queryByText(numberOfJobs)

      expect(jobCount).not.toBeInTheDocument()
    })
  })
})
