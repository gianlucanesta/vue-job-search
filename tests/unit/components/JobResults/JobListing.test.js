import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'

import JobListing from '@/components/JobResults/JobListing.vue'

describe('JobListing', () => {
  it('renders job title', () => {
    const job = {
      title: 'Vue Developer'
    }
    render(JobListing, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      },
      props: {
        job
      }
    })
    const jobTitle = screen.getByText('Vue Developer')
    // expect(jobTitle).toBeInTheDocument()
  })

  it('renders job organization', () => {
    const job = {
      organization: 'Acme Inc.'
    }
    render(JobListing, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      },
      props: {
        job
      }
    })
    const jobOrganization = screen.getByText('Acme Inc.')
    // expect(jobOrganization).toBeInTheDocument()
  })
})
