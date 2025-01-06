import { TABLE_MAIN_MENU_HEADER, TABLE_SUB_MENU_HEADER, TABLE_PROGRAM_MENU_HEADER } from '@utils'

jest.mock('react-redux', () => ({
  useSelector: state =>
    state({
      translations: {
        translations: {
          menu_management: {
            table: {
              header: {
                menu_code: 'menu_code',
                menu_name: 'menu_name',
                sub_code: 'sub_code',
                sub_name: 'sub_name',
                program_code: 'program_code',
                program_name: 'program_name',
              },
            },
          },
        },
      },
    }),
}))

describe('TABLE_MAIN_MENU_HEADER', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function TABLE_MAIN_MENU_HEADER for renders table header', () => {
    const tableHeader = TABLE_MAIN_MENU_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: 'SomeValue' })
    const result2 = tableHeader[1].valueGetter({ value: 'SomeValue' })

    expect(result1).toBe('SomeValue')
    expect(result2).toBe('SomeValue')
  })

  it('Call function TABLE_MAIN_MENU_HEADER for renders table header is value null', () => {
    const tableHeader = TABLE_MAIN_MENU_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: null })
    const result2 = tableHeader[1].valueGetter({ value: null })

    expect(result1).toBe('-')
    expect(result2).toBe('-')
  })
})

describe('TABLE_SUB_MENU_HEADER', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function TABLE_SUB_MENU_HEADER for renders table header', () => {
    const tableHeader = TABLE_SUB_MENU_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: 'SomeValue' })
    const result2 = tableHeader[1].valueGetter({ value: 'SomeValue' })

    expect(result1).toBe('SomeValue')
    expect(result2).toBe('SomeValue')
  })

  it('Call function TABLE_SUB_MENU_HEADER for renders table header is value null', () => {
    const tableHeader = TABLE_SUB_MENU_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: null })
    const result2 = tableHeader[1].valueGetter({ value: null })

    expect(result1).toBe('-')
    expect(result2).toBe('-')
  })
})

describe('TABLE_PROGRAM_MENU_HEADER', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function TABLE_PROGRAM_MENU_HEADER for renders table header', () => {
    const tableHeader = TABLE_PROGRAM_MENU_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: 'SomeValue' })
    const result2 = tableHeader[1].valueGetter({ value: 'SomeValue' })

    expect(result1).toBe('SomeValue')
    expect(result2).toBe('SomeValue')
  })

  it('Call function TABLE_PROGRAM_MENU_HEADER for renders table header is value null', () => {
    const tableHeader = TABLE_PROGRAM_MENU_HEADER()

    const result1 = tableHeader[0].valueGetter({ value: null })
    const result2 = tableHeader[1].valueGetter({ value: null })

    expect(result1).toBe('-')
    expect(result2).toBe('-')
  })
})
