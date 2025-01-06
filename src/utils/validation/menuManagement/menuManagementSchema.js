import * as Yup from 'yup'
import { languageEn, languageTh } from '@constants'

export const menuManagementSchema = lang =>
  Yup.object().shape({
    menuCode: Yup.string()
      .trim()
      .required(
        lang === 'th'
          ? languageTh.menu_management.validation.menu_code_required
          : languageEn.menu_management.validation.menu_code_required,
      ),
  })
