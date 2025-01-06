import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NavigationScroll = ({ children }) => {
  const location = useRouter()
  const { pathname } = location

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return children || null
}

export default NavigationScroll
