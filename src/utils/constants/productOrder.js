import { mapNoticeStatus } from '../mapStatus'
import moment from 'moment'
import { getProvinceId } from '../address'
import { mapPersonType, mapTaxType } from '../tax'
import { convertCurrency } from '../currency'

export const ORDER_FIELD = (productData, provinceList, userInfo) => {
  let userName = null
  let userSurname = null

  if (userInfo) {
    userName = userInfo?.name
    userSurname = userInfo?.surname
  }

  const userData = JSON.parse(localStorage.getItem('userData'))

  const userFullName = userName
    ? `${userName} ${userSurname}`
    : `${userData?.name || ''} ${userData?.surname || ''}`
  const data = productData?.order_items?.[0]?.submit_motor2_a_front
  const pext4 = productData?.order_items?.[0]?.submit_motor2_a_front?.pext4
  const fext4 = productData?.order_items?.[0]?.submit_motor2_a_front?.fext4
  const remark = productData?.order_items?.[0]?.product_remark || ''

  return {
    INF_NO: data?.inf_no || '-', //ApplicationNo
    INF_OLD_POLICY: data?.inf_old_policy, //เลขกรมธรรม์เดิม
    INF_STATUS: mapNoticeStatus(productData?.order_status_code), //สถานะ
    INF_CDATE: moment(data?.inf_cdate, 'DD/MM/YYYY'), //วันที่สร้างรายการ
    INF_SDATE: moment(data?.inf_sdate, 'DD/MM/YYYY'), //วันที่แจ้งยืนยันต่ออายุ
    INF_USER_SDATE: userFullName, //user ที่แจ้งยืนยันต่ออายุ (select NAME + ' ' + SURNAME from user where user_id=INF_SUSER)
    CUS_NAME: data?.cus_name || '-', //ชื่อผู้เอาประกัน
    CUS_SURNAME: data?.cus_surname || '-', //นามสกุลผู้เอาประกัน
    ATM_BRAND: data?.atm_brand || '-',
    ATM_MODEL: data?.atm_model || '-',
    ATM_REG: data?.atm_reg || '-', //ทะเบียนรถ *
    ATM_REGPRV: {
      chw_cd: data?.atm_regprv_code,
      amp_chw_name: data?.atm_regprv,
    }, //จังหวัดทะเบียนรถ *
    ATM_CHASSIS: data?.atm_chassis || '-', //เลขตัวถัง
    EXT10: data?.ext10 || '-', //เลขกรมธรรม์สมัครใจใหม่
    PLC_PSDATE: moment(data?.plc_psdate, 'DD/MM/YYYY'), //วันเริ่มความคุ้มครอง สมัครใจ
    PLC_PEDATE: moment(data?.plc_pedate, 'DD/MM/YYYY'), //วันสิ้นสุดความคุ้มครอง สมัครใจ
    PLC_PSUBCLASS: data?.plc_psubclass || '-', //subclass
    PLC_PFUND: convertCurrency(data?.plc_pfund), //ทุนประกัน
    nic_rmmtrenew_notice_new_rn_repair: data?.atm_repair || '-', //เกรดการซ่อม
    INF_DEALER_CODE: data?.inf_dealer_code ? data?.inf_dealer_code?.toString() : '', //agent code
    INF_CARD: data?.inf_card || '-', //agent card
    INF_MINOR: data?.inf_minor, //minor
    INF_SFLAG: data?.inf_sflag, //SFLAG
    INF_KFLAG: data?.inf_kflag, //KFLAG
    INF_VAR1: data?.inf_var1, //group comm
    // SET 2 //
    PLC_FPOLICY: data?.plc_fpolicy || '-', //เลขกรมธรรม์พรบใหม่
    PLC_FSDATE: moment(data?.plc_fsdate, 'DD/MM/YYYY'), //วันเริ่มความคุ้มครอง พรบ
    PLC_FEDATE: moment(data?.plc_fedate, 'DD/MM/YYYY'), //วันสิ้นสุดความคุ้มครอง พรบ
    INF_COM_DEALER_CODE: data?.inf_com_dealer_code?.toString(), //agent code
    INF_COM_CARD: data?.inf_com_card || '-', //agent card
    INF_COM_MINOR: data?.inf_com_minor?.toString(), //minor
    INF_COM_SFLAG: data?.inf_com_sflag?.toString(), //SFLAG
    INF_COM_KFLAG: data?.inf_com_kflag?.toString(), //KFLAG
    INF_COM_VAR1: data?.inf_com_var1?.toString(), //group comm
    /////////////////
    CUS_GAIN_NAME: data?.cus_gain_name || '-', //ชื่อผู้รับประโยชน์
    INF_INFORM: data?.inf_inform, //ผู้แจ้งงาน *
    INF_OWNER_CODE: data?.inf_owner_code, //รหัสผู้ดูแล *
    PEXT4: pext4 || 'W', //ประเภทการ Print กธ. *
    FEXT4: fext4 || 'W', //ประเภทการ Print พรบ. *
    EXT5: data?.ext5 || '', //E-mail
    INF_DOC_TYPE: data?.inf_doc_type || '9', //วิธีการชำระ
    INF_DOC_DESC: data?.inf_doc_desc, //ผู้ออกบัตร
    INF_CRCARD: data?.inf_crcard, //เลข Ref./ Approved code
    INF_PRMM_DATE: data?.inf_prmm_date ? moment(data?.inf_prmm_date, 'DD/MM/YYYY') : null, //วันที่ชำระ *
    INF_NOTE: remark, //หมายเหตุ
    INF_REJECT_CAUSE: data?.inf_reject_cause, //สาเหตุการยกเลิกรายการ

    // ที่อยู่ปัจจุบัน //
    ADDR_ADDR1: data?.addr_addr1 || '', //ที่อยู่ 1 *
    ADDR_ADDR2: data?.addr_addr2 || '', //ที่อยู่ 2
    ADDR_ADDR3: data?.addr_addr3 || '', //ที่อยู่ 3
    ADDR_PROVINCE: {
      chw_cd: getProvinceId(provinceList, data?.addr_province),
      amp_chw_name: data?.addr_province,
    }, //จังหวัด *
    ADDR_AMPHUR: '', //อำเภอ *
    ADDR_POSTCODE: data?.addr_postcode, //ไปรษณีย์ *
    ADDR_TEL: data?.addr_tel, //โทรศัพท์ *

    // ที่อยู่ส่งกรมธรรม์ //
    INF_SNAME: data?.inf_sname, //ชื่อ นามสกุล
    ADDR5_ADDR1: data?.addr5_addr1 || '', //ที่อยู่ 1
    ADDR5_ADDR2: data?.addr5_addr2 || '', //ที่อยู่ 2
    ADDR5_ADDR3: data?.addr5_addr3 || '', //ที่อยู่ 3
    ADDR5_PROVINCE: {
      chw_cd: getProvinceId(provinceList, data?.addr5_province),
      amp_chw_name: data?.addr5_province,
    }, //จังหวัด
    ADDR5_AMPHUR: '', //อำเภอ
    ADDR5_POSTCODE: data?.addr5_postcode, //ไปรษณีย์

    // ใบกำกับภาษี //
    INF_RCPNAME: data?.inf_rcpname, //ชื่อ-นามสกุล
    INF_RCPDATE: moment(data?.inf_rcpdate, 'DD/MM/YYYY') || null, //วันที่
    INF_RCPNAME_TYPE: mapPersonType(data?.inf_rcpname_type), //ประเภท
    INF_RCP_TAXID: data?.inf_rcp_taxid, //เลขประจำตัวผู้เสียภาษี
    INF_RCP_TAX_LOCATION: mapTaxType(data?.inf_rcp_tax_location), //จดทะเบียนภาษีมูลค่าเพิ่มหรือไม่
    INF_RCP_TAX_BRN: data?.inf_rcp_tax_brn, //รหัสสาขา ภาคสมัครใจ
    INF_RCP_TAX_BRN_NM: data?.inf_rcp_tax_brn_nm, //ชื่อสาขา ภาคสมัครใจ
    ADDR6_ADDR1: data?.addr6_addr1 || '', //ที่อยู่ 1
    ADDR6_ADDR2: data?.addr6_addr2 || '', //ที่อยู่ 2
    ADDR6_ADDR3: data?.addr6_addr3 || '', //ที่อยู่ 3
    ADDR6_PROVINCE: {
      chw_cd: getProvinceId(provinceList, data?.addr6_province),
      amp_chw_name: data?.addr6_province,
    }, //จังหวัด
    ADDR6_AMPHUR: '', //อำเภอ
    ADDR6_POSTCODE: data?.addr6_postcode || '', //ไปรษณีย์
    PLC_FDISC: data?.plc_fdisc || 0,
  }
}

export const NOTICE_FIELD = (productData, provinceList) => {
  const userData = JSON.parse(localStorage.getItem('userData'))
  const userName = userData?.name || ''
  const userSurname = userData?.surname || ''

  return {
    INF_NO: '-', //ApplicationNo
    INF_OLD_POLICY: productData?.rn_policy_no, //เลขกรมธรรม์เดิม
    INF_STATUS: mapNoticeStatus(productData?.notice_status_code), //สถานะ
    INF_CDATE: null, //วันที่สร้างรายการ
    INF_SDATE: null, //วันที่แจ้งยืนยันต่ออายุ
    INF_USER_SDATE: `${userName} ${userSurname}`, //user ที่แจ้งยืนยันต่ออายุ (select NAME + ' ' + SURNAME from user where user_id=INF_SUSER)
    CUS_NAME: productData?.rn_cust_fname || '-', //ชื่อผู้เอาประกัน
    CUS_SURNAME: productData?.rn_cust_lname || '-', //นามสกุลผู้เอาประกัน
    ATM_BRAND: productData?.rn_major_desc || '-', // ยี่ห้อรถ
    ATM_MODEL: productData?.rn_minor_desc || '-', // รุ่นรถ
    ATM_REG: productData?.rn_regis_no || '-', //ทะเบียนรถ *
    ATM_REGPRV: {
      chw_cd: productData?.rn_regis_area_cd,
      amp_chw_name: productData?.rn_regis_area,
    }, //จังหวัดทะเบียนรถ *
    ATM_CHASSIS: productData?.rn_chas_no || '-', //เลขตัวถัง
    EXT10: '', //เลขกรมธรรม์สมัครใจใหม่
    PLC_PSDATE: moment(productData?.rn_effect_dt) || null, //วันเริ่มความคุ้มครอง สมัครใจ
    PLC_PEDATE: moment(productData?.rn_expiry_dt) || null, //วันสิ้นสุดความคุ้มครอง สมัครใจ
    PLC_PSUBCLASS: productData?.rn_subclass || '-', //subclass
    PLC_PFUND: convertCurrency(productData?.rn_od), //ทุนประกัน
    nic_rmmtrenew_notice_new_rn_repair: productData?.rn_repair || '-', //เกรดการซ่อม
    INF_DEALER_CODE: productData?.rn_intm_srl ? productData?.rn_intm_srl?.toString() : '', //agent code
    INF_CARD: productData?.rn_intm_card || '-', //agent card
    INF_MINOR: productData?.rn_new_var2
      ? productData?.rn_intm_type?.toString()
      : productData?.rn_minor_src?.toString(), //minor
    INF_SFLAG: productData?.rn_sflag?.toString(), //SFLAG
    INF_KFLAG: productData?.rn_kflag?.toString(), //KFLAG
    INF_VAR1: productData?.rn_new_var2
      ? productData?.rn_minor_src?.toString() + '-' + productData?.rn_new_var1?.toString()
      : productData?.rn_new_var1?.toString(), //group comm
    // SET 2 //
    PLC_FPOLICY: null, //เลขกรมธรรม์พรบใหม่
    PLC_FSDATE: moment(productData?.rn_comp_eff_dt), //วันเริ่มความคุ้มครอง พรบ
    PLC_FEDATE: moment(productData?.rn_comp_exp_dt), //วันสิ้นสุดความคุ้มครอง พรบ
    INF_COM_DEALER_CODE: productData?.rn_intm_srl?.toString(), //agent code
    INF_COM_CARD: productData?.rn_intm_card, //agent card
    INF_COM_MINOR: productData?.rn_new_var2
      ? productData?.rn_intm_type?.toString()
      : productData?.rn_minor_src?.toString(), //minor
    INF_COM_SFLAG: productData?.rn_sflag?.toString(), //SFLAG
    INF_COM_KFLAG: productData?.rn_kflag?.toString(), //KFLAG
    INF_COM_VAR1: productData?.rn_new_var2
      ? productData?.rn_minor_src?.toString() + '-' + productData?.rn_new_var1?.toString()
      : productData?.rn_new_var1?.toString(), //group comm
    /////////////////
    CUS_GAIN_NAME: productData?.rn_bene_name, //ชื่อผู้รับประโยชน์
    INF_INFORM: productData?.rn_inform, //ผู้แจ้งงาน *
    INF_OWNER_CODE: productData?.rn_prod_id || '', //รหัสผู้ดูแล *
    PEXT4: 'W', //ประเภทการ Print กธ. *
    FEXT4: 'W', //ประเภทการ Print พรบ. *
    EXT5: productData?.rn_email || '', //E-mail
    INF_DOC_TYPE: '9', //วิธีการชำระ
    INF_DOC_DESC: '', //ผู้ออกบัตร
    INF_CRCARD: '', //เลข Ref./ Approved code
    INF_PRMM_DATE: null, //วันที่ชำระ *
    INF_NOTE: '', //หมายเหตุ
    INF_REJECT_CAUSE: '', //สาเหตุการยกเลิกรายการ

    // ที่อยู่ปัจจุบัน //
    ADDR_ADDR1: productData?.rn_addr1, //ที่อยู่ 1 *
    ADDR_ADDR2: productData?.rn_addr2, //ที่อยู่ 2
    ADDR_ADDR3: productData?.rn_addr3, //ที่อยู่ 3
    ADDR_PROVINCE: {
      chw_cd: getProvinceId(provinceList, productData?.rn_changwat),
      amp_chw_name: productData?.rn_changwat,
    }, //จังหวัด *
    ADDR_AMPHUR: '', //อำเภอ *
    ADDR_POSTCODE: productData?.rn_postcode, //ไปรษณีย์ *
    ADDR_TEL: productData?.rn_telecode, //โทรศัพท์ *

    // ที่อยู่ส่งกรมธรรม์ //
    INF_SNAME: productData?.rn_send_nm || '', //ชื่อ นามสกุล
    ADDR5_ADDR1: productData?.rn_send_addr1 || '-', //ที่อยู่ 1
    ADDR5_ADDR2: productData?.rn_send_addr2 || '-', //ที่อยู่ 2
    ADDR5_ADDR3: productData?.rn_send_addr3 || '-', //ที่อยู่ 3
    ADDR5_PROVINCE: {
      chw_cd: getProvinceId(provinceList, productData?.rn_send_chw),
      amp_chw_name: productData?.rn_send_chw,
    }, //จังหวัด
    ADDR5_AMPHUR: '', //อำเภอ
    ADDR5_POSTCODE: productData?.rn_send_postcode || '-', //ไปรษณีย์

    // ใบกำกับภาษี //
    INF_RCPNAME: `${productData?.rn_cust_title}${productData?.rn_cust_fname} ${productData?.rn_cust_lname}`, //ชื่อ-นามสกุล
    INF_RCPDATE: null, //วันที่
    // INF_RCPDATE: moment("2022-04-17"), //วันที่
    INF_RCPNAME_TYPE: mapPersonType(productData?.ft2_tax_vtype_person), //ประเภท
    INF_RCP_TAXID: productData?.ft2_tax_vtax_id, //เลขประจำตัวผู้เสียภาษี
    INF_RCP_TAX_LOCATION: mapTaxType(productData?.ft2_tax_vbrn_cen), //จดทะเบียนภาษีมูลค่าเพิ่มหรือไม่
    INF_RCP_TAX_BRN: productData?.ft2_tax_vbrn, //รหัสสาขา ภาคสมัครใจ
    INF_RCP_TAX_BRN_NM: productData?.ft2_tax_vbrn_name, //ชื่อสาขา ภาคสมัครใจ
    ADDR6_ADDR1: '', //ที่อยู่ 1
    ADDR6_ADDR2: '', //ที่อยู่ 2provinceList
    ADDR6_ADDR3: '', //ที่อยู่ 3
    ADDR6_PROVINCE: '', //จังหวัด
    ADDR6_AMPHUR: '', //อำเภอ
    ADDR6_POSTCODE: '', //ไปรษณีย์
    PLC_FDISC: 0,
  }
}
