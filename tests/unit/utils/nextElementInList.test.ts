import nextElementInList from '../../../src/utils/nextElementInList'

describe('nextElementInList', () => {
  it('locates element in list and returns the next element in list', () => {
    const list = ['A', 'B', 'C', 'D', 'E']
    const value = 'C'

    const result = nextElementInList(list, value)
    expect(result).toBe('D')
  })
  describe('when element is at the end of the list', () => {
    it('returns the first element in the list', () => {
      const list = ['A', 'B', 'C', 'D', 'E']
      const value = 'E'
      const result = nextElementInList(list, value)
      expect(result).toBe('A')
    })
  })
})
