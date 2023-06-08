const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

const columnCount = matrix[0].length;
const rowCount = matrix.length;

for (let column = 0; column < columnCount; column++) {
  console.log(matrix[0][column]);
}

for (let row = 0; row < rowCount; row++) {
  console.log(matrix[row][columnCount - 1]);
}

for (let column = columnCount - 1; column > 0; column--) {
  console.log(matrix[rowCount - 1][column - 1]);
}

for (let row = rowCount - 1; row > 1; row--) {
  console.log(matrix[row - 1][0]);
}
