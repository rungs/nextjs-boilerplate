import SearchSection from './index'
import { render, fireEvent, screen, act } from '@testing-library/react'

// jest.mock('@mui/material/styles', () => {
//   return {
//     useTheme: jest.fn(),
//     styled: jest.fn(),
//   }
// })

const mock = {
  value: '',
  setValue: jest.fn(),
  popupState: '',
}
describe('Test Component MobileSearch', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('render MobileSearch component', async () => {
    const Component = <SearchSection {...mock} />

    render(Component)

    expect(Component).toBeDefined()
  })
})
