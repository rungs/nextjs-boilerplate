/* eslint-disable prettier/prettier */
import { Box, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { StripedDataGrid } from '@utils'
import { GridActionsCellItem, GridToolbarContainer, GridRowModes } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import { PAGE_SIZE, PAGE_SIZE_OPTIONS } from '@constants'
import { useSelector } from 'react-redux'
import { selectTranslations } from '@store/i18nSlice'

export const TableComponent = ({
  rows,
  rowModesModel = {},
  tableHeader,
  handleSaveClick,
  handleCancelClick,
  handleEditClick,
  handleDeleteClick,
  isAddRecord,
  handleAddRecord,
  isEdit = true,
  rowId = 'id',
  isDelete,
  hiddenColumn = {},
  useDefaultAction = true,
  useStriped = true,
  customLoadingOverlay = undefined,
  customNoRowsOverlay = undefined,
  ...otherProps
}) => {
  const theme = useTheme()
  const translator = useSelector(selectTranslations)

  const AddRecordToolBar = () => {
    return (
      <GridToolbarContainer>
        <Button color='primary' startIcon={<AddIcon />} onClick={handleAddRecord}>
          Add record
        </Button>
      </GridToolbarContainer>
    )
  }

  const defaultActionColumns = [
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      headerClassName: 'MuiDataGrid-pinnedColumnHeaders--right header-orange',
      getActions: row => {
        const isInEditMode = rowModesModel[row.id]?.mode === GridRowModes.Edit

        const editCell = (
          <GridActionsCellItem
            key='row-edit'
            icon={<EditIcon />}
            label='Edit'
            className='textPrimary'
            onClick={handleEditClick(row.id)}
            color='inherit'
          />
        )

        const deleteCell = (
          <GridActionsCellItem
            key='row-delete'
            icon={<DeleteIcon />}
            label='Delete'
            onClick={handleDeleteClick(row)}
            color='inherit'
          />
        )

        const actionCell = []

        if (isEdit) {
          actionCell.push(editCell)
        }
        actionCell.push(deleteCell)

        return actionCell
      },
    },
  ]

  const newColumns = [...tableHeader, ...(useDefaultAction ? defaultActionColumns : [])]

  const stripProps = {
    getRowClassName: params => (params?.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'),
  }

  const slots = {
    toolbar: isAddRecord && AddRecordToolBar,
    ...(customLoadingOverlay && { loadingOverlay: customLoadingOverlay }),
    ...(customNoRowsOverlay && { noRowsOverlay: customNoRowsOverlay }),
  }

  const defaultLabelDisplayedRows = ({ from, to, count }) => {
    return `${from}–${to} ${
      translator.premium_quotation.common.table.paginate.label_displayed_rows_of
    } ${
      count !== -1
        ? count
        : `${translator.premium_quotation.common.table.paginate.label_displayed_rows_more_than} ${to}`
    }`
  }

  return (
    <>
      <Box
        data-testid='table-component'
        sx={{
          paddingTop: 2,
          width: '100%',
          '& .header-orange': {
            backgroundColor: theme.palette.primary.dark,
            color: 'white',
          },
          '&:hover': {
            cursor: 'pointer',
          },
          // '& .MuiDataGrid-cell:last-child': {
          //   position: 'sticky',
          //   top: '0',
          //   right: '0',
          //   zIndex: 100,
          //   backgroundColor: 'white',
          // },
        }}
      >
        <StripedDataGrid
          rows={rows}
          columns={newColumns}
          rowModesModel={rowModesModel}
          getRowId={row => row[rowId]}
          pageSizeOptions={PAGE_SIZE_OPTIONS}
          {...(useStriped && stripProps)}
          slots={slots}
          slotProps={{
            pagination: {
              labelRowsPerPage:
                translator.premium_quotation.common.table.paginate.label_rows_per_page,
              labelDisplayedRows: defaultLabelDisplayedRows,
            },
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: PAGE_SIZE },
            },
            columns: {
              columnVisibilityModel: hiddenColumn,
            },
          }}
          disableColumnMenu={true}
          {...otherProps}
        />
      </Box>
    </>
  )
}
