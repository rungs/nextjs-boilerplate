import { TableComponent } from './index'
import { render, screen } from '@testing-library/react'

jest.mock('react-redux', () => {
  return {
    useSelector: state =>
      state({
        translations: {
          translations: {
            premium_quotation: {
              common: {
                table: {
                  paginate: 'mock userInfo state',
                },
              },
            },
          },
        },
      }),
  }
})

const TABLE_TEST_HEADER = () => {
  return [
    {
      field: 'menu_link_code',
      headerName: 'Menu Code',
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
      headerName: 'Menu Name',
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

const rows = [
  {
    id: '1',
    menu_link_code: '1',
    menu_link_name: '1',
  },
  {
    id: '2',
    menu_link_code: '2',
    menu_link_name: '2',
  },
]

const handleEditClick = jest.fn()
const handleDeleteClick = jest.fn()

describe('Test Component TableComponent', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render TableComponent', () => {
    const Component = (
      <TableComponent
        tableHeader={TABLE_TEST_HEADER()}
        rows={rows}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
    )

    render(Component)

    const Table = screen.getByTestId('table-component')

    expect(Table).toBeInTheDocument()
    expect(render(Component)).toBeDefined()
  })

  it('should render TableComponent isAddRecord', () => {
    const Component = (
      <TableComponent
        isEdit={false}
        isAddRecord
        customLoadingOverlay
        customNoRowsOverlay
        useDefaultAction={false}
        tableHeader={TABLE_TEST_HEADER()}
        rows={rows}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
    )
    render(Component)

    const Table = screen.getByTestId('table-component')

    expect(Table).toBeInTheDocument()
    expect(render(Component)).toBeDefined()
  })
})
