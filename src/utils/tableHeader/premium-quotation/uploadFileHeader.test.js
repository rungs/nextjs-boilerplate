import { TABLE_SEARCH_HEADER, TABLE_SEARCH_HEADER_HIDDEN } from './uploadFileHeader'

jest.mock('react-redux', () => ({
  useSelector: state =>
    state({
      translations: {
        translations: {
          premium_quotation: {
            menu: {
              upload: {
                form: {
                  result: {
                    passed: 'passed',
                    row_no: 'row_no',
                    regis_no: 'regis_no',
                    remark: 'remark',
                  },
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

    expect(tableHeader).toStrictEqual({})
  })
})

describe('TABLE_SEARCH_HEADER', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function TABLE_SEARCH_HEADER for renders table header', () => {
    const tableHeader = TABLE_SEARCH_HEADER()

    tableHeader[0].renderCell({
      value: true,
    })

    expect(tableHeader).toBeDefined()
  })

  it('Call function TABLE_SEARCH_HEADER for renders table header renderCell value false', () => {
    const tableHeader = TABLE_SEARCH_HEADER()

    tableHeader[0].renderCell({
      value: false,
    })

    expect(tableHeader).toBeDefined()
  })
})
