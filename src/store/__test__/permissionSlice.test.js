import { permissionSliceReducer, setUserPermission } from '../index'

const initialState = {
  userPermission: null,
}

describe('tests for permissionSliceReducer', () => {
  it('should set userPermission to permissionSliceReducer', () => {
    const action = { type: setUserPermission.type, payload: { data: 'data' } }
    const nextState = permissionSliceReducer(initialState, action)

    expect(nextState.userPermission).toEqual({ data: 'data' })
  })
})
