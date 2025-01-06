import LanguageSection from './index'
import { render, fireEvent, screen } from '@testing-library/react'
import { useDispatch } from 'react-redux'
jest.mock('../../../../../store', () => ({
  setLanguage: jest.fn(),
}))

jest.mock('react-redux')

describe('Test Component LanguageSection', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('render component LanguageSection', () => {
    const dispatch = jest.fn()
    useDispatch.mockReturnValue(dispatch)
    const onChange = jest.fn().mockImplementation(() => {
      const event = {}
      const newLang = { value: 'value' }
      return event, newLang
    })

    const Component = <LanguageSection handleChange={jest.fn()} onChange={onChange} />

    render(Component)

    const submitButton = screen.getByTestId('test-toggle-button-group')
    fireEvent.click(submitButton)

    expect(render(Component)).toBeDefined()
  })
})
