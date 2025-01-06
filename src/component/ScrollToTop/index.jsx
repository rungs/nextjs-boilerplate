import PropTypes from 'prop-types'
import { Fade, Box, useScrollTrigger, Tooltip } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectTranslations } from '@store/i18nSlice'
import useScroll from '@hooks/useScroll'

const ScrollToTop = ({ children, window }) => {
  const translator = useSelector(selectTranslations)
  const { handleScrollTo } = useScroll()

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = () => {
    handleScrollTo('top-anchor')
  }

  return (
    <Fade in={trigger} data-testid='test-scroll-to-top'>
      <Tooltip >
        <Box
          data-testid='test-box'
          role='presentation'
          onClick={handleClick}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
          }}
        >
          {children}
        </Box>
      </Tooltip>
    </Fade>
  )
}

ScrollToTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

export default ScrollToTop
