'use client'

import { forwardRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { selectTranslations } from '@store/i18nSlice'

// material-ui
import { useTheme } from '@mui/material/styles'
import {
  Link,
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { translateByKey } from '@utils'

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const NavItem = ({ item, level }) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const router = useRouter()
  const translator = useSelector(selectTranslations)
  const { isOpen } = useSelector(state => state.isOpen)
  const matchesSM = useMediaQuery(theme.breakpoints.down('lg'))

  const Icon = item.icon
  const itemIcon = item?.icon ? (
    <Icon stroke={1.5} size='1.3rem' />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: 6,
        height: 6,
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  )

  const itemTitle = translateByKey(item.title, translator)
  let itemTarget = '_self'
  let listItemProps = {
    // eslint-disable-next-line react/display-name
    component: forwardRef((props, ref) => (
      <Link ref={ref} {...props} to={item.url} target={itemTarget} />
      //   <Link
      //     ref={ref}
      //     href={`${item.url}`}
      //     target={itemTarget}
      //     {...props}
      //   ></Link>
      //   <Link href="#" to="/" />
    )),
  }
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget }
  }

  const itemHandler = (url, id) => {
    dispatch(menuOpen(id))
    router.replace(url)
    if (matchesSM) dispatch(setMenuOpen({ opened: false }))
  }

  // active menu item on page load
  useEffect(() => {
    const currentIndex = item?.url.includes(document?.location?.pathname) ? true : false

    if (currentIndex) {
      dispatch(menuOpen(item?.id))
    }
  }, [dispatch, item?.id, item?.url])

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      data-testid='Text-List-Item-Button'
      sx={{
        borderRadius: 2,
        my: 0.5,
        alignItems: 'flex-start',
        backgroundColor: level > 1 ? 'transparent' : 'inherit',
        py: level > 1 ? 0.5 : 1,
        pl: `${level * (level > 1 ? 17 : 24)}px`,
        '&:hover': {
          backgroundColor: `${level > 1 && theme.palette.warning.light}`,
        },
        '&.Mui-selected': {
          backgroundColor: `${level > 1 && theme.palette.warning.light}`,
        },
      }}
      selected={isOpen?.findIndex(id => id === item.id) > -1}
      onClick={() => itemHandler(item?.url, item?.id)}
    >
      <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>{itemIcon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography color='inherit' variant='h5'>
            {itemTitle}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography
              variant='caption'
              sx={{ ...theme.typography.subMenuCaption }}
              display='block'
              gutterBottom
            >
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  )
}

export default NavItem
