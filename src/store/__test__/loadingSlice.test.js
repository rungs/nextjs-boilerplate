import {
  loadingSliceReducer,
  setLoadingSubmitDraft,
  setLoadingSubmitConfirm,
  setLoadingSubmitCancel,
  setLoadingPage,
} from '../index'

const initialState = {
  loadingSubmitDraft: false,
  loadingSubmitConfirm: false,
  loadingSubmitCancel: false,
  isLoading: false,
}

describe('tests for loadingSliceReducer', () => {
  it('should set loadingSubmitDraft to loadingSliceReducer', () => {
    const action = { type: setLoadingSubmitDraft.type, payload: true }
    const nextState = loadingSliceReducer(initialState, action)

    expect(nextState.loadingSubmitDraft).toEqual(true)
  })

  it('should set loadingSubmitConfirm to loadingSliceReducer', () => {
    const action = { type: setLoadingSubmitConfirm.type, payload: true }
    const nextState = loadingSliceReducer(initialState, action)

    expect(nextState.loadingSubmitConfirm).toEqual(true)
  })

  it('should set loadingSubmitCancel to loadingSliceReducer', () => {
    const action = { type: setLoadingSubmitCancel.type, payload: true }
    const nextState = loadingSliceReducer(initialState, action)

    expect(nextState.loadingSubmitCancel).toEqual(true)
  })

  it('should set isLoading to loadingSliceReducer', () => {
    const action = { type: setLoadingPage.type, payload: true }
    const nextState = loadingSliceReducer(initialState, action)

    expect(nextState.isLoading).toEqual(true)
  })
})
