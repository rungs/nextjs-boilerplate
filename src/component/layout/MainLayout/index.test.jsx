import MainLayout from './index'
import { render } from '@testing-library/react'
import useMediaQuery from '@mui/material/useMediaQuery'

jest.mock('@mui/material/useMediaQuery')

jest.mock('next/navigation', () => {
  return {
    ...jest.requireActual('next/navigation'),
    usePathname: jest.fn(),
    useRouter: jest.fn(),
  }
})

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux')
  return {
    ...ActualReactRedux,
    useDispatch: jest.fn(),
    useSelector: state =>
      state({
        opened: {
          opened: true,
        },
        translations: {
          translations: {
            premium_quotation: {
              common: {
                scroll: {
                  top: 'top',
                },
                autocomplete: {
                  nodata: 'nodata',
                  loading: 'loading',
                },
              },
            },
          },
        },
      }),
  }
})

describe('Test Component MainLayout', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('render component MainLayout matchDownMd is true', () => {
    useMediaQuery.mockReturnValueOnce(true)
    const Component = (
      <MainLayout handleLeftDrawerToggle={jest.fn()}>
        {' '}
        <div></div>
      </MainLayout>
    )

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('render component MainLayout matchDownMd is false', () => {
    useMediaQuery.mockReturnValueOnce(false)
    const Component = (
      <MainLayout handleLeftDrawerToggle={jest.fn()}>
        {' '}
        <div></div>
      </MainLayout>
    )

    render(Component)

    expect(render(Component)).toBeDefined()
  })
})
