function getMatrixElementsSum(matrix) {
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
