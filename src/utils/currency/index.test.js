import { mapPaymentType, formatNumber } from './index'

describe('utils currency', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function mapPaymentType case 0', () => {
    const value = mapPaymentType('Cash')

    expect(value).toBe('0')
  })

  it('Call function mapPaymentType case 1', () => {
    const value = mapPaymentType('หลักฐานรับประกัน')

    expect(value).toBe('1')
  })

  it('Call function mapPaymentType case 2', () => {
    const value = mapPaymentType('Credit Card')

    expect(value).toBe('2')
  })

  it('Call function mapPaymentType case default', () => {
    const value = mapPaymentType('default')

    expect(value).toBe('0')
  })

  it('formats a number with default options', () => {
    expect(formatNumber(12345.6789)).toBe('12,345.68')
  })

  it('formats a number with custom minimum and maximum fraction digits', () => {
    expect(formatNumber(12345.6789, 0, 4)).toBe('12,345.6789')
  })

  it('formats a negative number', () => {
    expect(formatNumber(-12345.6789)).toBe('-12,345.68')
  })
})
