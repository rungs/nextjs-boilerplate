import PropTypes from 'prop-types'

// material-ui
import { useTheme } from '@mui/material/styles'
import { Avatar, Box, ButtonBase } from '@mui/material'

// project imports
import LogoSection from '../LogoSection'
import ProfileSection from './ProfileSection'

// assets
import { IconMenu2 } from '@tabler/icons-react'
import LanguageSection from './languageSection'

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme()

  return (
    <>
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto',
          },
        }}
      >
        <Box
          component='span'
          sx={{
            display: { xs: 'none', md: 'block' },
            flexGrow: 1,
          }}
        >
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant='rounded'
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: 'all .2s ease-in-out',
              background: theme.palette.primary.light,
              color: theme.palette.primary.dark,
              '&:hover': {
                background: theme.palette.primary.main,
                color: theme.palette.primary.light,
              },
            }}
            onClick={handleLeftDrawerToggle}
            color='inherit'
          >
            <IconMenu2 stroke={1.5} size='1.3rem' />
          </Avatar>
        </ButtonBase>
      </Box>

      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />
      <LanguageSection />
      <ProfileSection />
    </>
  )
}

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func,
}

export default Header
