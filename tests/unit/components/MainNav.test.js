// import { render, screen } from '@testing-library/vue'

import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
// import { expect } from 'vitest'

describe('MainNav', () => {
  it('displays company name', () => {
    render(MainNav)
    const companyName = screen.getByText('My Career')
    console.log('🚀 ~ file: MainNav.test.js:11 ~ it ~ companyName:', companyName)
    expect(companyName).toBeInTheDocument()
  })
})
