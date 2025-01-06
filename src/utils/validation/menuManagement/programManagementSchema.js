import * as Yup from 'yup'
import { languageEn, languageTh } from '@constants'

export const programManagementSchema = lang =>
  Yup.object().shape({
    programCode: Yup.string()
      .trim()
      .required(
        lang === 'th'
          ? languageTh.menu_management.validation.program_code_required
          : languageEn.menu_management.validation.program_code_required,
      ),
  })
