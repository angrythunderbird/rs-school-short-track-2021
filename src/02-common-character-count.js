/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const aArr = s1.split('');
  const bArr = s2.split('');
  let count = 0;

  aArr.map((element) => {
    if (bArr.includes(element)) {
      count++;
      bArr.splice(bArr.indexOf(element), 1);
    }
    return count;
  });

  return count;
}

module.exports = getCommonCharacterCount;
