import { ReactQueryProvider } from './index'

jest.mock('react-query', () => {
  return {
    ...jest.requireActual('react-query'),
    QueryClient: jest.fn(),
    QueryClientProvider: jest.fn(),
  }
})

describe('ReactQueryProvider', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should throw an error when QueryClientProvider throws an error', () => {
    // Arrange
    const children = <div>Test</div>
    jest.spyOn(console, 'error').mockImplementation(() => {})

    // Act & Assert
    expect(() => ReactQueryProvider({ children })).toThrow()
    expect(console.error).toHaveBeenCalled()

    // Clean up
    console.error.mockRestore()
  })

  // Children prop is not passed.
  it('should throw an error when children prop is not passed', () => {
    expect(() => ReactQueryProvider({})).toThrow()
  })

  // Children prop is not a valid React element.
  it('should throw an error when children prop is not a valid React element', () => {
    const children = 'Test'

    expect(() => ReactQueryProvider({ children })).toThrow()
  })
})
