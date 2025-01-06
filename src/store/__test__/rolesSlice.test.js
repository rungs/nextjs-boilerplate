import { rolesSliceReducer, setRoles } from '../index'

const initialState = [{}]

describe('tests for rolesSliceReducer', () => {
  it('should set userPermission to rolesSliceReducer', () => {
    const action = { type: setRoles.type, payload: [{ data: 'data' }] }
    const nextState = rolesSliceReducer(initialState, action)

    expect(nextState).toEqual([{ data: 'data' }])
  })
})
