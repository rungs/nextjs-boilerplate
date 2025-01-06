import { featureSliceReducer, setProgramFeatures, setBranchFeatures } from '../index'

const initialState = {
  programFeatures: [{}],
  branchFeatures: [{}],
}

describe('tests for featureReducer', () => {
  it('should set program features ro featureReducer', () => {
    const action = { type: setProgramFeatures.type, payload: [{ data: 'data' }] }
    const nextState = featureSliceReducer(initialState, action)

    expect(nextState.programFeatures).toEqual([{ data: 'data' }])
  })

  it('should set branch features ro featureReducer', () => {
    const action = { type: setBranchFeatures.type, payload: [{ data: 'data' }] }
    const nextState = featureSliceReducer(initialState, action)

    expect(nextState.branchFeatures).toEqual([{ data: 'data' }])
  })
})
