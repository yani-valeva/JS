'use strict';
function getEqualNeighbours(matrix) {
    let count = 0;

    for (let row = 0; row < matrix.length; row += 1) {
        for (let col = 0; col < matrix[row].length; col += 1) {
           if (row + 1 < matrix.length && matrix[row][col] === matrix[row + 1][col]) {
               count += 1;
           }

           if (col + 1 < matrix[row].length && matrix[row][col] === matrix[row][col + 1]) {
               count += 1
           }
        }
    }

    console.log(count);
}

getEqualNeighbours([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]);