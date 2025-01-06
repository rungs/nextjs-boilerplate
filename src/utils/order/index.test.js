import { mapRcpNameType, mapTaxLocationType, mapExt4Type } from './index'

describe('utils order', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function mapRcpNameType case 1', () => {
    const value = mapRcpNameType('บุคคล')

    expect(value).toBe('1')
  })

  it('Call function mapRcpNameType case 2', () => {
    const value = mapRcpNameType('นิติบุคคล')

    expect(value).toBe('2')
  })

  it('Call function mapRcpNameType case default', () => {
    const value = mapRcpNameType('default')

    expect(value).toBe('1')
  })

  it('Call function mapTaxLocationType case Y', () => {
    const value = mapTaxLocationType('จดทะเบียน - สำนักงานใหญ่')

    expect(value).toBe('Y')
  })

  it('Call function mapTaxLocationType case Y', () => {
    const value = mapTaxLocationType('จดทะเบียน - สาขา')

    expect(value).toBe('N')
  })

  it('Call function mapTaxLocationType case X', () => {
    const value = mapTaxLocationType('ไม่จดทะเบียนภาษีมูลค่าเพิ่ม')

    expect(value).toBe('X')
  })

  it('Call function mapTaxLocationType case default', () => {
    const value = mapTaxLocationType('default')

    expect(value).toBe('X')
  })

  it('Call function mapExt4Type case Y', () => {
    const value = mapExt4Type('Y')

    expect(value).toBe('E-Policy')
  })

  it('Call function mapExt4Type case I', () => {
    const value = mapExt4Type('I')

    expect(value).toBe('Internal Print')
  })

  it('Call function mapExt4Type case F', () => {
    const value = mapExt4Type('F')

    expect(value).toBe('Fast Track')
  })

  it('Call function mapExt4Type case N', () => {
    const value = mapExt4Type('N')

    expect(value).toBe('Paper')
  })

  it('Call function mapExt4Type case default', () => {
    const value = mapExt4Type('default')

    expect(value).toBe('N')
  })
})
