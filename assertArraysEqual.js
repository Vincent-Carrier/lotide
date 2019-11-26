const assert = require('assert');

function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let [i, e] of arr1.entries()) {
    if (e !== arr2[i]) return false
  }
  return true
}

function assertArraysEqual(actual, expected) {
  const condition = eqArrays(actual, expected)
  if (condition) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: "${actual} !== ${expected}"`);
  }
}
