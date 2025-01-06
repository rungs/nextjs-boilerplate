'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from '@mui/material/styles'
import {
  Box,
  Chip,
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
} from '@mui/material'
import { useDispatch } from 'react-redux'
// third-party
import PerfectScrollbar from 'react-perfect-scrollbar'

import { MainCard, Transitions } from '@component'

// import { useLocalStorage } from "../../../../hooks/useLocalStorage";

// assets
//import { IconLogout, IconSettings } from '@tabler/icons-react'
import { logoutUser } from '@apis'

const ProfileSection = () => {
  const theme = useTheme()
  const router = useRouter()
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)

  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [open, setOpen] = useState(false)

  const anchorRef = useRef(null)

  const handleLogout = async () => {
    localStorage.clear()
    sessionStorage.clear()
    logoutUser()
    dispatch(setNoticeData([]))
    router.replace('/')
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  // const handleListItemClick = (event, index, route = '') => {
  //   setSelectedIndex(index)
  //   handleClose(event)

  //   if (route && route !== '') {
  //     navigate(route)
  //   }
  // }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const prevOpen = useRef(open)

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = JSON.parse(localStorage.getItem('userData'))
      setUser(userData)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageEventHandler = () => {
        setUser(JSON.parse(localStorage.getItem('userData')))
      }

      window.addEventListener('storage', storageEventHandler)

      return function cleanup() {
        window.removeEventListener('storage', storageEventHandler)
      }
    }
  }, [])

  return (
    <>
      <Stack direction='row' spacing={1}>
        <Chip
          sx={{
            my: '0.5rem',
            height: '35px',
            alignItems: 'center',
            borderRadius: '27px',
            color: theme.palette.primary.dark,
            transition: 'all .2s ease-in-out',
            borderColor: theme.palette.primary.light,
            backgroundColor: theme.palette.primary.light,
            '&[aria-controls="menu-list-grow"], &:hover': {
              borderColor: theme.palette.primary.main,
              background: `${theme.palette.primary.main}!important`,
              color: theme.palette.primary.light,
              '& svg': {
                stroke: theme.palette.primary.light,
              },
            },
            '& .MuiChip-label': {
              lineHeight: 0,
            },
          }}
          label={
            <Stack direction='row' spacing={1}>
              <Typography
                sx={{
                  mt: '4px',
                }}
              >
                {user && `${user?.user_name}`}
              </Typography>

              {/* <IconSettings stroke={1.5} size='1.5rem' color={theme.palette.primary.dark} /> */}
            </Stack>
          }
          variant='outlined'
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
          color='primary'
        />
      </Stack>
      <Popper
        placement='bottom-end'
        open={open}
        anchorEl={anchorRef?.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 20],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions in={open} {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard
                  border={false}
                  elevation={16}
                  content={false}
                  boxShadow
                  shadow={theme.shadows[16]}
                >
                  <PerfectScrollbar
                    style={{
                      height: '100%',
                      maxHeight: 'calc(100vh - 250px)',
                      overflowX: 'hidden',
                    }}
                  >
                    <Box sx={{ px: 2 }}>
                      <List
                        component='nav'
                        sx={{
                          width: '100%',
                          maxWidth: 350,
                          minWidth: 300,
                          backgroundColor: theme.palette.background.paper,
                          borderRadius: '10px',
                          [theme.breakpoints.down('md')]: {
                            minWidth: '100%',
                          },
                          '& .MuiListItemButton-root': {
                            mt: 0.5,
                          },
                        }}
                      >
                        <ListItemButton
                          data-testid='test-handle-Logout'
                          sx={{
                            borderRadius: '0px',
                          }}
                          onClick={handleLogout}
                        >
                          <ListItemIcon>
                            {/* <IconLogout stroke={1.5} size='1.3rem' /> */}
                          </ListItemIcon>
                          <ListItemText primary={<Typography variant='body2'>Logout</Typography>} />
                        </ListItemButton>
                      </List>
                    </Box>
                  </PerfectScrollbar>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </>
  )
}

export default ProfileSection
