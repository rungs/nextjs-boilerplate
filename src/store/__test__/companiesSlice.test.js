import { companiesSliceReducer, setCompanies } from '../index'

const initialState = [{}]

describe('tests for companiesReducer', () => {
  it('should set Company ro companiesReducer', () => {
    const action = { type: setCompanies.type, payload: [{ data: 'data' }] }
    const nextState = companiesSliceReducer(initialState, action)

    expect(nextState).toEqual([{ data: 'data' }])
  })
})
