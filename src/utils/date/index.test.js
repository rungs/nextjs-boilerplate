import { checkDateIsValid, checkDateIsValidDDMMYYYY } from './index'

describe('checkDateIsValidDDMMYYYY', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Valid date', () => {
    const validDateStr = '30/10/2023'
    expect(checkDateIsValidDDMMYYYY(validDateStr)).toBe(true)
  })

  it('Invalid date: Invalid format', () => {
    const invalidDateStr = '2023-10-30'
    expect(checkDateIsValidDDMMYYYY(invalidDateStr)).toBe(false)
  })

  it('Invalid date: Invalid day', () => {
    const invalidDateStr = '32/10/2023'
    expect(checkDateIsValidDDMMYYYY(invalidDateStr)).toBe(false)
  })

  it('Invalid date: Invalid month', () => {
    const invalidDateStr = '30/13/2023'
    expect(checkDateIsValidDDMMYYYY(invalidDateStr)).toBe(false)
  })

  it('Invalid date: Non-existent date', () => {
    const invalidDateStr = '29/02/2023' // 2023 is not a leap year
    expect(checkDateIsValidDDMMYYYY(invalidDateStr)).toBe(false)
  })

  it('Invalid date: Invalid type', () => {
    const invalidDateStr = '30/10/2023'
    global.Date.parse = jest.fn(() => NaN)
    expect(checkDateIsValidDDMMYYYY(invalidDateStr)).toBe(true)
  })
})

describe('utils date checkDateIsValid', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Valid date', () => {
    const validDate = new Date('2023-10-30')
    expect(checkDateIsValid(validDate)).toBe(true)
  })

  it('Invalid date: not a Date object', () => {
    const notDate = '2023-10-30'
    expect(checkDateIsValid(notDate)).toBe(false)
  })

  it('Invalid date: NaN', () => {
    const invalidDate = new Date('invalid date')
    expect(checkDateIsValid(invalidDate)).toBe(false)
  })

  it('Invalid date: null', () => {
    const nullDate = null
    expect(checkDateIsValid(nullDate)).toBe(false)
  })

  it('Invalid date: undefined', () => {
    const undefinedDate = undefined
    expect(checkDateIsValid(undefinedDate)).toBe(false)
  })
})
