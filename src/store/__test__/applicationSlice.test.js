import { applicationSliceReducer, setApplicationData } from '../index'

const initialState = {
  applicationData: null,
}

describe('tests for applicationReducer', () => {
  it('should set applicationData', () => {
    const action = { type: setApplicationData.type, payload: { data: 'data' } }
    const nextState = applicationSliceReducer(initialState, action)

    expect(nextState.applicationData).toEqual({ data: 'data' })
  })
})
