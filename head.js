const assertEqual = function(actual, expected) {
  const condition = actual === expected;
  if (condition) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: "${actual} !== ${expected}"`);
  }
};

function head(arr) {
  return arr[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
