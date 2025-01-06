import { Chip, CircularProgress, Tooltip } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { Download, Check, Close, SentimentVeryDissatisfied } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { selectTranslations } from '@store/i18nSlice'
import { isDesktop } from 'react-device-detect'
import { translateByKey } from '@utils'
import moment from 'moment'

export const TABLE_SEARCH_HEADER = (handleDownload, actionRowId = null) => {
  const translator = useSelector(selectTranslations)
  const { lang } = useSelector(state => state.lang)
  const isBE = lang.toUpperCase() === 'TH'

  return [
    {
      field: 'upload_id',
    },
    {
      field: 'original_file',
      headerName: translator.premium_quotation.menu.upload.result.file_name,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: true,
      minWidth: 200,
      align: 'left',
      flex: 4,
    },
    {
      field: 'total_record',
      headerName: translator.premium_quotation.menu.upload.result.total_records,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: true,
      minWidth: 150,
      align: 'center',
      flex: 1,
    },
    {
      field: 'upload_status',
      headerName: translator.premium_quotation.menu.upload.result.upload_status,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: true,
      minWidth: 150,
      align: 'center',
      flex: 1,
      renderCell: props => {
        let icon = <CircularProgress size={20} />
        let color = 'default'
        const value = props.value
        const translateValue = translateByKey(
          `premium_quotation.menu.upload.result.upload_status_${value}`,
          translator,
        )
        const status = props.row.upload_status
        switch (status) {
          case '3':
            icon = <Check color='success' />
            color = 'success'
            break
          case '4':
            icon = <Close color='error' />
            color = 'error'
            break
        }

        return (
          <Tooltip title={translateValue}>
            <Chip icon={icon} label={translateValue} variant='outlined' color={color} />
          </Tooltip>
        )
      },
    },
    {
      field: 'upload_date',
      headerName: translator.premium_quotation.menu.upload.result.upload_date,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: true,
      minWidth: 150,
      align: 'center',
      flex: 4,
      valueGetter: params => {
        let value = params.value
        if (!value) return '-'

        let dateValue = moment(value)
        if (isBE) {
          dateValue = dateValue.add(543, 'year')
        }

        return dateValue.format('DD/MM/YYYY HH:mm')
      },
    },
    {
      field: 'upload_success_date',
      headerName: translator.premium_quotation.menu.upload.result.upload_success_date,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: true,
      minWidth: 150,
      align: 'center',
      flex: 4,
      valueGetter: params => {
        let value = params.value
        if (!value) return '-'

        let dateValue = moment(value)
        if (isBE) {
          dateValue = dateValue.add(543, 'year')
        }

        return dateValue.format('DD/MM/YYYY HH:mm')
      },
    },
    {
      flex: 1,
      field: 'actions',
      type: 'actions',
      headerClassName: 'header-orange',
      minWidth: 100,
      headerAlign: 'center',
      getActions: params => {
        const isExpired = params.row.is_expire
        const upload_status = params.row.upload_status
        const shouldAction = params.id === actionRowId
        const unFinishedOrFail = params.row.upload_status !== '3'
        let title = null

        if (unFinishedOrFail)
          title = translator.premium_quotation.menu.upload.result[`upload_status_${upload_status}`]
        if (isExpired) title = translator.premium_quotation.menu.upload.result.upload_expire

        return [
          <Tooltip title={title}>
            <span>
              <GridActionsCellItem
                key={params?.id}
                disabled={!isDesktop || unFinishedOrFail || isExpired}
                icon={
                  isExpired ? (
                    <SentimentVeryDissatisfied color='error' />
                  ) : shouldAction ? (
                    <CircularProgress size={20} />
                  ) : (
                    <Download />
                  )
                }
                label='Download'
                onClick={() => handleDownload(params)}
              />
            </span>
          </Tooltip>,
        ]
      },
    },
  ]
}

export const TABLE_SEARCH_HEADER_HIDDEN = () => {
  return {
    upload_id: false,
  }
}
