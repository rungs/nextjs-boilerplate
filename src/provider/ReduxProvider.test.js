import ReduxProvider from './ReduxProvider'
import { render } from '@testing-library/react'

jest.mock('react-redux', () => {
  return {
    Provider: ({ children }) => children,
  }
})

describe('ReduxProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render children with provided redux store', () => {
    const reducer = jest.fn()
    const createStore = jest.fn()
    const reduxStore = createStore(reducer)
    const { getByText } = render(
      <ReduxProvider reduxStore={reduxStore}>
        <div>Test</div>
      </ReduxProvider>,
    )
    expect(getByText('Test')).toBeInTheDocument()
  })
})
