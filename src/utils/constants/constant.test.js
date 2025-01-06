import { gridSpacing, drawerWidth, appDrawerWidth } from './constant'

describe('utils constants', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call constants return value', () => {
    expect(gridSpacing).toBe(3)
    expect(drawerWidth).toBe(260)
    expect(appDrawerWidth).toBe(320)
  })
})
