import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'

import JobListing from '@/components/JobResults/JobListing.vue'

import type { Job } from '@/api/types'
import { createJob } from 'tests/utils/createJob'

describe('JobListing', () => {
  const createJobProps = (jobProps = {}) => ({
    title: 'Vue Developer',
    organization: 'AirBnb',
    locations: [{ city: 'New York', country: 'USA' }],
    minimumQualifications: ["Bachelor's Degree", "Master's Degree"],
    ...jobProps
  })
  const renderJobListing = (job: Job) => {
    render(JobListing, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      },
      props: {
        job: {
          ...job
        }
      }
    })
  }
  it('renders job title', () => {
    const jobProps = createJob({ title: 'Vue Developer' })
    renderJobListing(jobProps)
    expect(screen.getByText('Vue Developer')).toBeInTheDocument()
  })

  it('renders job organization', () => {
    const jobProps = createJob({ organization: 'AirBnb' })
    renderJobListing(jobProps)
    expect(screen.getByText('AirBnb')).toBeInTheDocument()
  })

  it('renders job locations', () => {
    const jobProps = createJob({
      locations: ['New York', 'San Francisco']
    })
    renderJobListing(jobProps)
    expect(screen.getByText('New York, San Francisco')).toBeInTheDocument()
  })

  it('renders job qualifications', () => {
    const jobProps = createJob({
      minimumQualifications: ["Bachelor's Degree", "Master's Degree"]
    })
    renderJobListing(jobProps)
    expect(screen.getByText("Bachelor's Degree, Master's Degree")).toBeInTheDocument()
  })
})
