export const convertCurrency = money => {
  return parseFloat(money)
    ?.toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

export const mapPaymentType = type => {
  switch (type) {
    case 'Cash':
      return '0'
    case 'Credit Card':
      return '2'
    case 'หลักฐานรับประกัน':
      return '1'
    default:
      return '0'
  }
}

export const formatNumber = (number, _minimumFractionDigits = 2, _maximumFractionDigits = 2) => {
  const formatOption = {
    maximumFractionDigits: _maximumFractionDigits,
    minimumFractionDigits: _minimumFractionDigits,
  }

  return new Intl.NumberFormat('en-US', formatOption).format(number)
}
