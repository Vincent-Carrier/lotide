function flatten(arr) {
  let newArr = []
  for (let e of arr) {
    if (Array.isArray(e)) {
      for (let el of e) newArr.push(el)
    } else newArr.push(e)
  }
  return newArr
}
