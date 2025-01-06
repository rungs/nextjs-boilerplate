import { mapTaxType, mapPersonType } from './index'

describe('mapTaxType', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function mapTaxType case "Y"', () => {
    const res = mapTaxType('Y')

    expect(res).toBe('จดทะเบียน - สำนักงานใหญ่')
  })

  it('Call function mapTaxType case "N"', () => {
    const res = mapTaxType('N')

    expect(res).toBe('จดทะเบียน - สาขา')
  })

  it('Call function mapTaxType case "X"', () => {
    const res = mapTaxType('X')

    expect(res).toBe('ไม่จดทะเบียนภาษีมูลค่าเพิ่ม')
  })

  it('Call function mapTaxType case "default"', () => {
    const res = mapTaxType('default')

    expect(res).toBe('ไม่จดทะเบียนภาษีมูลค่าเพิ่ม')
  })
})

describe('mapPersonType', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function mapPersonType case "Y"', () => {
    const res = mapPersonType('Y')

    expect(res).toBe('นิติบุคคล')
  })

  it('Call function mapPersonType case "N"', () => {
    const res = mapPersonType('N')

    expect(res).toBe('บุคคล')
  })

  it('Call function mapPersonType case "default"', () => {
    const res = mapPersonType('default')

    expect(res).toBe('บุคคล')
  })
})
