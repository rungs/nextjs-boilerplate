import { useSelector } from 'react-redux'
import { selectTranslations } from '@store'

export const TABLE_COMPANY_MANAGEMENT_HEADER = () => {
  const t = useSelector(selectTranslations)
  return [
    {
      field: 'companyCode',
      headerName: t.org_management.table.header.company_code,
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
      field: 'companyName',
      headerName: t.org_management.table.header.company_name,
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

export const TABLE_CHANNEL_HEADER = () => {
  const t = useSelector(selectTranslations)
  return [
    {
      field: 'channelCode',
      headerName: t.org_management.table.header.channel_code,
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
      field: 'channelName',
      headerName: t.org_management.table.header.channel_name,
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

export const TABLE_REGION_HEADER = () => {
  const t = useSelector(selectTranslations)
  return [
    {
      field: 'regionCode',
      headerName: t.org_management.table.header.region_code,
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
      field: 'regionName',
      headerName: t.org_management.table.header.region_name,
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

export const TABLE_DISTRICT_HEADER = () => {
  const t = useSelector(selectTranslations)
  return [
    {
      field: 'districtCode',
      headerName: t.org_management.table.header.district_code,
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
      field: 'districtName',
      headerName: t.org_management.table.header.district_name,
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

export const TABLE_BRANCH_HEADER = () => {
  const t = useSelector(selectTranslations)
  return [
    {
      field: 'branchCode',
      headerName: t.org_management.table.header.branch_code,
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
      field: 'branchName',
      headerName: t.org_management.table.header.branch_name,
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
