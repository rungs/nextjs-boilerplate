import { setOpenAlert, setAlertDescription, setAlertType, setAnchorOrigin } from '@store'

const openAlertNoti = (dispatch, description, type, anchorOrigin = null) => {
  dispatch(setOpenAlert(true))
  dispatch(setAlertDescription(description))
  dispatch(setAlertType(type))
  dispatch(setAnchorOrigin(anchorOrigin))
}

export default openAlertNoti
