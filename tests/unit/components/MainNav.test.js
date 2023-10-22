// import { render, screen } from '@testing-library/vue'

import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
import { describe, expect } from 'vitest'
// import { expect } from 'vitest'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('My Career')
    console.log('🚀 ~ file: MainNav.test.js:11 ~ it ~ companyName:', companyName)
    // expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for navigation', () => {
    render(MainNav)
    const navigationMenuItems = screen.getAllByRole('listitem')
    console.log('🚀 ~ file: MainNav.test.js:18 ~ it ~ navigationMenuItems:', navigationMenuItems)
    const navigationMenuText = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuText).toEqual([
      'Teams',
      'Locations',
      'Life at Corp',
      'How we hire',
      'Students',
      'Jobs'
    ])
    console.log('🚀 ~ file: MainNav.test.js:20 ~ it ~ navigationMenuText:', navigationMenuText)
  })

  describe('when the user logs in', () => {
    it('displays user profile picture', () => {
      render(MainNav)

      const profileImage = screen.queryByRole('img', {
        name: /user profile image/i
      })
      // expect(profileImage).not.toBeInTheDocument()
    })
  })
})
