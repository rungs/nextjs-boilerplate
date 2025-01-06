import { replaceValue, translateByKey } from '@utils'

describe('utils String', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function replaceValue return value', () => {
    const original = 'original'
    const key = 'o'
    const newValue = 'O'

    const value = replaceValue(original, key, newValue)

    expect(value).toBe('Original')
  })

  it('Call function replaceValue default value', () => {
    const value = replaceValue()

    expect(value).toBe('')
  })

  it('Call function translateByKey default value', () => {
    const value = translateByKey()

    expect(value).toBe(undefined)
  })

  it('Call function translateByKey return value', () => {
    const key = 'th'
    const translator = { th: 'th' }

    const value = translateByKey(key, translator)

    expect(value).toBe('th')
  })
})
