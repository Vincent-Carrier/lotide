const assertEqual = function(actual, expected) {
  const condition = actual === expected;
  if (condition) {
    console.log(`🛑 Assertion Failed: "${actual} !== ${expected}"`);
  } else {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
