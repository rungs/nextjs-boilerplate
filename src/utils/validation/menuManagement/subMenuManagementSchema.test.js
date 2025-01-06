import { subMenuManagementSchema } from '@utils'

describe('subMenuManagementSchema', () => {
  it('should validate subMenuCode correctly for English', () => {
    const lang = 'en'
    const validationSchema = subMenuManagementSchema(lang)

    const validData = {
      subMenuCode: 'ValidCode',
    }

    const invalidData = {
      subMenuCode: '',
    }

    const validResult = validationSchema.isValidSync(validData)
    const invalidResult = validationSchema.isValidSync(invalidData)

    expect(validResult).toBe(true)
    expect(invalidResult).toBe(false)
  })

  it('should validate subMenuCode correctly for Thai', () => {
    const lang = 'th'
    const validationSchema = subMenuManagementSchema(lang)

    const validData = {
      subMenuCode: 'รหัสที่ถูกต้อง',
    }

    const invalidData = {
      subMenuCode: '',
    }

    const validResult = validationSchema.isValidSync(validData)
    const invalidResult = validationSchema.isValidSync(invalidData)

    expect(validResult).toBe(true)
    expect(invalidResult).toBe(false)
  })
})
