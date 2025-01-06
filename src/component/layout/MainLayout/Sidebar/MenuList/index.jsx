import { Typography, CircularProgress, Box } from '@mui/material'
import NavGroup from './NavGroup'
import { useCallback, useEffect, useState } from 'react'
import { LoadingComponent } from '@component'
import { usePathname } from 'next/navigation'

const MenuList = () => {
  const pathname = usePathname()

  const [item, setItem] = useState(null)

  // const lang = pathname.split('/').filter(path => path)[0]

  const getMenuItem = useCallback(async () => {
    const res = await menuItem()
    setItem(res)
  }, [])

  const renderNavItem = () => {
    const navItems = item?.items?.map(data => {
      switch (data?.type) {
        case 'group':
          return <NavGroup key={data?.id} item={data} />
        default:
          return (
            <Typography key={data?.id} variant='h6' color='error' align='center'>
              Menu Items Error
            </Typography>
          )
      }
    })

    return navItems
  }

  useEffect(() => {
    getMenuItem()
  }, [getMenuItem])

  return <>{item ? <>{renderNavItem()}</> : <LoadingComponent />}</>
}

export default MenuList
