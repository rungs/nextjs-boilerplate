import { levelSliceReducer, setLevels } from '../index'

const initialState = [{}]

describe('tests for levelSliceReducer', () => {
  it('should set level to levelSliceReducer', () => {
    const action = { type: setLevels.type, payload: [{ data: 'data' }] }
    const nextState = levelSliceReducer(initialState, action)

    expect(nextState).toEqual([{ data: 'data' }])
  })
})
