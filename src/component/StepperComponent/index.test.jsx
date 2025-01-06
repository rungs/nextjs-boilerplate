import React from 'react'
import { render } from '@testing-library/react'
import { StepperComponent } from '../index'

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
                date: {
                  today: 'today',
                  clear: 'clear',
                },
              },
            },
          },
        },
      }),
  }
})

describe('Test Component StepperComponent', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render StepperComponent default props', () => {
    const Component = <StepperComponent />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  it('should render StepperComponent', () => {
    const mockProps = {
      steps: [{ id: 'id', icon: 'icon', label: 'label' }],
      activeStep: 0,
      customConnector: false,
      customStepComponent: false,
      translate: false,
      multilingual: false,
    }
    const Component = <StepperComponent {...mockProps} />

    render(Component)

    expect(render(Component)).toBeDefined()
  })

  // it('should render StepperComponent translate true', () => {
  //   const mockProps = {
  //     steps: [{ id: 'id', icon: 'icon', label: { th: 'th' } }],
  //     activeStep: 0,
  //     customConnector: true,
  //     customStepComponent: true,
  //     translate: true,
  //     multilingual: true,
  //   }
  //   const Component = <StepperComponent {...mockProps} />

  //   render(Component)

  //   expect(render(Component)).toBeDefined()
  // })
})
