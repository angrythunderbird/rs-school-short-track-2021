function findIndex(array, value) {
  /* https://code.tutsplus.com/ru/tutorials/the-binary-search-algorithm-in-javascript--cms-30003 */
  let start = 0;
  let end = array.length - 1;
  let index = 0;
  let found = 0;
  let middle = 0;

  while (found === 0 && start <= end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] === value) {
      found = 1;
      index = middle;
    } else if (array[middle] > value) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return index;
}

module.exports = findIndex;
