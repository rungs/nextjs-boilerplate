import { menuManagementSchema } from '@utils'

describe('menuManagementSchema', () => {
  it('should validate menuCode correctly for English', () => {
    const lang = 'en'
    const validationSchema = menuManagementSchema(lang)

    const validData = {
      menuCode: 'ValidCode',
    }

    const invalidData = {
      menuCode: '',
    }

    const validResult = validationSchema.isValidSync(validData)
    const invalidResult = validationSchema.isValidSync(invalidData)

    expect(validResult).toBe(true)
    expect(invalidResult).toBe(false)
  })

  it('should validate menuCode correctly for Thai', () => {
    const lang = 'th'
    const validationSchema = menuManagementSchema(lang)

    const validData = {
      menuCode: 'รหัสที่ถูกต้อง',
    }

    const invalidData = {
      menuCode: '',
    }

    const validResult = validationSchema.isValidSync(validData)
    const invalidResult = validationSchema.isValidSync(invalidData)

    expect(validResult).toBe(true)
    expect(invalidResult).toBe(false)
  })
})
