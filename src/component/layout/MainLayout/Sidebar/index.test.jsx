import Sidebar from './index'
import { render, fireEvent, screen } from '@testing-library/react'
import useMediaQuery from '@mui/material/useMediaQuery'

jest.mock('@mui/material/useMediaQuery')
jest.mock('react-redux', () => {
  return {
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
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

jest.mock('next/navigation', () => {
  return {
    ...jest.requireActual('next/navigation'),
    usePathname: jest.fn(),
    useRouter: jest.fn(),
  }
})

describe('Test Component Sidebar', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('render component Sidebar matchUpMd is true', () => {
    const drawerOpen = jest.fn()
    const drawerToggle = jest.fn()
    const window = { document: { body: '' } }
    useMediaQuery.mockReturnValueOnce(true)
    const Component = (
      <Sidebar drawerOpen={drawerOpen} drawerToggle={drawerToggle} window={window} />
    )

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('render component Sidebar matchUpMd is false', () => {
    const drawerOpen = jest.fn()
    const drawerToggle = jest.fn()
    const window = { document: { body: '' } }
    useMediaQuery.mockReturnValueOnce(false)
    const Component = (
      <Sidebar drawerOpen={drawerOpen} drawerToggle={drawerToggle} window={window} />
    )

    render(Component)

    expect(render(Component)).toBeDefined()
  })
})
