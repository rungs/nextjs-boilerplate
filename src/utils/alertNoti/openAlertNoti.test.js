import { openAlertNoti } from '@utils'
import { setOpenAlert, setAlertDescription, setAlertType, setAnchorOrigin } from '@store'

describe('openAlertNoti', () => {
  it('should dispatch actions with the provided arguments', () => {
    const dispatch = jest.fn()
    const description = 'Test description'
    const type = 'success'
    const anchorOrigin = { vertical: 'top', horizontal: 'right' }

    openAlertNoti(dispatch, description, type, anchorOrigin)

    expect(dispatch).toHaveBeenCalledTimes(4) // Ensure that all dispatch functions were called
    expect(dispatch).toHaveBeenCalledWith(setOpenAlert(true))
    expect(dispatch).toHaveBeenCalledWith(setAlertDescription(description))
    expect(dispatch).toHaveBeenCalledWith(setAlertType(type))
    expect(dispatch).toHaveBeenCalledWith(setAnchorOrigin(anchorOrigin))
  })

  it('should dispatch actions anchorOrigin default props', () => {
    const dispatch = jest.fn()
    const description = 'Test description'
    const type = 'success'

    openAlertNoti(dispatch, description, type)

    expect(dispatch).toHaveBeenCalledTimes(4) // Ensure that all dispatch functions were called
    expect(dispatch).toHaveBeenCalledWith(setOpenAlert(true))
    expect(dispatch).toHaveBeenCalledWith(setAlertDescription(description))
    expect(dispatch).toHaveBeenCalledWith(setAlertType(type))
    expect(dispatch).toHaveBeenCalledWith(setAnchorOrigin(null))
  })
})
