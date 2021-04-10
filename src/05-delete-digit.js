function deleteDigit(n) {
  const nArr = [...`${n}`].map(Number);
  const yArr = [];

  for (let i = 0; i < nArr.length; i++) {
    const xArr = nArr.slice();
    xArr.splice(i, 1);
    yArr.push(xArr.join(''));
  }

  return Math.max(...yArr);
}

module.exports = deleteDigit;
