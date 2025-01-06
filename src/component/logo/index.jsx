import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectTranslations } from '@store/i18nSlice'

const Logo = () => {
  const translator = useSelector(selectTranslations)

  return (
    <Typography className='text-center text-lg font-bold text-white pt-1' variant='header'>
      {/* {translator.sale_ordering} */}
      LOGO
    </Typography>
  )
}

export default Logo
