import { Chip, Tooltip, CircularProgress } from '@mui/material'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { Email, PictureAsPdf, Download } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { selectTranslations } from '@store/i18nSlice'
import { isDesktop } from 'react-device-detect'
import moment from 'moment'

export const TABLE_SEARCH_HEADER = (handleDownload, actionRowId = null) => {
  const translator = useSelector(selectTranslations)
  const { lang } = useSelector(state => state.lang)
  const isBE = lang.toUpperCase() === 'TH'

  return [
    {
      field: 'transaction_id',
    },
    {
      field: 'quotation_no',
      headerName: translator.premium_quotation.menu.create.result.quotation_no,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: true,
      minWidth: 200,
      align: 'center',
      flex: 3,
    },
    {
      field: 'customer_name',
      headerName: translator.premium_quotation.menu.create.result.customer_name,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: true,
      minWidth: 150,
      flex: 2,
    },
    {
      field: 'customer_phone_no',
      headerName: translator.premium_quotation.menu.create.result.customer_phone,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: true,
      minWidth: 150,
      flex: 2,
    },
    {
      field: 'seller_name',
      headerName: translator.premium_quotation.menu.create.result.seller_name,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: true,
      minWidth: 150,
      flex: 4,
    },
    {
      field: 'seller_phone_no',
      headerName: translator.premium_quotation.menu.create.result.seller_phone,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: true,
      minWidth: 150,
      flex: 2,
    },
    {
      field: 'submission_type_desc_culture',
      headerName: translator.premium_quotation.menu.create.result.submission_type,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: false,
      minWidth: 100,
      flex: 3,
      renderCell: props => {
        let value = props.value[lang.toLowerCase()].toUpperCase()
        let code = props.row.submission_type_code
        let icon = <Email />
        if (code === '1') {
          icon = <PictureAsPdf />
        }

        return (
          <Tooltip title={value}>
            <Chip icon={icon} label={value} />
          </Tooltip>
        )
      },
    },
    {
      field: 'create_date',
      headerName: translator.premium_quotation.menu.create.result.create_date,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: true,
      minWidth: 100,
      align: 'center',
      flex: 1,
      valueGetter: params => {
        let value = moment(params.value)
        if (isBE) {
          value = moment(params.value).add(543, 'year')
        }

        return value.format('DD/MM/YYYY')
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
        const shouldAction = params.id === actionRowId
        return [
          <GridActionsCellItem
            key={params?.id}
            disabled={!isDesktop}
            icon={shouldAction ? <CircularProgress size={20} /> : <Download />}
            label='Download'
            onClick={() => handleDownload(params)}
          />,
        ]
      },
    },
  ]
}

export const TABLE_SEARCH_HEADER_HIDDEN = () => {
  return {
    transaction_id: false,
  }
}
