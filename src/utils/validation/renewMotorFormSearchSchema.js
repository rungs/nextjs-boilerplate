import * as Yup from 'yup'

export const renewMotorFormSearchSchema = Yup.object().shape(
  {
    rn_cust_fname: Yup.string().when(['rn_cust_lname', 'rn_regis_no', 'rn_policy_no'], {
      is: (rn_cust_lname, rn_regis_no, rn_policy_no) =>
        !rn_cust_lname && !rn_regis_no && !rn_regis_no && !rn_policy_no,
      then: Yup.string().required(
        'โปรดกรอก ชื่อ/นามสกุล/ทะเบียนรถ/เลขกรมธรรม์เดิม อย่างน้อย 1 อย่าง',
      ),
    }),
    rn_cust_lname: Yup.string().when(['rn_cust_fname', 'rn_regis_no', 'rn_policy_no'], {
      is: (rn_cust_fname, rn_regis_no, rn_policy_no) =>
        !rn_cust_fname && !rn_regis_no && !rn_regis_no && !rn_policy_no,
      then: Yup.string().required(
        'โปรดกรอก ชื่อ/นามสกุล/ทะเบียนรถ/เลขกรมธรรม์เดิม อย่างน้อย 1 อย่าง',
      ),
    }),
    rn_regis_no: Yup.string().when(['rn_cust_fname', 'rn_cust_lname', 'rn_policy_no'], {
      is: (rn_cust_fname, rn_cust_lname, rn_policy_no) =>
        !rn_cust_fname && !rn_cust_lname && !rn_cust_lname && !rn_policy_no,
      then: Yup.string().required(
        'โปรดกรอก ชื่อ/นามสกุล/ทะเบียนรถ/เลขกรมธรรม์เดิม อย่างน้อย 1 อย่าง',
      ),
    }),
    rn_policy_no: Yup.string().when(['rn_cust_fname', 'rn_cust_lname', 'rn_regis_no'], {
      is: (rn_cust_fname, rn_cust_lname, rn_regis_no) =>
        !rn_cust_fname && !rn_cust_lname && !rn_cust_lname && !rn_regis_no,
      then: Yup.string().required(
        'โปรดกรอก ชื่อ/นามสกุล/ทะเบียนรถ/เลขกรมธรรม์เดิม อย่างน้อย 1 อย่าง',
      ),
    }),
    from_rn_expiry_dt: Yup.string()
      .when(['to_rn_expiry_dt'], to_rn_expiry_dt => {
        if (to_rn_expiry_dt) {
          return Yup.string()
            .trim()
            .required('กรุณากรอกวันสิ้นสุดความคุ้มครอง (กรมเดิม)')
            .nullable()
        }
      })
      .nullable(),
    to_rn_expiry_dt: Yup.string()
      .when(['from_rn_expiry_dt'], from_rn_expiry_dt => {
        if (from_rn_expiry_dt) {
          return Yup.string().trim().required('กรุณากรอกวันสิ้นสุดความคุ้มครอง (ถึง)').nullable()
        }
      })
      .nullable(),
  },
  [
    ['rn_cust_fname', 'rn_cust_lname'],
    ['rn_cust_fname', 'rn_regis_no'],
    ['rn_cust_fname', 'rn_policy_no'],

    ['rn_cust_lname', 'rn_cust_fname'],
    ['rn_cust_lname', 'rn_regis_no'],
    ['rn_cust_lname', 'rn_policy_no'],

    ['rn_regis_no', 'rn_cust_fname'],
    ['rn_regis_no', 'rn_cust_lname'],
    ['rn_regis_no', 'rn_policy_no'],

    ['rn_policy_no', 'rn_cust_fname'],
    ['rn_policy_no', 'rn_cust_lname'],
    ['rn_policy_no', 'rn_regis_no'],

    ['from_rn_expiry_dt', 'to_rn_expiry_dt'],
  ],
)
