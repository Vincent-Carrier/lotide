const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let [i, e] of arr1.entries()) {
    if (e !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  const condition = eqArrays(actual, expected);
  if (condition) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: "${actual} !== ${expected}"`);
  }
};

const without = (arr, removed) => {
  let newArr = [];
  for (let e of arr) {
    if (!removed.includes(e)) newArr.push(e);
  }
  console.log(newArr);
  return newArr;
};


assertArraysEqual(without([1, 2, 3], [3]), [1, 2]);
assertArraysEqual(without([1, 2], [2]), [1]);
