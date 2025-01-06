import * as Yup from 'yup'

export const renewMotorFormSchema = (
  isSelectedPolicy,
  selectedAddress1,
  selectedAddress2,
  isSubmit,
) =>
  Yup.object().shape({
    ATM_REG: Yup.string().trim().required('กรุณากรอก ทะเบียนรถ'),
    ATM_REGPRV: Yup.object()
      .shape({
        id: Yup.string(),
        name_th: Yup.string(),
        name_en: Yup.string(),
        geography_id: Yup.string(),
      })
      .nullable()
      .required('กรุณากรอก จังหวัดทะเบียนรถ'),
    INF_INFORM: Yup.string().trim().required('กรุณากรอก ผู้แจ้งงาน').nullable(),
    INF_OWNER_CODE: Yup.string().trim().required('กรุณากรอก รหัสผู้ดูแล').nullable(),
    // PEXT4: Yup.string()
    //   .trim()
    //   .required("กรุณากรอก ประเภทการ Print กธ.")
    //   .nullable(),
    PEXT4: Yup.string()
      .when([], () => {
        if (isSubmit) {
          return Yup.string()
            .trim()
            .required('กรุณากรอก ประเภทการ Print กธ.')
            .notOneOf(['W'], 'ประเภทการ Print กธ. ต้องไม่เท่ากับ รอตรวจสอบ')
            .nullable()
        }
      })
      .nullable(),
    FEXT4: Yup.string()
      .when([], () => {
        if (isSelectedPolicy === '2') {
          return Yup.string().trim().required('กรุณากรอก ประเภทการ Print พรบ.').nullable()
        }
        if (isSubmit) {
          return Yup.string()
            .trim()
            .required('กรุณากรอก ประเภทการ Print พรบ.')
            .notOneOf(['W'], 'ประเภทการ Print พรบ. ต้องไม่เท่ากับ รอตรวจสอบ')
            .nullable()
        }
      })
      .nullable(),
    EXT5: Yup.string()
      .when(['PEXT4', 'FEXT4'], (PEXT4, FEXT4) => {
        if (PEXT4 === 'Y' || FEXT4 === 'Y') {
          return Yup.string()
            .trim()
            .required('กรุณากรอก Email กรณีเลือกประเภทการ Print เป็น E-Policy')
            .matches(
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              'รูปแบบ Email ผิด',
            )
        }
      })
      .nullable(),
    // INF_PRMM_DATE: Yup.string()
    //   .trim()
    //   .required("กรุณากรอก วันที่ชำระ")
    //   .nullable(),
    INF_PRMM_DATE: Yup.string()
      .when([], () => {
        if (isSubmit) {
          return Yup.string().trim().required('กรุณากรอก วันที่ชำระ').nullable()
        }
      })
      .nullable(),
    ADDR_ADDR1: Yup.string().trim().required('กรุณากรอก ที่อยู่ 1'),
    ADDR_PROVINCE: Yup.object()
      .shape({
        chw_cd: Yup.string(),
        amp_chw_name: Yup.string(),
      })
      .nullable()
      .required('กรุณากรอก จังหวัด'),
    ADDR_AMPHUR: Yup.string().trim().required('กรุณากรอก อำเภอ'),
    ADDR_POSTCODE: Yup.string().trim().required('กรุณากรอก รหัสไปรษณีย์'),
    ADDR_TEL: Yup.string()
      .trim()
      .required('กรุณากรอก โทรศัพท์')
      .matches(
        /((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))/gm,
        'รูปแบบเบอร์โทรศัพท์ผิด',
      )
      .nullable(),
    INF_SNAME: Yup.string()
      .when([], () => {
        if (selectedAddress1 === '2') {
          return Yup.string().trim().required('กรุณากรอก ชื่อ นามสกุล').nullable()
        }
      })
      .nullable(),
    ADDR5_ADDR1: Yup.string()
      .when([], () => {
        if (selectedAddress1 === '2') {
          return Yup.string().trim().required('กรุณากรอกที่อยู่').nullable()
        }
      })
      .nullable(),
    ADDR5_PROVINCE: Yup.object()
      .when([], () => {
        if (selectedAddress1 === '2') {
          return Yup.object()
            .shape({
              chw_cd: Yup.string(),
              amp_chw_name: Yup.string(),
            })
            .nullable()
            .required('กรุณากรอก จังหวัด')
        }
      })
      .nullable(),
    ADDR5_AMPHUR: Yup.string()
      .when([], () => {
        if (selectedAddress1 === '2') {
          return Yup.string().trim().required('กรุณากรอก อำเภอ').nullable()
        }
      })
      .nullable(),
    ADDR5_POSTCODE: Yup.string()
      .when([], () => {
        if (selectedAddress1 === '2') {
          return Yup.string().trim().required('กรุณากรอก รหัสไปรษณีย์').nullable()
        }
      })
      .nullable(),
    ADDR6_ADDR1: Yup.string()
      .when([], () => {
        if (selectedAddress2 === '2') {
          return Yup.string().trim().required('กรุณากรอกที่อยู่').nullable()
        }
      })
      .nullable(),
    ADDR6_PROVINCE: Yup.object()
      .when([], () => {
        if (selectedAddress2 === '2') {
          return Yup.object()
            .shape({
              chw_cd: Yup.string(),
              amp_chw_name: Yup.string(),
            })
            .nullable()
            .required('กรุณากรอก จังหวัด')
        }
      })
      .nullable(),
    ADDR6_AMPHUR: Yup.string()
      .when([], () => {
        if (selectedAddress2 === '2') {
          return Yup.string().trim().required('กรุณากรอก อำเภอ').nullable()
        }
      })
      .nullable(),
    ADDR6_POSTCODE: Yup.string()
      .when([], () => {
        if (selectedAddress2 === '2') {
          return Yup.string().trim().required('กรุณากรอก รหัสไปรษณีย์')
        }
      })
      .nullable(),
    INF_DOC_TYPE: Yup.string()
      .when([], () => {
        if (isSubmit) {
          return Yup.string()
            .trim()
            .required('กรุณากรอก วิธีการชำระ')
            .notOneOf(['9'], 'วิธีการชำระต้องไม่เท่ากับ รอตรวจสอบ')
            .nullable()
        }
      })
      .nullable(),
    INF_DOC_DESC: Yup.string()
      .when(['INF_DOC_TYPE'], INF_DOC_TYPE => {
        if (INF_DOC_TYPE === '2') {
          return Yup.string()
            .trim()
            .nullable()
            .required('กรุณากรอก ผู้ออกบัตร กรณีเลือกเป็น Credit Card')
        }
      })
      .nullable(),
    INF_CRCARD: Yup.string()
      .when(['INF_DOC_TYPE'], INF_DOC_TYPE => {
        if (INF_DOC_TYPE === '2') {
          return Yup.string()
            .trim()
            .nullable()
            .required('กรุณากรอก เลข Ref./ Approved code กรณีเลือกเป็น Credit Card')
        }
      })
      .nullable(),
  })
