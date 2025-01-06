import { Box, Modal, Typography, Grid } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined'
import CheckIcon from '@mui/icons-material/Check'
import { useSelector } from 'react-redux'

export const ConfirmModalComponent = () => {
  const {
    open,
    message,
    onConfirm,
    onClose,
    handleClose,
    top,
    left,
    width,
    customModal,
    childModal,
  } = useSelector(state => state.modalState) || {}
  const { openChild, componentChild, onCloseChild } = childModal || {}

  return (
    <>
      <Modal
        data-testid='test-confirm-modal-component'
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <>
          {openChild ? (
            <Modal open={openChild} onClose={onCloseChild}>
              {componentChild()}
            </Modal>
          ) : null}
          {customModal ? (
            customModal()
          ) : (
            <Box
              sx={{
                position: 'absolute',
                top: top ?? '50%',
                left: left ?? '50%',
                transform: 'translate(-50%, -50%)',
                width: width ?? '30%',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
              }}
            >
              <Grid container spacing={3} px={3}>
                <Grid item xs>
                  <Typography variant='h4' align='center'>
                    {message}
                  </Typography>
                </Grid>
              </Grid>
              <Box
                mt={3}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {onConfirm && (
                  <LoadingButton
                    type='button'
                    variant='contained'
                    color='primary'
                    onClick={onConfirm}
                    sx={{
                      marginRight: '1rem',
                    }}
                    startIcon={<CheckIcon />}
                    loadingPosition='start'
                  >
                    Confirm
                  </LoadingButton>
                )}
                {onClose && (
                  <LoadingButton
                    type='button'
                    variant='contained'
                    color='warning'
                    sx={{
                      marginRight: '1rem',
                    }}
                    startIcon={<HighlightOffOutlinedIcon />}
                    loadingPosition='start'
                    onClick={onClose}
                  >
                    Close
                  </LoadingButton>
                )}
              </Box>
            </Box>
          )}
        </>
      </Modal>
    </>
  )
}
