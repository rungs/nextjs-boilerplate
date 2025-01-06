import { Grid } from '@mui/material'

const TestIdPage = ({ params }) => {
  const { id } = params

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
      <h1>TestIdPage: {id}</h1>
    </Grid>
  )
}

export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default TestIdPage
