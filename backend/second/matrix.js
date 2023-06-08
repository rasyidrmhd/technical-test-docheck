const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30],
];

const columnCount = matrix[0].length;
const rowCount = matrix.length;

let rowStart = 0;
let columnStart = 0;
let rowEnd = rowCount - 1;
let columnEnd = columnCount - 1;

while (columnEnd >= columnStart && rowEnd >= rowStart) {
  for (let column = columnStart; column <= columnEnd; column++) {
    console.log(matrix[rowStart][column]);
  }

  rowStart++;

  for (let row = rowStart; row <= rowEnd; row++) {
    console.log(matrix[row][columnEnd]);
  }

  columnEnd--;

  for (let column = columnEnd; column >= columnStart; column--) {
    console.log(matrix[rowEnd][column]);
  }

  rowEnd--;

  for (let row = rowEnd; row >= rowStart; row--) {
    console.log(matrix[row][columnStart]);
  }

  columnStart++;
}
