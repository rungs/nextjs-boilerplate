import { TABLE_USER_MANAGEMENT_HEADER } from '@utils'

jest.mock('react-redux', () => ({
  useSelector: state =>
    state({
      translations: {
        translations: {
          user_management: {
            table: {
              header: {
                user_login: 'user_login',
                user_id: 'user_id',
                first_name: 'first_name',
                surname: 'surname',
                active: 'active',
                company: 'company',
                level: 'level',
                role: 'role',
              },
            },
          },
        },
      },
    }),
}))

describe('TABLE_USER_MANAGEMENT_HEADER', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function TABLE_USER_MANAGEMENT_HEADER for renders table header', () => {
    const tableHeader = TABLE_USER_MANAGEMENT_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: 'SomeValue' })
    const result2 = tableHeader[1].valueGetter({ value: 'SomeValue' })
    const result3 = tableHeader[2].valueGetter({ value: 'SomeValue' })
    const result4 = tableHeader[3].valueGetter({ value: 'SomeValue' })
    const result5 = tableHeader[4].valueGetter({ value: 'SomeValue' })
    const result6 = tableHeader[5].valueGetter({ value: 'SomeValue' })
    const result7 = tableHeader[6].valueGetter({ value: 'SomeValue' })
    const result8 = tableHeader[7].valueGetter({ value: 'SomeValue' })

    expect(result1).toBe('SomeValue')
    expect(result2).toBe('SomeValue')
    expect(result3).toBe('SomeValue')
    expect(result4).toBe('SomeValue')
    expect(result5).toBe('SomeValue')
    expect(result6).toBe('SomeValue')
    expect(result7).toBe('SomeValue')
    expect(result8).toBe('SomeValue')
  })

  it('Call function TABLE_USER_MANAGEMENT_HEADER for renders table header is value null', () => {
    const tableHeader = TABLE_USER_MANAGEMENT_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: null })
    const result2 = tableHeader[1].valueGetter({ value: null })
    const result3 = tableHeader[2].valueGetter({ value: null })
    const result4 = tableHeader[3].valueGetter({ value: null })
    const result5 = tableHeader[4].valueGetter({ value: null })
    const result6 = tableHeader[5].valueGetter({ value: null })
    const result7 = tableHeader[6].valueGetter({ value: null })
    const result8 = tableHeader[7].valueGetter({ value: null })

    expect(result1).toBe('-')
    expect(result2).toBe('-')
    expect(result3).toBe('-')
    expect(result4).toBe('-')
    expect(result5).toBe('-')
    expect(result6).toBe('-')
    expect(result7).toBe('-')
    expect(result8).toBe('-')
  })
})
