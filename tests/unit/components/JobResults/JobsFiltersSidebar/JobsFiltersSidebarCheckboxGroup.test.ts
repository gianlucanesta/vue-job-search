import type { Mock } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'

import { useRouter } from 'vue-router'
vi.mock('vue-router')

const useRouterMock = useRouter as Mock

import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'
import { useUserStore } from '@/stores/user'

describe('JobFiltersSidebarCheckboxGroup', () => {
  interface JobFiltersSidebarCheckboxGroupProps {
    uniqueValues: Set<string>
    action: (value: string[]) => void
  }
  const createProps = (props: Partial<JobFiltersSidebarCheckboxGroupProps> = {}) => ({
    uniqueValues: new Set(['Value A', 'Value B']),
    action: vi.fn(),
    ...props
  })
  const renderJobFiltersSidebarCheckboxGroup = (props: JobFiltersSidebarCheckboxGroupProps) => {
    const pinia = createTestingPinia({ stubActions: false })
    const userStore = useUserStore()

    render(JobFiltersSidebarCheckboxGroup, {
      props: {
        ...props
      },
      global: {
        plugins: [pinia]
      }
    })

    return { userStore }
  }

  it('renders unique list of values', () => {
    const props = createProps({
      uniqueValues: new Set(['Full-time', 'Part-time'])
    })
    renderJobFiltersSidebarCheckboxGroup(props)

    const jobTypesListItems = screen.getAllByRole('listitem')
    const jobTypes = jobTypesListItems.map((node) => node.textContent)
    expect(jobTypes).toEqual(['Full-time', 'Part-time'])
  })

  describe('when user clicks checkbox', () => {
    it('communicates that user has selected checkbox for job type', async () => {
      useRouterMock.mockReturnValue({ push: vi.fn() })
      const action = vi.fn()
      const props = createProps({
        uniqueValues: new Set(['Full-time', 'Part-time']),
        action
      })
      renderJobFiltersSidebarCheckboxGroup(props)

      const fullTimeCheckbox = screen.getByRole('checkbox', {
        name: /full-time/i
      })
      await userEvent.click(fullTimeCheckbox)

      expect(action).toHaveBeenCalledWith(['Full-time'])
    })

    it('navigates user to job results page to see fresh batch of filtered jobs', async () => {
      const push = vi.fn()
      useRouterMock.mockReturnValue({ push })
      const props = createProps({
        uniqueValues: new Set(['Full-time'])
      })
      renderJobFiltersSidebarCheckboxGroup(props)

      const fullTimeCheckbox = screen.getByRole('checkbox', {
        name: /full-time/i
      })
      await userEvent.click(fullTimeCheckbox)

      expect(push).toHaveBeenCalledWith({ name: 'JobResults' })
    })
  })

  describe('when user clears job filters', () => {
    it('unchecks any checked checkboxes', async () => {
      const push = vi.fn()
      useRouterMock.mockReturnValue({ push })
      const props = createProps({
        uniqueValues: new Set(['Full-time', 'Part-time'])
      })
      const { userStore } = renderJobFiltersSidebarCheckboxGroup(props)

      const fullTimeCheckboxBeforeAction = screen.getByRole<HTMLInputElement>('checkbox', {
        name: /full-time/i
      })

      await userEvent.click(fullTimeCheckboxBeforeAction)

      expect(fullTimeCheckboxBeforeAction.checked).toBe(true)

      userStore.CLEAR_USER_JOB_FILTER_SELECTIONS()

      const fullTimeCheckboxAfterAction = await screen.findByRole<HTMLInputElement>('checkbox', {
        name: /full-time/i
      })

      expect(fullTimeCheckboxAfterAction.checked).toBe(false)
    })
  })
})
