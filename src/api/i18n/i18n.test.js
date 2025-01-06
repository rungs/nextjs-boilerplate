import { languageTh, languageEn } from '@constants'
import { getI18nMessage } from './i18n'

describe('Function I18n', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should use getI18nMessage return language "th"', async () => {
    const lang = await getI18nMessage('th')

    expect(lang).toEqual(languageTh)
  })

  it('should use getI18nMessage return language "en"', async () => {
    const lang = await getI18nMessage('en')

    expect(lang).toEqual(languageEn)
  })
})
