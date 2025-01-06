import {
  alertSliceReducer,
  setOpenAlert,
  setAlertDescription,
  setAlertType,
  setAnchorOrigin,
} from '../index'

const initialState = {
  openAlert: false,
  alertDescription: '',
  alertType: 'success',
  anchorOrigin: null,
}

describe('tests for alertSliceReducer', () => {
  it('should set openAlert to true', () => {
    const action = { type: setOpenAlert.type, payload: true }
    const nextState = alertSliceReducer(initialState, action)

    expect(nextState.openAlert).toEqual(true)
  })

  it('should set alertDescription to "test"', () => {
    const action = { type: setAlertDescription.type, payload: 'test' }
    const nextState = alertSliceReducer(initialState, action)

    expect(nextState.alertDescription).toEqual('test')
  })

  it('should set alertType to "success"', () => {
    const action = { type: setAlertType.type, payload: 'success' }
    const nextState = alertSliceReducer(initialState, action)

    expect(nextState.alertType).toEqual('success')
  })

  it('should set anchorOrigin to "test"', () => {
    const action = { type: setAnchorOrigin.type, payload: 'test' }
    const nextState = alertSliceReducer(initialState, action)

    expect(nextState.anchorOrigin).toEqual('test')
  })
})
