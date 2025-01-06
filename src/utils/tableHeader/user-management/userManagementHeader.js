import { useSelector } from 'react-redux'
import { selectTranslations } from '@store'

export const TABLE_USER_MANAGEMENT_HEADER = () => {
  const translator = useSelector(selectTranslations)

  return [
    {
      field: 'userLogin',
      headerName: translator.user_management.table.header.user_login,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'userId',
      headerName: translator.user_management.table.header.user_id,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'firstName',
      headerName: translator.user_management.table.header.first_name,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'surname',
      headerName: translator.user_management.table.header.surname,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'isActive',
      headerName: translator.user_management.table.header.active,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: false,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'companyCode',
      headerName: translator.user_management.table.header.company,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: false,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'level',
      headerName: translator.user_management.table.header.level,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: false,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'roleCode',
      headerName: translator.user_management.table.header.role,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: false,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
  ]
}
