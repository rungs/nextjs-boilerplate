import { telesaleSliceReducer, setLoading, setMenuOpen, menuOpen } from '../index'

const initialState = {
  isOpen: [],
  defaultId: 'default',
  opened: true,
  loading: false,
}

describe('tests for telesaleReducer', () => {
  it('should set setLoading to true', () => {
    const action = { type: setLoading.type, payload: true }
    const nextState = telesaleSliceReducer(initialState, action)

    expect(nextState.loading).toEqual(true)
  })

  it('should set setMenuOpen to true', () => {
    const action = { type: setMenuOpen.type, payload: true }
    const nextState = telesaleSliceReducer(initialState, action)

    expect(nextState.opened).toEqual(true)
  })

  it('should set isOpen to telesaleReducer', () => {
    const action = { type: menuOpen.type, payload: 1 }
    const nextState = telesaleSliceReducer(initialState, action)

    expect(nextState.isOpen).toEqual([1])
  })
})
