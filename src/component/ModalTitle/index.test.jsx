import { ModalTitle } from '../index'
import { render, screen } from '@testing-library/react'

const mockProps = {
  onClose: jest.fn(),
  children: <div></div>,
}

describe('Test Component ModalTitle', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should Component ModalTitle', () => {
    const Component = <ModalTitle {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should Component ModalTitle not have onClose', () => {
    mockProps.onClose = null
    const Component = <ModalTitle {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })
})
