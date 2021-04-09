/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new Error('Not implemented');
  const lengthMatrix = matrix[0].length;

  const flatMatrix = matrix.flat();

  let sum = 0;

  for (let i = 0; i < flatMatrix.length; i++) {
    if (flatMatrix[i - lengthMatrix] !== 0) {
      sum += flatMatrix[i];
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
