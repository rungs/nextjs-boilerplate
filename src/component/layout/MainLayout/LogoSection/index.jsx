import { ButtonBase, Link } from '@mui/material'
import Logo from '../../../logo'

const LogoSection = () => {
  return (
    <ButtonBase disableRipple onClick={() => null} component={Link} to='/'>
      <Logo />
    </ButtonBase>
  )
}

export default LogoSection
