import { nextTick } from 'vue'
import { render, screen } from '@testing-library/vue'

import TheHeadline from '@/components/TheHeadline.vue'

describe('TheHeadline', () => {
  it('displays introductory action verb', () => {
    vi.useFakeTimers()
    render(TheHeadline)

    const actionPhrase = screen.getByRole('heading', {
      name: /build for everyone/i
    })
    // expect(actionPhrase).toBeInTheDocument()
    vi.useRealTimers()
  })

  it('changes action verb at a consistent interval', () => {
    vi.useFakeTimers()
    const mock = vi.fn()
    vi.stubGlobal('setInterval', mock)
    render(TheHeadline)

    expect(mock).toHaveBeenCalled()
  })

  it('swaps action verb after interval', async () => {
    vi.useFakeTimers()
    render(TheHeadline)
    vi.advanceTimersToNextTimer()

    await nextTick()
    // const actionPhrase = screen.getByRole('heading', {
    //   name: /create for everyone/i
    // })
    // expect(actionPhrase).toBeInTheDocument()
  })
})
