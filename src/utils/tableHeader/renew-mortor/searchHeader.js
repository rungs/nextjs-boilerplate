import { convertCurrency } from '../../currency'
import { mapNoticeStatus } from '../../mapStatus'
import moment from 'moment'

export const TABLE_SEARCH_HEADER = () => {
  return [
    {
      field: 'notice_status_code',
      headerName: 'สถานะ',
      width: 120,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return mapNoticeStatus(
          params?.row?.order_status_code != null
            ? params?.row?.order_status_code
            : params?.row?.notice_status_code,
        )
      },
    },
    {
      field: 'rn_policy_no',
      headerName: 'เลขกรมธรรม์เดิม',
      width: 200,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'rn_cust_fname',
      headerName: 'ชื่อผู้เอาประกัน',
      width: 150,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'rn_cust_lname',
      headerName: 'นามสกุลผู้เอาประกัน',
      width: 150,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'rn_effect_dt',
      headerName: 'วันเริ่มความคุ้มครอง',
      width: 150,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return moment(params.value).format('DD/MM/YYYY')
      },
    },
    {
      field: 'rn_expiry_dt',
      headerName: 'วันสิ้นสุดความคุ้มครอง',
      width: 150,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return moment(params.value).format('DD/MM/YYYY')
      },
    },
    {
      field: 'rn_regis_no',
      headerName: 'ทะเบียนรถ',
      width: 100,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        if (params?.row?.order_status_code) {
          return params?.row?.submit?.atm_reg ? params?.row?.submit?.atm_reg : '-'
        }
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'rn_chas_no',
      headerName: 'เลขตัวถัง',
      width: 200,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'rn_ins_phone',
      headerName: 'โทรศัพท์',
      width: 150,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        if (params?.row?.order_status_code) {
          return params?.row?.submit?.addr_tel ? params?.row?.submit?.addr_tel : '-'
        }
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'rn_ft',
      headerName: 'ทุนประกัน',
      width: 100,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params.value ? convertCurrency(params.value) : '-'
      },
    },
    {
      field: 'rn_net_prmm',
      headerName: 'เบี้ยสุทธิสมัครใจ',
      width: 150,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params.value ? convertCurrency(params.value) : '-'
      },
    },
    {
      field: 'col12',
      headerName: 'เบี้ยรวมสมัครใจ',
      width: 150,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params?.row
          ? convertCurrency(
              params?.row?.rn_net_prmm + params?.row?.rn_new_stamp + params?.row?.rn_new_svctax,
            )
          : '-'
      },
    },
    {
      field: 'rn_net_comp_notice',
      headerName: 'เบี้ยสุทธิพรบ',
      width: 100,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params.value ? convertCurrency(params.value) : '-'
      },
    },
    {
      field: 'rn_prmm_comp_notice',
      headerName: 'เบี้ยรวมพรบ',
      width: 100,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params.value ? convertCurrency(params.value) : '-'
      },
    },
    {
      field: 'rn_tot_prmm',
      headerName: 'เบี้ยรวมทั้งหมด',
      width: 150,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params.value ? convertCurrency(params.value) : '-'
      },
    },
    {
      field: 'col16',
      headerName: 'Account Type',
      width: 150,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params?.row?.submit?.inf_minor
          ? params?.row?.submit?.inf_minor
          : params?.row?.rn_intm_type
          ? params?.row?.rn_intm_type
          : '-'
      },
    },
    {
      field: 'rn_intm_srl',
      headerName: 'Agent',
      width: 100,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'rn_intm_card',
      headerName: 'Agent Card',
      width: 150,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params.value ? params.value : '-'
      },
    },
    {
      field: 'inf_prmm_date',
      headerName: 'วันรับชำระ',
      width: 100,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params?.row?.submit?.inf_prmm_date
          ? moment(params?.row?.submit?.inf_prmm_date, 'DD/MM/YYYY').format('DD/MM/YYYY')
          : '-'
      },
    },
    {
      field: 'ext10',
      headerName: 'เลขกรมธรรม์ใหม่',
      width: 200,
      headerClassName: 'header-orange',
      sortable: false,
      valueGetter: params => {
        return params?.row?.submit?.ext10 ? params?.row?.submit?.ext10 : '-'
      },
    },
  ]
}
