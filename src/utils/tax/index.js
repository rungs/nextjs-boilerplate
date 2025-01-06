export const mapTaxType = taxType => {
  switch (taxType) {
    case 'Y':
      return 'จดทะเบียน - สำนักงานใหญ่'
    case 'N':
      return 'จดทะเบียน - สาขา'
    case 'X':
      return 'ไม่จดทะเบียนภาษีมูลค่าเพิ่ม'
    default:
      return 'ไม่จดทะเบียนภาษีมูลค่าเพิ่ม'
  }
}

export const mapPersonType = personType => {
  switch (personType) {
    case 'Y':
      return 'นิติบุคคล'
    case 'N':
      return 'บุคคล'
    default:
      return 'บุคคล'
  }
}
