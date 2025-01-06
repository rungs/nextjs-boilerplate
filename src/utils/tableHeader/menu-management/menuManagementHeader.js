import { useSelector } from 'react-redux'
import { selectTranslations } from '@store'

export const TABLE_MAIN_MENU_HEADER = () => {
  const t = useSelector(selectTranslations)

  return [
    {
      field: 'menu_link_code',
      headerName: t.menu_management.table.header.menu_code,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'left',
      sortable: true,
      editable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'menu_link_name',
      headerName: t.menu_management.table.header.menu_name,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'left',
      sortable: true,
      editable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
  ]
}

export const TABLE_SUB_MENU_HEADER = () => {
  const t = useSelector(selectTranslations)
  return [
    {
      field: 'menu_link_code',
      headerName: t.menu_management.table.header.sub_code,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'left',
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'menu_link_name',
      headerName: t.menu_management.table.header.sub_name,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'left',
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
  ]
}

export const TABLE_PROGRAM_MENU_HEADER = () => {
  const t = useSelector(selectTranslations)
  return [
    {
      field: 'menu_link_code',
      headerName: t.menu_management.table.header.program_code,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'left',
      sortable: true,
      editable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'menu_link_name',
      headerName: t.menu_management.table.header.program_name,
      flex: 1,
      headerClassName: 'header-orange',
      headerAlign: 'left',
      sortable: true,
      editable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
  ]
}
