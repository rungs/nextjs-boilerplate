export const checkDateIsValid = date => {
  return date instanceof Date && !isNaN(date)
}

export const checkDateIsValidDDMMYYYY = dateStr => {
  const regex = /^\d{2}\/\d{2}\/\d{4}$/

  if (dateStr.match(regex) === null) {
    return false
  }

  const [day, month, year] = dateStr.split('/')
  const isoFormattedStr = `${year}-${month}-${day}`
  const date = new Date(isoFormattedStr)
  const timestamp = date.getTime()

  if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
    return false
  }

  return date.toISOString().startsWith(isoFormattedStr)
}
