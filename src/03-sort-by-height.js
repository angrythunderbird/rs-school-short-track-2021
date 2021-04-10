function sortByHeight(arr) {
  const tempArr = arr.slice().sort((a, b) => a - b).filter((a) => a !== -1);
  const outArr = arr.slice();
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (outArr[i] !== -1) {
      outArr[i] = tempArr[i - count];
    } else {
      count++;
    }
  }
  return outArr;
}

module.exports = sortByHeight;
