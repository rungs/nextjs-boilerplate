import { Avatar } from '../index'
import { render } from '@testing-library/react'

const mockProps = {
  color: 'color',
  outline: true,
  size: 'badge',
  sx: {},
}

describe('Test Component Avatar', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render Avatar', () => {
    const Component = <Avatar {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render Avatar size xs', () => {
    mockProps.color = 'color'
    mockProps.size = 'xs'
    mockProps.outline = null
    const Component = <Avatar {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render Avatar size sm', () => {
    mockProps.size = 'sm'
    mockProps.outline = true
    mockProps.color = null
    const Component = <Avatar {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render Avatar size lg', () => {
    mockProps.size = 'lg'
    const Component = <Avatar {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render Avatar size xl', () => {
    mockProps.size = 'xl'
    const Component = <Avatar {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render Avatar size md', () => {
    mockProps.size = 'md'
    const Component = <Avatar {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render Avatar size null', () => {
    mockProps.size = null
    const Component = <Avatar {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })
})
