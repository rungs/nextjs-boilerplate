export const TABLE_COMPANY_HEADER = () => {
  return [
    {
      field: 'companyCode',
      headerName: 'Company',
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
      headerName: 'Company',
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
      field: 'channelCode',
      headerName: 'Channel',
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
      headerName: 'Channel Name',
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
      field: 'regionCode',
      headerName: 'Region',
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
      headerName: 'Region Name',
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
      field: 'districtCode',
      headerName: 'District',
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
      headerName: 'District Name',
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
      field: 'branchCode',
      headerName: 'Branch',
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
      headerName: 'Branch Name',
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
