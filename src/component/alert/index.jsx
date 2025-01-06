'use client'

import { Alert, Snackbar, Typography } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'
import { setOpenAlert } from '@store'

const AlertNoti = () => {
  const dispatch = useDispatch()
  const { openAlert, alertDescription, alertType, anchorOrigin } = useSelector(
    state => state.openAlert,
  )

  const defaultAnchorOrigin = { vertical: 'top', horizontal: 'right' }

  const handleAlertType = () => {
    switch (alertType) {
      case 'success':
        return 'success'
      case 'info':
        return 'info'
      case 'warning':
        return 'warning'
      case 'error':
        return 'error'
      default:
        return 'success'
    }
  }

  const handleClose = () => {
    dispatch(setOpenAlert(false))
  }

  return (
    <Snackbar
      data-testid='test-snackbar'
      open={openAlert}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={...(anchorOrigin ? anchorOrigin : defaultAnchorOrigin)}
    >
      <Alert
        data-testid='test-alert'
        onClose={handleClose}
        severity={handleAlertType()}
        sx={{ width: '100%' }}
        variant='filled'
      >
        <Typography variant='h4'>{alertDescription}</Typography>
      </Alert>
    </Snackbar>
  )
}

export default AlertNoti
