import { render, screen } from '@testing-library/vue'
import JobListings from '@/components/JobResults/JobListings.vue'
import axios from 'axios'
import { RouterLinkStub } from '@vue/test-utils'

vi.mock('axios')
describe('JobListings', () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: 1,
      ...queryParams
    }
  })

  const renderJobListings = ($route = {}) => {
    render(JobListings, {
      global: {
        mocks: {
          $route
        },
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    })
  }
  it('fetches jobs', () => {
    axios.get.mockResolvedValue({
      data: {
        jobs: []
      }
    })
    const $route = createRoute()

    renderJobListings($route)
    expect(axios.get).toHaveBeenCalledWith('http://localhost:5000/jobs')
  })
  it('displays maximum of 10 jobs', async () => {
    axios.get.mockResolvedValue({
      data: Array(15).fill({})
    })
    const queryParams = {
      page: 1,
      role: 'Vue Developer',
      location: 'London'
    }
    const $route = createRoute(queryParams)
    renderJobListings($route)
    const jobListings = await screen.findAllByRole('listitem')
    expect(jobListings).toHaveLength(10)
  })
})
