import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import ActionButton from '@/components/ActionButton.vue'

describe('ActionButton', () => {
  it('renders text', () => {
    render(ActionButton, {
      props: {
        text: 'Sign in',
        type: 'primary'
      }
    })

    const button = screen.getByRole('button', { name: 'Sign in' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('primary')
    expect(button).toHaveTextContent('Sign in')
  })
})
