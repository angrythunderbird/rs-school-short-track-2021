function findIndex(array, value) {
  let x = 0;
  array.map((e, i) => {
    if (e === value) {
      x = i;
    }
    return x;
  });
  return x;
}

module.exports = findIndex;
