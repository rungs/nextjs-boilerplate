export const mapRcpNameType = type => {
  switch (type) {
    case 'บุคคล':
      return '1'
    case 'นิติบุคคล':
      return '2'
    default:
      return '1'
  }
}

export const mapTaxLocationType = type => {
  switch (type) {
    case 'จดทะเบียน - สำนักงานใหญ่':
      return 'Y'
    case 'จดทะเบียน - สาขา':
      return 'N'
    case 'ไม่จดทะเบียนภาษีมูลค่าเพิ่ม':
      return 'X'
    default:
      return 'X'
  }
}

export const mapExt4Type = type => {
  switch (type) {
    case 'Y':
      return 'E-Policy'
    case 'I':
      return 'Internal Print'
    case 'F':
      return 'Fast Track'
    case 'N':
      return 'Paper'
    default:
      return 'N'
  }
}
