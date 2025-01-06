import * as Yup from 'yup'
import { languageEn, languageTh } from '@constants'

export const subMenuManagementSchema = lang =>
  Yup.object().shape({
    subMenuCode: Yup.string()
      .trim()
      .required(
        lang === 'th'
          ? languageTh.menu_management.validation.sub_menu_code_required
          : languageEn.menu_management.validation.sub_menu_code_required,
      ),
  })
