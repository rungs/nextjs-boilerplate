import { ConfirmModalComponent } from '../index'
import { render, screen, act } from '@testing-library/react'
import { useSelector } from 'react-redux'

jest.mock('react-redux')

describe('Test Component ConfirmModalComponent', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should Component ConfirmModalComponent', async () => {
    const Component = <ConfirmModalComponent />

    useSelector.mockReturnValue({
      modalState: {
        open: true,
        message: 'message',
        onConfirm: jest.fn(),
        onClose: jest.fn(),
        handleClose: jest.fn(),
        top: '10%',
        left: '10%',
        width: '10%',
        customModal: jest.fn(),
        childModal: {
          openChild: true,
          componentChild: jest.fn(),
          onCloseChild: jest.fn(),
        },
      },
    })

    render(Component)

    expect(Component).toBeDefined()
  })

  it('should Component ConfirmModalComponent use default props', async () => {
    const Component = <ConfirmModalComponent />

    useSelector.mockReturnValue({
      modalState: {
        open: true,
        message: 'message',
        onConfirm: jest.fn(),
        onClose: jest.fn(),
        handleClose: jest.fn(),
        customModal: jest.fn(),
        childModal: {
          openChild: false,
          componentChild: jest.fn(),
          onCloseChild: jest.fn(),
        },
      },
    })

    render(Component)

    expect(render(Component)).toBeDefined()
  })
})
