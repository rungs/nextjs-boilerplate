import { TABLE_SEARCH_HEADER, TABLE_SEARCH_HEADER_HIDDEN } from './uploadHeader'

jest.mock('react-redux', () => ({
  useSelector: state =>
    state({
      lang: {
        lang: 'th',
      },
      translations: {
        translations: {
          premium_quotation: {
            menu: {
              upload: {
                result: {
                  file_name: 'file_name',
                  total_records: 'total_records',
                  upload_status: 'upload_status',
                  upload_date: 'upload_date',
                  upload_success_date: 'upload_success_date',
                },
              },
            },
          },
        },
      },
    }),
}))

describe('TABLE_SEARCH_HEADER_HIDDEN', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function TABLE_SEARCH_HEADER_HIDDEN for renders table header', () => {
    const tableHeader = TABLE_SEARCH_HEADER_HIDDEN()

    expect(tableHeader.upload_id).toBe(false)
  })
})

describe('TABLE_SEARCH_HEADER', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function TABLE_SEARCH_HEADER for renders table header', () => {
    const handleDownload = jest.fn()
    const actionRowId = '1'

    const tableHeader = TABLE_SEARCH_HEADER(handleDownload, actionRowId)

    tableHeader[6].getActions({ id: '1', row: { upload_status: '1' } })
    tableHeader[3].renderCell({
      value: 'value',
      row: { isSuccess: true, upload_status: 'YBIE' },
    })
    const result2 = tableHeader[4].valueGetter({ value: '10/12/2000' })
    const result3 = tableHeader[5].valueGetter({ value: '10/12/2000' })

    expect(tableHeader).toBeDefined()
    expect(result2).toBe('12/10/2543 00:00')
    expect(result3).toBe('12/10/2543 00:00')
  })

  it('Call function TABLE_SEARCH_HEADER for renders table header actionRowId null', () => {
    const handleDownload = jest.fn()

    const tableHeader = TABLE_SEARCH_HEADER(handleDownload)

    tableHeader[6].getActions({ id: '1', row: { upload_status: '1' } })
    tableHeader[3].renderCell({
      value: 'value',
      row: { isSuccess: true, upload_status: 'YBIETT' },
    })
    const result2 = tableHeader[4].valueGetter({ value: '10/12/2000' })
    const result3 = tableHeader[5].valueGetter({ value: '10/12/2000' })

    expect(tableHeader).toBeDefined()
    expect(result2).toBe('12/10/2543 00:00')
    expect(result3).toBe('12/10/2543 00:00')
  })

  it('Call function TABLE_SEARCH_HEADER for renders table header isSuccess false', () => {
    const handleDownload = jest.fn()

    const tableHeader = TABLE_SEARCH_HEADER(handleDownload)

    tableHeader[6].getActions({ id: '1', row: { upload_status: '2' } })
    tableHeader[3].renderCell({
      value: 'value',
      row: { isSuccess: false, upload_status: 'YBIETT' },
    })
    const result2 = tableHeader[4].valueGetter({ value: '10/12/2000' })
    const result3 = tableHeader[5].valueGetter({ value: '10/12/2000' })

    expect(tableHeader).toBeDefined()
    expect(result2).toBe('12/10/2543 00:00')
    expect(result3).toBe('12/10/2543 00:00')
  })
})
