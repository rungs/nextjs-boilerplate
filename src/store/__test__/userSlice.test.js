import { userSliceReducer, logout, setUserData, setUserLoading, setUserDataById } from '../index'

const initialState = {
  userData: null,
  userDataById: null,
  userLoading: false,
}

describe('tests for userSliceReducer', () => {
  it('should set initialState to userSliceReducer', () => {
    const action = { type: logout.type }
    const nextState = userSliceReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should set userData to userSliceReducer', () => {
    const action = { type: setUserData.type, payload: { user: 'user' } }
    const nextState = userSliceReducer(initialState, action)

    expect(nextState.userData).toEqual({ user: 'user' })
  })

  it('should set userLoading to userSliceReducer', () => {
    const action = { type: setUserLoading.type, payload: true }
    const nextState = userSliceReducer(initialState, action)

    expect(nextState.userLoading).toEqual(true)
  })

  it('should set userDataById to userSliceReducer', () => {
    const action = { type: setUserDataById.type, payload: { user: 'user' } }
    const nextState = userSliceReducer(initialState, action)

    expect(nextState.userDataById).toEqual({ user: 'user' })
  })
})
