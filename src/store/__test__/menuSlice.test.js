import telesaleSliceReducer, { setLoading, setMenuOpen, menuOpen } from '../menuSlice'

const initialState = {
  isOpen: [],
  defaultId: 'default',
  opened: true,
  loading: false,
}

describe('tests for telesaleSliceReducer', () => {
  it('should set loading to telesaleSliceReducer', () => {
    const action = { type: setLoading.type, payload: true }
    const nextState = telesaleSliceReducer(initialState, action)

    expect(nextState.loading).toEqual(true)
  })

  it('should set opened to telesaleSliceReducer', () => {
    const action = { type: setMenuOpen.type, payload: true }
    const nextState = telesaleSliceReducer(initialState, action)

    expect(nextState.opened).toEqual(true)
  })

  it('should set isOpen to telesaleSliceReducer', () => {
    const action = { type: menuOpen.type, payload: 1 }
    const nextState = telesaleSliceReducer(initialState, action)

    expect(nextState.isOpen).toEqual([1])
  })
})
