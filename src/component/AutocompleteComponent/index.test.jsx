import React from 'react'
import { render } from '@testing-library/react'
import { AutocompleteComponent } from './index'

const mockProps = {
  id: 'mock_id',
  value: {
    id: '1',
    value: '1',
    label: '1',
  },
  label: '2',
  options: [
    { id: 1, label: 'Option 1', value: 'Option 1' },
    { id: 2, label: 'Option 2', value: 'Option 2' },
    { id: 3, label: 'Option 3', value: 'Option 3' },
  ],
  required: false,
  setValue: () => jest.fn(),
  displayValue: true,
  disabled: false,
  multiple: false,
  limitTags: -1,
  customStyle: {},
  useDefaultProps: true,
  onBeforeOpen: jest.fn(),
  onBeforeClose: jest.fn(),
  renderInput: () => <></>,
}

jest.mock('react-query', () => {
  return {
    useMutation: () => ({
      mutate: jest.fn().mockImplementation(() => {
        return {
          mutationFn: jest.fn(),
          onSuccess: jest.fn().mockReturnValue([{ id: 1, label: 'Option 1', value: 'Option 1' }]),
        }
      }),
    }),
  }
})

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux')
  return {
    ...ActualReactRedux,
    useSelector: state =>
      state({
        lang: {
          lang: 'th',
        },
        translations: {
          translations: {
            premium_quotation: {
              common: {
                autocomplete: {
                  nodata: 'nodata',
                  loading: 'loading',
                },
              },
            },
          },
        },
      }),
  }
})

describe('Test Component AutocompleteComponent', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render AutocompleteComponent', () => {
    mockProps.preload = true
    const Component = <AutocompleteComponent {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render AutocompleteComponent displayValue is false', () => {
    mockProps.displayValue = false
    mockProps.multilingual = true
    mockProps.label = {
      th: 'th',
    }

    const Component = <AutocompleteComponent {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render AutocompleteComponent options typeof string', () => {
    mockProps.options = 'value'
    mockProps.value = 'value'
    const Component = <AutocompleteComponent {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render AutocompleteComponent useDefaultProps is false', () => {
    const handleClose = () => jest.fn()
    const handleOpen = () => jest.fn()
    const isOptionEqualToValue = () =>
      jest.fn().mockImplementation(() => {
        return { id: '1' }, { id: '1' }
      })

    mockProps.useDefaultProps = false
    const Component = (
      <AutocompleteComponent
        {...mockProps}
        onClose={handleClose}
        onOpen={handleOpen}
        isOptionEqualToValue={isOptionEqualToValue}
      />
    )

    render(Component)

    Component.props.onClose()
    Component.props.onOpen()
    Component.props.isOptionEqualToValue()

    // const autocomplete = screen.getByTestId('autocomplete')

    // expect(autocomplete).toBeInTheDocument()
    expect(Component.props.onClose).toBeTruthy()
    expect(Component.props.onOpen).toBeTruthy()
    expect(Component.props.isOptionEqualToValue).toBeTruthy()
    expect(render(Component)).toBeDefined()
  })

  it('should render AutocompleteComponent default props', () => {
    const Component = <AutocompleteComponent />

    render(Component)

    expect(render(Component)).toBeDefined()
  })
})
