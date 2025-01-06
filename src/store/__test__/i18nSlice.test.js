import { i18nSliceReducer, setLanguage, setTranslations } from '../index'
import { SUPPORT_LANGS } from '@constants'

const initialState = {
  lang: 'th',
  supportedLangs: { ...SUPPORT_LANGS },
  translations: {},
}

describe('tests for i18nSlice', () => {
  it('should set lang to i18nReducer', () => {
    const action = { type: setLanguage.type, payload: 'en' }
    const nextState = i18nSliceReducer(initialState, action)

    expect(nextState.lang).toEqual('en')
  })

  it('should set translations to i18nReducer', () => {
    const action = { type: setTranslations.type, payload: { en: 'en' } }
    const nextState = i18nSliceReducer(initialState, action)

    expect(nextState.translations).toEqual({ en: 'en' })
  })
})
