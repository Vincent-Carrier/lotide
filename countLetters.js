const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: "${actual} !== ${expected}"`);
  }
};

const countLetters = (str) => {
  result = {}
  for (const char of str.replace(/ /g, "")) {
    if (result[char]) { result[char] += 1 } else { result[char] = 1 }
  }
  return result
}

const actual = countLetters("lighthouse in the house")
const expected = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1, }
assertEqual(actual['h'], 4)
assertEqual(actual['e'], 3)
