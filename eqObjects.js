function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let [i, e] of arr1.entries()) {
    if (e !== arr2[i]) return false
  }
  return true
}

function eqObjects(obj1, obj2) {
  for (const [k, v] of Object.entries(obj1)) {
    if (Array.isArray(v)) {
      if (eqArrays(v, obj2[k])) { continue } else { return false }
    }
    if (obj2[k] !== v) return false
  }
  return true
}


function assertObjectsEqual(actual, expected) {
  const condition = eqObjects(actual, expected)
  if (condition) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: "${actual} !== ${expected}"`);
  }
}

assertObjectsEqual({name: "Vincent", age: "24"}, {name: "Vincent", age: "24"})
assertObjectsEqual({name: "Vincent", foods: ['pizza', 'poutine']}, {name: "Vincent", foods: ['pizza', 'poutine']})
assertObjectsEqual({name: "Vincent", age: "23"}, {name: "Vincent", age: "24"})
