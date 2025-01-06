import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './menuSlice'
import i18nSlice from './i18nSlice'

export default configureStore({
  reducer: {
    loading: menuSlice,
    isOpen: menuSlice,
    opened: menuSlice,
    translations: i18nSlice,
    lang: i18nSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat([]),
})
