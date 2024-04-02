import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { RouterLinkStub } from '@vue/test-utils'

import MainNav from '@/components/Navigation/MainNav.vue'

describe('MainNav', () => {
  const renderMainNav = () => {
    const $route = { name: 'Home' }
    render(MainNav, {
      global: {
        mocks: {
          $route: $route
        },
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    })
  }

  it('displays company name', () => {
    renderMainNav()
    const companyName = screen.getByText('My Career')
    // expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for navigation', () => {
    renderMainNav()
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuText = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuText).toEqual([
      'Teams',
      'Locations',
      'Life at Corp',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })

  describe('when the user logs in', () => {
    it('displays user profile picture', async () => {
      renderMainNav()

      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      // expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })
      await userEvent.click(loginButton)

      profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      // expect(profileImage).toBeInTheDocument()
    })
  })
})
