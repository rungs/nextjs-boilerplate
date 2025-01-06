import { useSelector } from 'react-redux'
import { selectTranslations } from '@store'

export const TABLE_ROLE_MANAGEMENT_HEADER = () => {
  const t = useSelector(selectTranslations)

  return [
    {
      field: 'roleCode',
      headerName: t.role_management.table.header.role_id,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: true,
      editable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'roleName',
      headerName: t.role_management.table.header.role_name,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: true,
      editable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
  ]
}
