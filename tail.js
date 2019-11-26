function tail(arr) {
  if (!arr || arr === []) return undefined;
  return arr.slice(1, arr.length - 1);
}
