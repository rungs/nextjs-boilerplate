import { ScroolToTop } from '../index'
import { render, screen, fireEvent } from '@testing-library/react'

jest.mock('react-redux', () => {
  return {
    useSelector: state =>
      state({
        translations: {
          translations: {
            premium_quotation: {
              common: {
                scroll: {
                  top: 'mock userInfo state',
                },
              },
            },
          },
        },
      }),
  }
})

describe('Test Component ScroolToTop', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render ScrollToTop', () => {
    const Component = (
      <ScroolToTop window={jest.fn()}>
        <div></div>
      </ScroolToTop>
    )
    render(Component)

    const box = screen.getByTestId('test-box')

    expect(box).toBeInTheDocument()
    expect(fireEvent.click(screen.getByTestId('test-box'))).toBeTruthy()
    expect(render(Component)).toBeDefined()
  })

  it('should render ScrollToTop not have window', () => {
    const Component = (
      <ScroolToTop>
        <div></div>
      </ScroolToTop>
    )
    render(Component)

    const box = screen.getByTestId('test-box')

    expect(box).toBeInTheDocument()
    expect(fireEvent.click(screen.getByTestId('test-box'))).toBeTruthy()
    expect(render(Component)).toBeDefined()
  })
})
