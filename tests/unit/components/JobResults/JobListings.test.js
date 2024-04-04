import { render, screen } from '@testing-library/vue'
import JobListings from '@/components/JobResults/JobListings.vue'
import axios from 'axios'

console.log(axios)
vi.mock('axios')
describe('JobListings', () => {
  it('renders', () => {
    expect(1).toBe(1);
  })
})
