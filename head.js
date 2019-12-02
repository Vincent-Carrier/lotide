const assertEqual = require('./assertEqual')

function head(arr) {
  if (!arr || arr === []) return undefined;
  return arr[0];
}

