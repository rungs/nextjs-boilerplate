import { searchSliceReducer, setNoticeData, setSearchPayload } from '../index'
import { setPremiumQuotationData } from '../searchSlice'

const initialState = {
  searchPayload: null,
  noticeData: [],
  premiumQuotationData: [],
}

describe('tests for searchSliceReducer', () => {
  it('should set noticeData to searchSliceReducer', () => {
    const action = { type: setNoticeData.type, payload: [{ data: 'data' }] }
    const nextState = searchSliceReducer(initialState, action)

    expect(nextState.noticeData).toEqual([{ data: 'data' }])
  })

  it('should set premiumQuotationData to searchSliceReducer', () => {
    const action = { type: setPremiumQuotationData.type, payload: [{ data: 'data' }] }
    const nextState = searchSliceReducer(initialState, action)

    expect(nextState.premiumQuotationData).toEqual([{ data: 'data' }])
  })

  it('should set searchPayload to searchSliceReducer', () => {
    const action = { type: setSearchPayload.type, payload: { data: 'data' } }
    const nextState = searchSliceReducer(initialState, action)

    expect(nextState.searchPayload).toEqual({ data: 'data' })
  })
})
