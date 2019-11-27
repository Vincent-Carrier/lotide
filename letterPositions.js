function letterPositions(str) {
  const result = {}
  for (const [i, char] of str.split("").entries()) {
    if (char !== " ") {
      if (result[char] === undefined) {
        result[char] = [i]
      } else {
        result[char].push(i)
      }
    }
  }
  return result
}

