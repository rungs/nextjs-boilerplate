import { titleSliceReducer, setTitles } from '../index'

const initialState = [{}]

describe('tests for titleSliceReducer', () => {
  it('should set userPermission to titleSliceReducer', () => {
    const action = { type: setTitles.type, payload: [{ data: 'data' }] }
    const nextState = titleSliceReducer(initialState, action)

    expect(nextState).toEqual([{ data: 'data' }])
  })
})
