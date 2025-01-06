import {
  TABLE_COMPANY_MANAGEMENT_HEADER,
  TABLE_CHANNEL_HEADER,
  TABLE_REGION_HEADER,
  TABLE_DISTRICT_HEADER,
  TABLE_BRANCH_HEADER,
} from '@utils'

jest.mock('react-redux', () => ({
  useSelector: state =>
    state({
      translations: {
        translations: {
          org_management: {
            table: {
              header: {
                company_code: 'company_code',
                company_name: 'company_name',
                channel_code: 'channel_code',
                channel_name: 'channel_name',
                region_code: 'region_code',
                region_name: 'region_name',
                district_code: 'district_code',
                district_name: 'district_name',
                branch_code: 'branch_code',
                branch_name: 'branch_name',
              },
            },
          },
        },
      },
    }),
}))

describe('TABLE_COMPANY_MANAGEMENT_HEADER', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function TABLE_COMPANY_MANAGEMENT_HEADER for renders table header', () => {
    const tableHeader = TABLE_COMPANY_MANAGEMENT_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: 'SomeValue' })
    const result2 = tableHeader[1].valueGetter({ value: 'SomeValue' })

    expect(result1).toBe('SomeValue')
    expect(result2).toBe('SomeValue')
  })

  it('Call function TABLE_COMPANY_MANAGEMENT_HEADER for renders table header is value null', () => {
    const tableHeader = TABLE_COMPANY_MANAGEMENT_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: null })
    const result2 = tableHeader[1].valueGetter({ value: null })

    expect(result1).toBe('-')
    expect(result2).toBe('-')
  })
})

describe('TABLE_CHANNEL_HEADER', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function TABLE_CHANNEL_HEADER for renders table header', () => {
    const tableHeader = TABLE_CHANNEL_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: 'SomeValue' })
    const result2 = tableHeader[1].valueGetter({ value: 'SomeValue' })

    expect(result1).toBe('SomeValue')
    expect(result2).toBe('SomeValue')
  })

  it('Call function TABLE_CHANNEL_HEADER for renders table header is value null', () => {
    const tableHeader = TABLE_CHANNEL_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: null })
    const result2 = tableHeader[1].valueGetter({ value: null })

    expect(result1).toBe('-')
    expect(result2).toBe('-')
  })
})

describe('TABLE_REGION_HEADER', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function TABLE_REGION_HEADER for renders table header', () => {
    const tableHeader = TABLE_REGION_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: 'SomeValue' })
    const result2 = tableHeader[1].valueGetter({ value: 'SomeValue' })

    expect(result1).toBe('SomeValue')
    expect(result2).toBe('SomeValue')
  })

  it('Call function TABLE_REGION_HEADER for renders table header is value null', () => {
    const tableHeader = TABLE_REGION_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: null })
    const result2 = tableHeader[1].valueGetter({ value: null })

    expect(result1).toBe('-')
    expect(result2).toBe('-')
  })
})

describe('TABLE_DISTRICT_HEADER', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function TABLE_DISTRICT_HEADER for renders table header', () => {
    const tableHeader = TABLE_DISTRICT_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: 'SomeValue' })
    const result2 = tableHeader[1].valueGetter({ value: 'SomeValue' })

    expect(result1).toBe('SomeValue')
    expect(result2).toBe('SomeValue')
  })

  it('Call function TABLE_DISTRICT_HEADER for renders table header is value null', () => {
    const tableHeader = TABLE_DISTRICT_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: null })
    const result2 = tableHeader[1].valueGetter({ value: null })

    expect(result1).toBe('-')
    expect(result2).toBe('-')
  })
})

describe('TABLE_BRANCH_HEADER', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function TABLE_BRANCH_HEADER for renders table header', () => {
    const tableHeader = TABLE_BRANCH_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: 'SomeValue' })
    const result2 = tableHeader[1].valueGetter({ value: 'SomeValue' })

    expect(result1).toBe('SomeValue')
    expect(result2).toBe('SomeValue')
  })

  it('Call function TABLE_BRANCH_HEADER for renders table header is value null', () => {
    const tableHeader = TABLE_BRANCH_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: null })
    const result2 = tableHeader[1].valueGetter({ value: null })

    expect(result1).toBe('-')
    expect(result2).toBe('-')
  })
})
