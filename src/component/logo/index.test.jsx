import { LogoComponent } from '../index'
import { render } from '@testing-library/react'

jest.mock('react-redux', () => {
  return {
    useSelector: state =>
      state({
        translations: {
          translations: {
            sale_ordering: 'mock userInfo state',
          },
        },
      }),
  }
})

describe('Test Component LogoComponent', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render LogoComponent', () => {
    const Component = <LogoComponent />

    render(Component)

    expect(render(Component)).toBeDefined()
  })
})
