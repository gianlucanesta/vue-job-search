import { render, screen } from '@testing-library/vue'

import TheSubnav from '@/components/TheSubnav.vue'

describe('TheSubnav', () => {
  describe("when the user is on the 'Jobs' page", () => {
    it('displays jobs count', () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },
        data() {
          return {
            onJobResultsPage: true
          }
        }
      })
      const jobCount = screen.getByText('1653')
      // expect(jobCount).toBeInTheDocument()
    })
  })

  // describe("when the user is not on the 'Jobs' page", () => {
  //   it('does NOT displays jobs count', () => {
  //     render(TheSubnav, {
  //       data() {
  //         return {
  //           onJobResultsPage: false
  //         }
  //       }
  //     })
  //     const jobCount = screen.queryByText('1653')
  //     expect(jobCount).not.toBeInTheDocument()
  //   })
  // })
})
