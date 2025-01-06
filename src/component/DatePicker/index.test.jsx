import { DatePickerComponent } from '../index'
import { render } from '@testing-library/react'

const mockProps = {
  id: 'mock-id',
  label: 'mock-label',
  size: 'small',
  onChange: () => jest.fn(),
  field: {},
}

describe('Test Component DatePickerComponent', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render DatePickerComponent', () => {
    const Component = <DatePickerComponent {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })
})
