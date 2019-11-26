const assert = require('assert');

function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let [i, e] of arr1.entries()) {
    if (e !== arr2[i]) return false
  }
  return true
}

assert.ok(eqArrays([1,2,3], [1,2,3]))
assert.ok(!eqArrays([1,2,4], [1,2,3]))
assert.ok(!eqArrays([1,2,3], [12,3]))
