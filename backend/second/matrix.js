const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

const columnCount = matrix[0].length;
const rowCount = matrix.length;

for (let i = 0; i < columnCount; i++) {
  console.log(matrix[0][i]);
}

for (let i = 0; i < rowCount; i++) {
  console.log(matrix[i][columnCount - 1]);
}

for (let i = columnCount - 1; i > 0; i--) {
  console.log(matrix[rowCount - 1][i - 1]);
}

for (let i = rowCount - 1; i > 1; i--) {
  console.log(matrix[i - 1][0]);
}
