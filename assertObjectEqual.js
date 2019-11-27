function assertObjectsEqual(actual, expected) {
  const condition = eqObjects(actual, expected)
  if (condition) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: "${actual} !== ${expected}"`);
  }
}

