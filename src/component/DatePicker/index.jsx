import * as React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const DatePickerComponent = ({ id, label, required, size, onChange, field, value }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        {...field}
        id={id}
        label={label}
        onChange={onChange}
        inputFormat={'DD/MM/YYYY'}
        format={'DD/MM/YYYY'}
        slotProps={{
          textField: {
            value,
            size,
            required,
            fullWidth: true,
          },
        }}
      />
    </LocalizationProvider>
  )
}
