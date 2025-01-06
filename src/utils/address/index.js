export const mapProvince = (provinceList, provinceName) => {
  const province = provinceList?.filter(p => {
    if (p?.amp_chw_name.includes(provinceName)) {
      return p
    }
  })
  const mapData = {
    amp_chw_name: province?.[0]?.amp_chw_name,
    chw_cd: province?.[0]?.chw_cd,
  }
  return mapData
}

export const getProvinceId = (provinceList, provinceName) => {
  const province = provinceList?.filter(p => {
    if (p?.amp_chw_name.includes(provinceName)) {
      return p
    }
  })

  return province?.[0]?.chw_cd?.toString()
}

export const getAmphurId = (amphurList, amphurName) => {
  const amphur = amphurList?.filter(p => {
    if (p?.amp_chw_name.includes(amphurName)) {
      return p
    }
  })

  return amphur?.[0]?.amp_cd.toString()
}

export const checkIsCurrentAddress = (productData, isOrder, type) => {
  if (type === '1') {
    if (isOrder) {
      const address = productData?.order_items?.[0]?.submit_motor2_a_front
      const address1_current = address?.addr_addr1
      const address2_current = address?.addr_addr2
      const address3_current = address?.addr_addr3
      const province_current = address?.addr_province
      const amphur_current = address?.addr_amphur

      const address1 = address?.addr5_addr1
      const address2 = address?.addr5_addr2
      const address3 = address?.addr5_addr3
      const province = address?.addr5_province
      const amphur = address?.addr5_amphur

      if (
        address1_current === address1 &&
        address2_current === address2 &&
        address3_current === address3 &&
        province_current === province &&
        amphur_current === amphur
      ) {
        return true
      } else {
        return false
      }
    } else {
      const address = productData
      const address1_current = address?.rn_addr1
      const address2_current = address?.rn_addr2
      const address3_current = address?.rn_addr3
      const province_current = address?.rn_changwat
      const amphur_current = address?.rn_amphor

      const address1 = address?.rn_send_addr1
      const address2 = address?.rn_send_addr2
      const address3 = address?.rn_send_addr3
      const province = address?.rn_send_chw
      const amphur = address?.rn_send_amp

      if (
        address1_current === address1 &&
        address2_current === address2 &&
        address3_current === address3 &&
        province_current === province &&
        amphur_current === amphur
      ) {
        return true
      } else {
        return false
      }
    }
  }

  if (type === '2') {
    if (isOrder) {
      const address = productData?.order_items?.[0]?.submit_motor2_a_front
      const address1_current = address?.addr_addr1
      const address2_current = address?.addr_addr2
      const address3_current = address?.addr_addr3
      const province_current = address?.addr_province
      const amphur_current = address?.addr_amphur

      const address1 = address?.addr6_addr1
      const address2 = address?.addr6_addr2
      const address3 = address?.addr6_addr3
      const province = address?.addr6_province
      const amphur = address?.addr6_amphur

      if (
        address1_current === address1 &&
        address2_current === address2 &&
        address3_current === address3 &&
        province_current === province &&
        amphur_current === amphur
      ) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }
}
