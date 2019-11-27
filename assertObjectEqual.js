const inspect = require('util').inspect;

function assertObjectsEqual(actual, expected) {
  const condition = eqObjects(actual, expected)
  if (condition) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: "${inspect(actual)} !== ${inspect(expected)}"`);
  }
}

assertObjectsEqual({name: "Vincent"}, {name: "Vincent"});

