import React from 'react'
import NavGroup from './index'
import { render } from '@testing-library/react'

jest.mock('next/navigation', () => {
  return {
    ...jest.requireActual('next/navigation'),
    usePathname: jest.fn(),
    useRouter: jest.fn(),
  }
})

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux')
  return {
    ...ActualReactRedux,
    useDispatch: jest.fn(),
    useSelector: state =>
      state({
        isOpen: [2],
        translations: {
          translations: {
            premium_quotation: {
              common: {
                scroll: {
                  top: 'top',
                },
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

const mockProps = {
  id: 1,
  url: 'url',
  external: 'external',
  title: 'title',
  caption: 'caption',
  icon: 'icon',
  disabled: false,
  children: [
    {
      id: 1,
      type: 'collapse',
      url: 'url',
    },
    {
      id: 2,
      type: 'item',
      url: 'url',
    },
    {
      id: 3,
      type: 'Error',
      url: 'url',
    },
  ],
}

describe('Test Component NavGroup', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('render NavGroup component', async () => {
    const Component = <NavGroup item={mockProps} />

    render(Component)

    expect(Component).toBeDefined()
  })
})
