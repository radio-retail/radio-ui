const getNestedValueFromString = (obj = {}, str = '') => 
  str.split('.').reduce((newObj, key) => (newObj[key] !== undefined) ? newObj[key] : undefined, obj)

export default getNestedValueFromString