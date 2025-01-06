import { mapNoticeStatus } from './index'

describe('utils mapStatus', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function mapNoticeStatus code 001', () => {
    const value = mapNoticeStatus('001')

    expect(value).toBe('รอต่ออายุ')
  })

  it('Call function mapNoticeStatus code 002', () => {
    const value = mapNoticeStatus('002')

    expect(value).toBe('ขาดต่ออายุ')
  })

  it('Call function mapNoticeStatus code 003', () => {
    const value = mapNoticeStatus('003')

    expect(value).toBe('แจ้งต่ออายุ')
  })

  it('Call function mapNoticeStatus code 004', () => {
    const value = mapNoticeStatus('004')

    expect(value).toBe('ทำรายการ')
  })

  it('Call function mapNoticeStatus code 005', () => {
    const value = mapNoticeStatus('005')

    expect(value).toBe('ยกเลิกรายการ')
  })

  it('Call function mapNoticeStatus default', () => {
    const value = mapNoticeStatus('default')

    expect(value).toBe('รอต่ออายุ')
  })
})
