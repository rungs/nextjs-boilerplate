import * as Yup from 'yup'
import moment from 'moment'

export const premiumQuotationSearchSchema = Yup.object().shape({
  quotation_no: Yup.string().nullable().max(30, 'premium_quotation.common.form.error.string.max'),
  submission_type_object: Yup.object()
    .shape({
      id: Yup.string(),
      label: Yup.mixed(),
    })
    .nullable(),
  customer_name: Yup.string().nullable().max(130, 'premium_quotation.common.form.error.string.max'),
  customer_phone_no: Yup.string()
    .nullable()
    .max(30, 'premium_quotation.common.form.error.string.max'),
  seller_name: Yup.string().nullable().max(100, 'premium_quotation.common.form.error.string.max'),
  seller_phone_no: Yup.string()
    .nullable()
    .max(30, 'premium_quotation.common.form.error.string.max'),
})

export const premiumQuotationFormSearchSchema = Yup.object().shape({
  brand: Yup.object()
    .shape({
      id: Yup.string(),
      label: Yup.string(),
    })
    .nullable()
    .required('premium_quotation.common.form.error.required'),
  carModel: Yup.object()
    .shape({
      id: Yup.string(),
      label: Yup.string(),
    })
    .nullable()
    .required('premium_quotation.common.form.error.required'),
  yearOfRegistration: Yup.object()
    .shape({
      id: Yup.string(),
      label: Yup.string(),
    })
    .nullable()
    .required('premium_quotation.common.form.error.required'),
  carType: Yup.object()
    .shape({
      id: Yup.string(),
      label: Yup.mixed().required('premium_quotation.common.form.error.required'),
    })
    .nullable(),
  effectiveDate: Yup.date()
    .nullable()
    .typeError('premium_quotation.common.date.error.type')
    .required('premium_quotation.common.form.error.required'),
  insuranceType: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string(),
        label: Yup.mixed().required('premium_quotation.common.form.error.required'),
      }),
    )
    .min(1, 'premium_quotation.common.form.error.array.min')
    .required('premium_quotation.common.form.error.required'),
  packageName: Yup.object()
    .shape({
      id: Yup.string(),
      label: Yup.mixed().required('premium_quotation.common.form.error.required'),
    })
    .nullable(),
  sumInsured: Yup.mixed().nullable(),
  driverAge: Yup.object()
    .shape({
      id: Yup.string(),
      label: Yup.mixed().required('premium_quotation.common.form.error.required'),
    })
    .nullable(),
  typeOfRepair: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.string(),
        label: Yup.mixed().required('premium_quotation.common.form.error.required'),
      }),
    )
    .min(1, 'premium_quotation.common.form.error.array.min')
    .required('premium_quotation.common.form.error.required'),
  installCamera: Yup.bool(),
  installOption: Yup.bool(),
})

export const premiumQuotationCreateQuotationFormSchema = Yup.object().shape({
  submissionType: Yup.object()
    .shape({
      id: Yup.string(),
      label: Yup.mixed(),
    })
    .nullable()
    .required('premium_quotation.common.form.error.required'),
  titleCode: Yup.object()
    .shape({
      id: Yup.string(),
      label: Yup.mixed(),
    })
    .nullable()
    .required('premium_quotation.common.form.error.required'),
  firstName: Yup.string().nullable().max(50, 'premium_quotation.common.form.error.string.max'),
  lastName: Yup.string().nullable().max(50, 'premium_quotation.common.form.error.string.max'),
  address: Yup.string().nullable().max(50, 'premium_quotation.common.form.error.string.max'),
  province: Yup.object()
    .shape({
      id: Yup.string(),
      label: Yup.mixed(),
    })
    .nullable(),
  district: Yup.object()
    .shape({
      id: Yup.string(),
      label: Yup.mixed(),
    })
    .nullable(),
  subDistrict: Yup.object()
    .shape({
      id: Yup.string(),
      label: Yup.mixed(),
    })
    .nullable(),
  zipCode: Yup.string().nullable().max(5, 'premium_quotation.common.form.error.string.max'),
  telNo: Yup.string().nullable().max(30, 'premium_quotation.common.form.error.string.max'),
  mobile: Yup.string().nullable().max(30, 'premium_quotation.common.form.error.string.max'),
  fax: Yup.string().nullable().max(30, 'premium_quotation.common.form.error.string.max'),
  line: Yup.string().nullable().max(50, 'premium_quotation.common.form.error.string.max'),
  email: Yup.string()
    .email('premium_quotation.common.form.error.email')
    .nullable()
    .max(50, 'premium_quotation.common.form.error.string.max'),
  licenseNo: Yup.string().nullable().max(10, 'premium_quotation.common.form.error.string.max'),
  licenseProvince: Yup.object()
    .shape({
      id: Yup.string(),
      label: Yup.mixed(),
    })
    .nullable(),
  sellerName: Yup.string().nullable(),
  sellerPhone: Yup.string().nullable(),
})

export const premiumQuotationUploadSearchSchema = Yup.object().shape({
  fromDate: Yup.date()
    .nullable()
    .typeError('premium_quotation.common.date.error.type')
    .required('premium_quotation.common.form.error.required'),
  toDate: Yup.date()
    .nullable()
    .typeError('premium_quotation.common.date.error.type')
    .test('min_to_date', 'premium_quotation.common.date.error.min', (value, context) => {
      const { fromDate } = context.parent

      if (!value) return true
      if (fromDate.toString() === 'Invalid Date') return true

      if (fromDate) {
        const _fromDate = moment(fromDate)
        const _toDate = moment(value)
        const diff = _fromDate.diff(_toDate, 'minutes')
        return diff <= 0
      }

      return true
    }),
})
