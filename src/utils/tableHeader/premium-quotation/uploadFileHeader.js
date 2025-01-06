import { useSelector } from 'react-redux'
import { selectTranslations } from '@store/i18nSlice'
import { Check, Close } from '@mui/icons-material'

export const TABLE_SEARCH_HEADER = () => {
  const translator = useSelector(selectTranslations)

  return [
    {
      field: 'is_result',
      headerName: translator.premium_quotation.menu.upload.form.result.passed,
      headerAlign: 'center',
      sortable: true,
      minWidth: 100,
      align: 'center',
      headerClassName: 'header-orange',
      flex: 1,
      renderCell: props => {
        let passed = props.value
        return (
          <>
            {passed ? (
              <Check fontSize='small' color='success' />
            ) : (
              <Close fontSize='small' color='error' />
            )}
          </>
        )
      },
    },
    {
      field: 'no',
      headerName: translator.premium_quotation.menu.upload.form.result.row_no,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: true,
      minWidth: 100,
      align: 'center',
      flex: 1,
    },
    {
      field: 'license_no',
      headerName: translator.premium_quotation.menu.upload.form.result.regis_no,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: true,
      minWidth: 200,
      align: 'center',
      flex: 2,
    },
    {
      field: 'result',
      headerName: translator.premium_quotation.menu.upload.form.result.remark,
      headerAlign: 'center',
      headerClassName: 'header-orange',
      sortable: true,
      minWidth: 150,
      align: 'left',
      flex: 9,
    },
  ]
}

export const TABLE_SEARCH_HEADER_HIDDEN = () => {
  return {}
}
