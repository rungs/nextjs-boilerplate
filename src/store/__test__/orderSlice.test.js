import { orderSliceReducer, setOrderNoticeData } from '../index'

const initialState = {
  orderNoticeData: null,
}

describe('tests for orderSliceReducer', () => {
  it('should set orderNoticeData to orderSliceReducer', () => {
    const action = { type: setOrderNoticeData.type, payload: [{ data: 'data' }] }
    const nextState = orderSliceReducer(initialState, action)

    expect(nextState.orderNoticeData).toEqual([{ data: 'data' }])
  })
})
