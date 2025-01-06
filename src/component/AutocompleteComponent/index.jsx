import PropTypes from 'prop-types'
import { useState, useEffect, forwardRef } from 'react'
import { Autocomplete, TextField, CircularProgress, Chip } from '@mui/material'
import { useMutation } from 'react-query'
import { useSelector } from 'react-redux'
import { selectTranslations } from '@store/i18nSlice'

export const AutocompleteComponent = forwardRef(
  (
    {
      id = null,
      options = [],
      value = null,
      label = null,
      required = false,
      setValue = null,
      displayValue = false,
      disabled = false,
      multiple = false,
      limitTags = -1,
      customStyle = null,
      useDefaultProps = true,
      onBeforeOpen = null,
      onBeforeClose = null,
      error = false,
      helperText = '',
      alwaysReloadOptions = false,
      multilingual = false,
      preload = false,
      isNotFetch = true,
      ...otherProps
    },
    ref,
  ) => {
    const { lang } = useSelector(state => state.lang)
    const [optionAsync, setOptionAsync] = useState([])
    const translator = useSelector(selectTranslations)

    useEffect(() => {
      let subscribe = true
      if (subscribe && preload) {
        mutateOption()
      }

      return () => {
        subscribe = false
      }
    }, [])

    const { mutate: mutateOption, isLoading: loading } = useMutation({
      mutationFn: async () => await onBeforeOpen(),
      onSuccess: res => {
        setOptionAsync(res)
      },
    })

    const handleOpen = async () => {
      if (!isNotFetch) return mutateOption()

      if (optionAsync.length === 0 && onBeforeOpen) {
        mutateOption()
      }
    }

    const handleClose = () => {
      if (onBeforeClose) onBeforeClose()
      if (alwaysReloadOptions) {
        setOptionAsync([])
      }
    }

    const commonProps = {
      id: id ? id : 'multiple-limit-tags',
      ['data-testid']: 'autocomplete',
      size: 'small',
      value: value,
      disabled: disabled,
      multiple: multiple,
    }

    const defaultProps = {
      ...commonProps,
      autoComplete: true,
      clearOnBlur: true,
      handleHomeEndKeys: true,
      selectOnFocus: true,
      freeSolo: true,
      filterSelectedOptions: true,
      limitTags: limitTags,
      options: options,
      isOptionEqualToValue: (option, value) => option.id === value.id,
      getOptionLabel: option => {
        if (typeof option === 'string') {
          return option
        }

        return displayValue
          ? option.value
          : multilingual
          ? option.label[lang.toLowerCase()]
          : option.label
      },
      renderOption: (props, option) => {
        return (
          <li {...props}>
            {displayValue
              ? option.value
              : multilingual
              ? option.label[lang.toLowerCase()]
              : option.label}
          </li>
        )
      },
      renderInput: params => <TextField {...params} label={label} fullWidth required={required} />,
      onChange: (event, newValue) => setValue(newValue),
    }

    const asyncProp = {
      ...commonProps,
      ref: ref,
      options: optionAsync,
      loading: loading,
      noOptionsText: translator.premium_quotation.common.autocomplete.nodata,
      onOpen: handleOpen,
      onClose: handleClose,
      loadingText: translator.premium_quotation.common.autocomplete.loading,
      isOptionEqualToValue: (option, value) => option.id === value.id,
      getOptionLabel: option => {
        if (typeof option === 'string') {
          return option
        }

        return multilingual ? option.label[lang.toLowerCase()] : option.label
      },
      renderOption: (props, option) => {
        return (
          <li {...props} key={option.id}>
            {multilingual ? option.label[lang.toLowerCase()] : option.label}
          </li>
        )
      },
      renderTags: (tagValue, getTagProps) => {
        return tagValue.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            key={option.id}
            label={multilingual ? option.label[lang.toLowerCase()] : option.label}
          />
        ))
      },
      renderInput: params => (
        <TextField
          {...params}
          error={error}
          helperText={helperText}
          required={required}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color='inherit' size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      ),
    }

    return (
      <>
        <Autocomplete
          sx={{
            '& .MuiAutocomplete-endAdornment': { ...customStyle },
          }}
          {...(useDefaultProps ? defaultProps : asyncProp)}
          {...otherProps}
        />
      </>
    )
  },
)

AutocompleteComponent.displayName = 'AutocompleteComponent'

AutocompleteComponent.propTypes = {
  id: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  required: PropTypes.bool,
  setValue: PropTypes.func,
  displayValue: PropTypes.bool,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  limitTags: PropTypes.number,
  customStyle: PropTypes.object,
  useDefaultProps: PropTypes.bool,
  onBeforeOpen: PropTypes.func, // function that return Promise<option[]>
  onBeforeClose: PropTypes.func, // function that return void
  error: PropTypes.bool,
  helperText: PropTypes.string,
  alwaysReloadOptions: PropTypes.bool,
  multilingual: PropTypes.bool,
}
