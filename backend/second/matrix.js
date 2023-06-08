const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

const columnCount = matrix[0].length;
const rowCount = matrix.length;

let rowStart = 0;
let columnStart = 0;

for (let column = columnStart; column < columnCount; column++) {
  console.log(matrix[rowStart][column]);
}

rowStart++;

for (let row = rowStart; row < rowCount; row++) {
  console.log(matrix[row][columnCount - 1]);
}

for (let column = columnCount - 1; column > columnStart; column--) {
  console.log(matrix[rowCount - 1][column - 1]);
}

for (let row = rowCount - 1; row > rowStart; row--) {
  console.log(matrix[row - 1][columnStart]);
}

columnStart++;
