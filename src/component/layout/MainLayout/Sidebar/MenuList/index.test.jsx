import React from 'react'
import MenuList from './index'
import { render } from '@testing-library/react'

jest.mock('next/navigation', () => {
  return {
    ...jest.requireActual('next/navigation'),
    usePathname: jest.fn(),
    useRouter: jest.fn(),
  }
})

describe('Test Component MenuList', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('render MenuList component', () => {
    const Component = <MenuList />

    render(Component)

    const setItem = jest.fn()
    const mockMenuItem = jest.fn().mockResolvedValue({
      items: [
        {
          type: 'group',
          id: 1,
        },
        {
          type: '',
          id: 2,
        },
      ],
    })
    jest.mock('../../../../../menu-items', () => mockMenuItem)
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [
      {
        items: [
          {
            type: 'group',
            id: 1,
          },
          {
            type: '',
            id: 2,
          },
        ],
      },
      setItem,
    ])

    render(Component)

    expect(Component).toBeDefined()
  })
})
