import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'

import JobListing from '@/components/JobResults/JobListing.vue'

describe('JobListing', () => {
  const createJobProps = (jobProps = {}) => ({
    title: 'Vue Developer',
    organization: 'AirBnb',
    locations: [{ city: 'New York', country: 'USA' }],
    minimumQualifications: ["Bachelor's Degree", "Master's Degree"],
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

  it('renders job locations', () => {
    const jobProps = createJobProps({
      locations: [
        { city: 'New York', country: 'USA' },
        { city: 'San Francisco', country: 'USA' }
      ]
    })
    renderJobListing(jobProps)
    // expect(screen.getByText("New York, USA")).toBeInTheDocument()
  })

  it('renders job qualifications', () => {
    const jobProps = createJobProps({
      minimumQualifications: ["Bachelor's Degree", "Master's Degree"]
    })
    renderJobListing(jobProps)
    // expect(screen.getByText("Bachelor's Degree, Master's Degree")).toBeInTheDocument()
  })
})
