import { LoadingComponent } from '../index'
import { render } from '@testing-library/react'

describe('Test Component LoadingComponent', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render LoadingComponent', () => {
    const Component = <LoadingComponent />

    render(Component)

    expect(render(Component)).toBeDefined()
  })
})
