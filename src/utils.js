// 12495 => 12.4K
export function prettyNumber(value, digits = 1) {
  const units = ['K', 'M', 'B'];

  let decimal;

  for (let i = units.length - 1; i >= 0; i--) {
    decimal = Math.pow(1000, i + 1);
    if (value <= -decimal || value >= decimal) {
      return +(value / decimal).toFixed(digits) + units[i];
    }
  }
  return value.toFixed(digits);
}

// 53321424 => 53.3ms
export function prettyDuration(ns, digits = 1) {
  const units = ['μs', 'ms', 's'];

  let decimal;

  for (let i = units.length - 1; i >= 0; i--) {
    decimal = Math.pow(1000, i + 1);
    if (ns <= -decimal || ns >= decimal) {
      return +(ns / decimal).toFixed(digits) + units[i];
    }
  }
  return ns + 'ns';
}

/**
 * Group an array into buckets based on predicate!
 * @param {Array} arr a collection
 * @param {Function} fn a predicate
 */
export function groupBy(arr, fn) {
  return arr.reduce((acc, val) => {
    (acc[fn(val)] = acc[fn(val)] || []).push(val);
    return acc;
  }, {});
}
