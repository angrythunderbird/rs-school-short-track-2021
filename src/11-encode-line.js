/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strCount = '';

  for (let i = 0; i < str.length;) {
    let localCount = 0;
    const elem = str[i];
    while (elem === str[i]) {
      localCount++;
      i++;
    }
    if (localCount > 1) {
      strCount += localCount + elem;
    } else {
      strCount += elem;
    }
  }
  return strCount;
}

module.exports = encodeLine;
