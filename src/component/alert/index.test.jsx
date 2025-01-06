import { AlertNoti } from '../index'
import { render, screen } from '@testing-library/react'
import { useSelector, useDispatch } from 'react-redux'

jest.mock('react-redux')
useDispatch.mockImplementation(() => jest.fn())

describe('Test Component AlertNoti', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should Component AlertNoti case success', async () => {
    useSelector.mockImplementation(state =>
      state({
        openAlert: {
          openAlert: true,
          alertDescription: 'message',
          alertType: 'success',
        },
      }),
    )
    const Component = <AlertNoti />

    render(Component)

    const alert = AlertNoti()
    alert.props.onClose()

    expect(alert.props.onClose).toBeTruthy()
    expect(render(Component)).toBeDefined()
  })

  it('should Component AlertNoti case info', () => {
    useSelector.mockImplementation(state =>
      state({
        openAlert: {
          openAlert: true,
          alertDescription: 'message',
          alertType: 'info',
        },
      }),
    )
    const Component = <AlertNoti />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should Component AlertNoti case warning', () => {
    useSelector.mockImplementation(state =>
      state({
        openAlert: {
          openAlert: true,
          alertDescription: 'message',
          alertType: 'warning',
        },
      }),
    )
    const Component = <AlertNoti />

    render(Component)

    const snackbar = screen.getByTestId('test-snackbar')
    expect(snackbar).toBeInTheDocument()
    expect(snackbar).not.toHaveClass('MuiSnackbar-open')

    expect(render(Component)).toBeDefined()
  })

  it('should Component AlertNoti case error', () => {
    useSelector.mockImplementation(state =>
      state({
        openAlert: {
          openAlert: true,
          alertDescription: 'message',
          alertType: 'error',
        },
      }),
    )
    const Component = <AlertNoti />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should Component AlertNoti case default', () => {
    useSelector.mockImplementation(state =>
      state({
        openAlert: {
          openAlert: true,
          alertDescription: 'message',
          alertType: 'default',
        },
      }),
    )
    const Component = <AlertNoti />

    render(Component)

    expect(render(Component)).toBeDefined()
  })
})
