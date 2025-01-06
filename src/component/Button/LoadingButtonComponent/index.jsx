import { LoadingButton } from '@mui/lab'

const LoadingButtonComponent = ({ text, type = 'button', onClick, color, icon, sx }) => {
  const defaultSx = {
    marginRight: '1rem',
  }

  const handleColor = () => {
    switch (color) {
      case 'primary':
        return 'primary'
      case 'secondary':
        return 'secondary'
      case 'success':
        return 'success'
      case 'warning':
        return 'warning'
      case 'error':
        return 'error'
      case 'grey':
        return 'grey'
      default:
        return 'primary'
    }
  }

  return (
    <LoadingButton
      type={type}
      variant='contained'
      color={handleColor()}
      onClick={onClick}
      sx={{
        ...defaultSx,
        ...sx,
      }}
      startIcon={icon}
      loadingPosition='start'
    >
      {text}
    </LoadingButton>
  )
}

export default LoadingButtonComponent
