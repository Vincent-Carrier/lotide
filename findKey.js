function findKey(obj, predicate) {
  for (const key of Object.keys(obj)) {
    if (predicate(obj[key])) return key
  }
}


const actual = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(actual);
