import React from 'react'
import NavCollapse from './index'
import { render } from '@testing-library/react'
import { usePathname } from 'next/navigation'

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux')
  return {
    ...ActualReactRedux,
    useDispatch: jest.fn(),
    useSelector: state =>
      state({
        lang: {
          lang: 'th',
        },
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
  }
})

jest.mock('next/navigation')
jest.mock('@mui/material', () => {
  return {
    ...jest.requireActual('@mui/material'),
    Chip: <div></div>,
  }
})

describe('Test Component NavCollapse', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('NavCollapse component snapshot', () => {
    usePathname.mockImplementation(() => {
      return 'url'
    })
    const menu = {
      id: '4',
      icon: 'icon',
      url: 'url',
      title: 'title',
      caption: 'caption',
      children: [
        {
          id: '4',
          type: 'type',
          url: 'url',
          external: 'external',
          title: 'title',
          caption: 'caption',
          icon: 'icon',
          disabled: false,
          children: [],
        },
      ],
    }
    const { asFragment } = render(<NavCollapse menu={menu} level={1} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('render NavCollapse component', () => {
    usePathname.mockImplementation(() => {
      return ''
    })
    const menu = {
      id: '6',
      icon: 'icon',
      url: 'url',
      title: 'title',
      caption: 'caption',
      children: [
        {
          id: '6',
          type: 'collapse',
          url: 'url',
          external: 'external',
          title: 'title',
          caption: 'caption',
          icon: 'icon',
          disabled: false,
          children: [
            {
              id: 1,
              url: 'url',
              external: 'external',
              title: 'title',
              caption: 'caption',
              icon: 'icon',
              disabled: false,
            },
          ],
        },
      ],
    }

    const Component = (
      <NavCollapse menu={menu} level={0} handleClick={jest.fn()} checkOpenForParent={jest.fn()} />
    )

    render(Component)

    expect(Component).toBeDefined()
  })

  it('render NavCollapse component children type is item', () => {
    usePathname.mockImplementation(() => {
      return 'url'
    })
    const menu = {
      id: '8',
      icon: 'icon',
      url: 'url',
      title: 'title',
      caption: 'caption',
      children: [
        {
          id: '8',
          type: 'item',
          url: 'url',
          external: 'external',
          title: 'title',
          caption: 'caption',
          icon: 'icon',
          disabled: false,
          children: [
            {
              id: 1,
              url: 'url',
              external: 'external',
              title: 'title',
              caption: 'caption',
              icon: 'icon',
              disabled: false,
            },
          ],
        },
      ],
    }

    const Component = (
      <NavCollapse menu={menu} level={2} handleClick={jest.fn()} checkOpenForParent={jest.fn()} />
    )

    render(Component)

    expect(Component).toBeDefined()
  })
})
