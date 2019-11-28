function map(arr, fn) {
  const results = []
  arr.forEach(e => results.push(fn(e)))
  return results
}

console.log(map([1,2,3,4], n => n * 2))
