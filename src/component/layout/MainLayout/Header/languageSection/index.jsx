'use client'

import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLanguage } from '@store'

const LanguageSection = () => {
  const dispatch = useDispatch()
  const [buttonLang, setButtonLang] = useState('th')

  const handleChange = (event, newLang) => {
    if (newLang) {
      setButtonLang(newLang)
      dispatch(setLanguage(newLang))
    }
  }

  return (
    <>
      <ToggleButtonGroup
        data-testid='test-toggle-button-group'
        value={buttonLang}
        exclusive
        onChange={handleChange}
        aria-label='Platform'
        size='small'
        sx={{
          background: '#fbe9e7',
        }}
        className='mx-2'
      >
        <ToggleButton
          value='th'
          sx={{
            background: '#e85015',
          }}
        >
          TH
        </ToggleButton>
        <ToggleButton
          value='en'
          sx={{
            background: '#e85015',
          }}
        >
          EN
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}

export default LanguageSection
