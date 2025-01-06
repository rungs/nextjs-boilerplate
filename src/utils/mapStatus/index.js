export const mapNoticeStatus = code => {
  switch (code) {
    case '001':
      return 'รอต่ออายุ'
    case '002':
      return 'ขาดต่ออายุ'
    case '003':
      return 'แจ้งต่ออายุ'
    case '004':
      return 'ทำรายการ'
    case '005':
      return 'ยกเลิกรายการ'
    default:
      return 'รอต่ออายุ'
  }
}
