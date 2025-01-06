import { TABLE_ROLE_MANAGEMENT_HEADER } from '@utils'

jest.mock('react-redux', () => ({
  useSelector: state =>
    state({
      translations: {
        translations: {
          role_management: {
            table: {
              header: {
                role_id: 'role_id',
                role_name: 'role_name',
              },
            },
          },
        },
      },
    }),
}))

describe('TABLE_ROLE_MANAGEMENT_HEADER', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function TABLE_ROLE_MANAGEMENT_HEADER for renders table header', () => {
    const tableHeader = TABLE_ROLE_MANAGEMENT_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: 'SomeValue' })
    const result2 = tableHeader[1].valueGetter({ value: 'SomeValue' })

    expect(result1).toBe('SomeValue')
    expect(result2).toBe('SomeValue')
  })

  it('Call function TABLE_ROLE_MANAGEMENT_HEADER for renders table header is value null', () => {
    const tableHeader = TABLE_ROLE_MANAGEMENT_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: null })
    const result2 = tableHeader[1].valueGetter({ value: null })

    expect(result1).toBe('-')
    expect(result2).toBe('-')
  })
})
