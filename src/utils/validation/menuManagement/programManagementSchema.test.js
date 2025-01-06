import { programManagementSchema } from '@utils'

describe('programManagementSchema', () => {
  it('should validate programCode correctly for English', () => {
    const lang = 'en'
    const validationSchema = programManagementSchema(lang)

    const validData = {
      programCode: 'ValidCode',
    }

    const invalidData = {
      programCode: '',
    }

    const validResult = validationSchema.isValidSync(validData)
    const invalidResult = validationSchema.isValidSync(invalidData)

    expect(validResult).toBe(true)
    expect(invalidResult).toBe(false)
  })

  it('should validate programCode correctly for Thai', () => {
    const lang = 'th'
    const validationSchema = programManagementSchema(lang)

    const validData = {
      programCode: 'รหัสที่ถูกต้อง',
    }

    const invalidData = {
      programCode: '',
    }

    const validResult = validationSchema.isValidSync(validData)
    const invalidResult = validationSchema.isValidSync(invalidData)

    expect(validResult).toBe(true)
    expect(invalidResult).toBe(false)
  })
})
