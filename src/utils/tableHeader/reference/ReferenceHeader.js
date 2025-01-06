export const TABLE_REFERENCE_HEADER = () => {
  return [
    {
      field: 'refGroup',
      headerName: 'Ref Group',
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
      field: 'refCode',
      headerName: 'Ref',
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
      field: 'refDesc1',
      headerName: 'Ref Desc 1',
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
      field: 'refDesc2',
      headerName: 'Ref Desc 2',
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
      field: 'refDesc3',
      headerName: 'Ref Desc 3',
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
      field: 'refValue1',
      headerName: 'Ref Value 1',
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
      field: 'refValue2',
      headerName: 'Ref Value 2',
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
      field: 'refValue3',
      headerName: 'Ref Value 3',
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
      field: 'status',
      headerName: 'Status',
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
      field: 'createBy',
      headerName: 'Create By',
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
      field: 'updateBy',
      headerName: 'Update By',
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
  ]
}
