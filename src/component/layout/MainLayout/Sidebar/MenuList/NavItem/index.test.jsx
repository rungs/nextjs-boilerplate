import React from 'react'
import NavItem from './index'
import { render, fireEvent, screen, act } from '@testing-library/react'
import { useDispatch, useSelector } from 'react-redux'
import useMediaQuery from '@mui/material/useMediaQuery'

jest.mock('@mui/material/useMediaQuery')
jest.mock('next/navigation', () => {
  return {
    ...jest.requireActual('next/navigation'),
    usePathname: jest.fn(),
    useRouter: jest.fn().mockImplementation(() => ({
      push: jest.fn(),
      replace: jest.fn(),
    })),
  }
})

jest.mock('../../../../../../store/menuSlice', () => {
  return {
    menuOpen: jest.fn(),
    setMenuOpen: jest.fn(),
  }
})

jest.mock('react-redux')

const item = {
  id: 1,
  url: 'url',
  external: 'external',
  title: 'title',
  caption: 'caption',
  icon: 'icon',
  disabled: false,
}

describe('Test Component NavItem', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('render NavItem component', async () => {
    useMediaQuery.mockReturnValueOnce(true)
    const dispatch = jest.fn()
    useDispatch.mockReturnValue(dispatch)
    useSelector.mockImplementation(state =>
      state({
        isOpen: [2],
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
    )

    const Component = <NavItem item={item} level={0} itemHandler={jest.fn()} />

    render(Component)

    const submitButton = screen.getByTestId('Text-List-Item-Button')
    fireEvent.click(submitButton)

    expect(Component).toBeDefined()
  })

  it('render NavItem component icon null', async () => {
    useMediaQuery.mockReturnValueOnce(false)
    item.icon = null
    const dispatch = jest.fn()
    useDispatch.mockReturnValue(dispatch)
    useSelector.mockImplementation(state =>
      state({
        isOpen: [2],
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
    )

    const Component = <NavItem item={item} level={1} itemHandler={jest.fn()} />

    render(Component)

    expect(Component).toBeDefined()
  })
})
