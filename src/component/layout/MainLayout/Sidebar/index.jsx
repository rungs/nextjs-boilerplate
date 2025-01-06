import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import { Box, Drawer, useMediaQuery } from '@mui/material'

import PerfectScrollbar from 'react-perfect-scrollbar'

import MenuList from './MenuList'
import LogoSection from '../LogoSection'

import { drawerWidth } from '../../../../utils/constants/constant'

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
  const theme = useTheme()
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'))

  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 1,
            mx: 'auto',
            backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, #f09819)`,
          }}
        >
          <LogoSection />
        </Box>
      </Box>
      <PerfectScrollbar
        component='div'
        style={{
          height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
      >
        <MenuList />
      </PerfectScrollbar>
    </>
  )

  const container = window !== undefined ? () => window.document.body : undefined

  return (
    <Box
      component='nav'
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }}
      aria-label='mailbox folders'
    >
      <Drawer
        container={container}
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor='left'
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '50px',
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color='inherit'
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object,
}

export default Sidebar
