export const replaceValue = (original = '', key = '{key}', newValue = '') => {
  return original.replace(key, newValue)
}

export const translateByKey = (key = '', translator = {}) => {
  return key.split('.').reduce((o, i) => o[i], translator)
}
