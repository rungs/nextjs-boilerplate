'use client'

import { useSelector, useDispatch } from 'react-redux'
import { styled, useTheme } from '@mui/material/styles'
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery, Fab } from '@mui/material'
import { KeyboardArrowUp } from '@mui/icons-material'
import Header from './Header'
import Sidebar from './Sidebar'
import { drawerWidth } from '../../../utils/constants/constant'
import { ScrollToTop } from '@component'

// styles
const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  ...(!open && {
    paddingTop: '65px',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
      marginLeft: -drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: `calc(100% - ${drawerWidth}px)`,
      padding: '16px',
      marginRight: '10px',
    },
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    paddingTop: '65px',
  }),
}))

const MainLayout = ({ children }) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'))

  const { opened } = useSelector(state => state.opened)

  const handleLeftDrawerToggle = () => {
    console.log('ToggleMenu')
  }

  return (
    <>
      <div id='top-anchor'></div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position='fixed'
          elevation={0}
          variant='contained'
          sx={{
            // bgcolor: theme.palette.primary[500],
            backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, #f09819)`,
          }}
        >
          <Toolbar>
            <Header  />
          </Toolbar>
        </AppBar>
        <Sidebar
        />
        <Main  open={opened}>
          {children}
        </Main>
        <ScrollToTop>
          <Fab size='small' color='primary'>
            <KeyboardArrowUp />
          </Fab>
        </ScrollToTop>
      </Box>
    </>
  )
}

export default MainLayout
