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

function middle(arr) {
  let len = arr.length;
  if (len < 3) return [];
  if (len % 2 !== 0) return [arr[Math.floor(len/2)]];
  return [arr[len/2 - 1], arr[len/2]];
}


assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
