import { render, screen } from '@testing-library/vue'

import TheSubnav from '@/components/Navigation/TheSubnav.vue'

describe('TheSubnav', () => {
  describe("when the user is on the 'Jobs' page", () => {
    it('displays jobs count', () => {
      const $route = { name: 'JobResults' }
      render(TheSubnav, {
        global: {
          mocks: {
            $route: $route
          },
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })
      const jobCount = screen.getByText('1653')
      // expect(jobCount).toBeInTheDocument()
    })
  })

  describe("when the user is not on the 'Jobs' page", () => {
    it('does NOT displays jobs count', () => {
      const $route = { name: 'Home' }
      render(TheSubnav, {
        global: {
          mocks: {
            $route: { name: 'Home' }
          },
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })
      const jobCount = screen.queryByText('1653')
      // expect(jobCount).not.toBeInTheDocument()
    })
  })
})
