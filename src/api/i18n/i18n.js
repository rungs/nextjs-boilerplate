import api from '../service'
import { languageTh, languageEn } from '@constants'

const URL = `${process.env.NEXT_PUBLIC_APP_API_URL}`

export const getI18nMessage = async lang => {
  return lang === 'th' ? languageTh : languageEn
}
