import { productSliceReducer, setProductNoticeData } from '../index'

const initialState = {
  productNoticeData: null,
}

describe('tests for productSliceReducer', () => {
  it('should set userPermission to productSliceReducer', () => {
    const action = { type: setProductNoticeData.type, payload: { data: 'data' } }
    const nextState = productSliceReducer(initialState, action)

    expect(nextState.productNoticeData).toEqual({ data: 'data' })
  })
})
