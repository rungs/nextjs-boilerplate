import { createSlice } from '@reduxjs/toolkit'
import { SUPPORT_LANGS } from '@constants'
import { languageTh } from '@constants'

const initialState = {
  lang: 'th',
  supportedLangs: { ...SUPPORT_LANGS },
  translations: { ...languageTh },
}
export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload
    },
    setTranslations: (state, action) => {
      state.translations = action.payload
    },
  },
})
export const { setLanguage, setTranslations } = i18nSlice.actions
export const selectTranslations = state => state.translations.translations

export default i18nSlice.reducer
