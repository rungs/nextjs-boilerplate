import ProfileSection from './index'
import { render, fireEvent, screen, act } from '@testing-library/react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '@apis'

jest.mock('react-redux')
jest.mock('../../../../../api')
jest.mock('../../../../../store/searchSlice', () => ({
  setNoticeData: jest.fn(),
}))
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

describe('Test Component ProfileSection', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Render ProfileSection component', () => {
    const dispatch = jest.fn()
    useDispatch.mockReturnValue(dispatch)

    const Component = (
      <ProfileSection handleLogout={jest.fn()} handleClose={jest.fn()} handleToggle={jest.fn()} />
    )

    render(Component)

    expect(Component).toBeDefined()
  })
})
