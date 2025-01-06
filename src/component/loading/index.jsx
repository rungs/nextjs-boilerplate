import * as React from 'react'
import { Backdrop } from '@mui/material'
import { BoxIcon, HeaderIcon, BodyIcon, BodyInside } from './styled'

const LoadingComponent = ({ isLoading = true }) => {
  return (
    <Backdrop sx={{ color: '#f09819', zIndex: 9999 }} open={isLoading}>
      <BoxIcon>
        <HeaderIcon className='header-Icon' />
        <BodyIcon className='body-Icon'>
          <BodyInside className='body-Inside' />
        </BodyIcon>
      </BoxIcon>
    </Backdrop>
  )
}

export default LoadingComponent
