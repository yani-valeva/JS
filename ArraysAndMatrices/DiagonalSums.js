'use strict';
function getDiagonalsSum(matrix) {
    let mainDiagonal = 0,
        secondaryDiagonal = 0;

    for (let row = 0; row < matrix.length; row += 1) {
        mainDiagonal += matrix[row][row];
        secondaryDiagonal += matrix[row][matrix.length - 1 - row];
    }

    console.log(`${mainDiagonal} ${secondaryDiagonal}`);
}

getDiagonalsSum([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);