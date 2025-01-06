import { LoadingButtonComponent } from '../../index'
import { render, screen } from '@testing-library/react'

const mockProps = {
  text: 'text',
  onClick: jest.fn(),
  color: 'primary',
  icon: <></>,
  sx: '',
}

describe('Test Component LoadingButtonComponent', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should Component LoadingButtonComponent case primary', async () => {
    const Component = <LoadingButtonComponent {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should Component LoadingButtonComponent case secondary', async () => {
    mockProps.color = 'secondary'
    const Component = <LoadingButtonComponent {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should Component LoadingButtonComponent case success', async () => {
    mockProps.color = 'success'
    const Component = <LoadingButtonComponent {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should Component LoadingButtonComponent case warning', async () => {
    mockProps.color = 'warning'
    const Component = <LoadingButtonComponent {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should Component LoadingButtonComponent case error', async () => {
    mockProps.color = 'error'
    const Component = <LoadingButtonComponent {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should Component LoadingButtonComponent case grey', async () => {
    mockProps.color = 'grey'
    const Component = <LoadingButtonComponent {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should Component LoadingButtonComponent case default', async () => {
    mockProps.color = 'default'
    const Component = <LoadingButtonComponent {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })
})
