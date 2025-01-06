import { Transitions } from '../index'
import { render } from '@testing-library/react'

const mockProps = {
  children: <div></div>,
  position: 'top-right',
  type: 'grow',
  direction: 'up',
}

describe('Test Component Transitions', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render Avatar', () => {
    const Component = <Transitions {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render Avatar position top', () => {
    mockProps.position = 'top'
    const Component = <Transitions {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render Avatar position bottom-left', () => {
    mockProps.position = 'bottom-left'
    const Component = <Transitions {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render Avatar position bottom-right', () => {
    mockProps.position = 'bottom-right'
    const Component = <Transitions {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render Avatar position bottom', () => {
    mockProps.position = 'bottom'
    const Component = <Transitions {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render Avatar position top-left', () => {
    mockProps.position = 'top-left'
    const Component = <Transitions {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render Avatar position null', () => {
    mockProps.position = null
    const Component = <Transitions {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })
})
