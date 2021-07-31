const objToString = Object.prototype.toString;

export function isArray(obj) {
  return objToString.call(obj) === '[object Array]';
}

export function isEmptyArray(obj) {
  return !isArray(obj) || obj.length <= 0;
}
