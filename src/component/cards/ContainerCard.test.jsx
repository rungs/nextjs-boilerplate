import ContainerCard from './ContainerCard'
import { render } from '@testing-library/react'

describe('Test Page ModalAddRegion', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should Component ContainerCard', () => {
    const Component = (
      <ContainerCard datatestid='test' boxShadow shadow='0 2px 14px 0 rgb(32 40 45 / 8%)' />
    )

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should Component ContainerCard case not send props', () => {
    const Component = <ContainerCard datatestid='test' boxShadow />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should Component ContainerCard case use only component', () => {
    const Component = <ContainerCard />

    render(Component)

    expect(render(Component)).toBeDefined()
  })
})
