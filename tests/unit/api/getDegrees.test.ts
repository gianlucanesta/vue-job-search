import type { Mock } from 'vitest'

import axios from 'axios'
import getDegrees from '@/api/getDegrees'

vi.mock('axios')
const axiosGetMock = axios.get as Mock

describe('getDegrees', () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: {
        id: 1,
        degree: "Master's"
      }
    })
  })
  it('fetches degrees that candidates can apply to', async () => {
    await getDegrees()
    expect(axios.get).toHaveBeenCalledWith('http://localhost:5000/degrees')
  })
  it('extracts degrees from response', async () => {
    const degrees = await getDegrees()
    expect(degrees).toEqual({
      id: 1,
      degree: "Master's"
    })
  })
})
