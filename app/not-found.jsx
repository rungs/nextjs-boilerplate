'use client'

import { Grid } from '@mui/material'

export default function NotFound() {
  return (
    <Grid
      container
      height='100vh'
      alignItems='center'
      justifyContent='center'
      direction='column'
      className='text-lg font-bold text-orange-500'
      sx={{ paddingBottom: '10rem' }}
    >
      <h1>404 PAGE NOT FOUND !</h1>
    </Grid>
  )
}
