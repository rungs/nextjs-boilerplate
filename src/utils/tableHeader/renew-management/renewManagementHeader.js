export const TABLE_RENEW_MANAGEMENT_HEADER = () => {
  return [
    {
      field: 'companyCode',
      headerName: 'Company',
      width: 100,
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
      width: 100,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: true,
      editable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'agentCode',
      headerName: 'Agent',
      width: 100,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: true,
      editable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'agentCard',
      headerName: 'Agent Card',
      width: 100,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: true,
      editable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'accountType',
      headerName: 'Account Type',
      width: 100,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: true,
      editable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'minor',
      headerName: 'Minor',
      width: 100,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: true,
      editable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'createDate',
      headerName: 'Create Date',
      width: 100,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: true,
      editable: true,
      type: 'date',
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'createUser',
      headerName: 'Create User',
      width: 100,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: true,
      editable: true,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'updateDate',
      headerName: 'Update Date',
      width: 100,
      headerClassName: 'header-orange',
      headerAlign: 'center',
      sortable: true,
      editable: true,
      type: 'date',
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'updateUser',
      headerName: 'Update User',
      width: 100,
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
