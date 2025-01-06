import React from 'react'
import { render } from '@testing-library/react'
import NavigationScroll from './NavigationScroll'

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/mocked-path', // Replace with the desired pathname for your test
  }),
}))

describe('Test Component NavigationScroll', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('NavigationScroll component snapshot', () => {
    const { asFragment } = render(<NavigationScroll />)
    expect(asFragment()).toMatchSnapshot()
  })
})
