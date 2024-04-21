import type { Mock } from 'vitest'

import { createPinia, setActivePinia } from 'pinia'
import axios from 'axios'

import { useDegreesStore } from '@/stores/degrees'

const axiosGetMoc = axios.get as Mock

vi.mock('axios')

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('stores all degrees that jobs may require', () => {
    const store = useDegreesStore()
    expect(store.degrees).toEqual([])
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  describe('FETCH_DEGREES', () => {
    it('maks API request and stores received degrees', async () => {
      axiosGetMoc.mockResolvedValue({
        data: [
          {
            id: 1,
            degree: "Master's"
          }
        ]
      })

      const store = useDegreesStore()
      await store.FETCH_DEGREES()

      expect(store.degrees).toEqual([
        {
          id: 1,
          degree: "Master's"
        }
      ])
    })
  })
})
