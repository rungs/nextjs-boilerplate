import { TABLE_SEARCH_HEADER, TABLE_SEARCH_HEADER_HIDDEN } from './quotaionHeader'

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
              create: {
                result: {
                  quotation_no: 'quotation_no',
                  customer_name: 'customer_name',
                  customer_phone: 'customer_phone',
                  seller_name: 'seller_name',
                  seller_phone: 'seller_phone',
                  submission_type: 'submission_type',
                  create_date: 'create_date',
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

    expect(tableHeader.transaction_id).toBe(false)
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

    tableHeader[6].renderCell({
      value: { th: 'th' },
      row: { submission_type_code: '1' },
    })
    const result2 = tableHeader[7].valueGetter({ value: '10/12/2000' })
    tableHeader[8].getActions({ id: '1' })

    expect(result2).toBe('12/10/2543')
    expect(tableHeader).toBeDefined()
  })

  it('Call function TABLE_SEARCH_HEADER for renders table header actionRowId = null', () => {
    const handleDownload = jest.fn()

    const tableHeader = TABLE_SEARCH_HEADER(handleDownload)

    tableHeader[6].renderCell({
      value: { th: 'th' },
      row: { submission_type_code: '2' },
    })
    const result2 = tableHeader[7].valueGetter({ value: '10/12/2000' })
    tableHeader[8].getActions({ id: '1' })

    expect(result2).toBe('12/10/2543')
    expect(tableHeader).toBeDefined()
  })
})
