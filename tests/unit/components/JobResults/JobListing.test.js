import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'

import JobListing from '@/components/JobResults/JobListing.vue'

describe('JobListing', () => {
  const createJobProps = (jobProps = {}) => ({
    title: 'Vue Developer',
    organization: 'AirBnb',
    ...jobProps
  })
  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      },
      props: {
        job: {
          ...jobProps
        }
      }
    })
  }
  it('renders job title', () => {
    const jobProps = createJobProps({ title: 'Vue Developer' })
    renderJobListing(jobProps)
    // expect(screen.getByText("Vue Developer")).toBeInTheDocument()
  })

  it('renders job organization', () => {
    const jobProps = createJobProps({ organization: 'AirBnb' })
    renderJobListing(jobProps)
    // expect(screen.getByText("AirBnb")).toBeInTheDocument()
  })
})
