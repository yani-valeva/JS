'use strict';
function isMatrixMagic(matrix) {
    let isMagic = true;
    let sum = matrix[0].reduce((a, b) => a + b, 0);
    let currentSum;

    for (let i = 1; i < matrix.length; i += 1) {
        currentSum = matrix[i].reduce((a, b) => a + b, 0);

        if (currentSum !== sum) {
            isMagic = false;
            console.log(isMagic);
            return;
        }

    }

    for (let col = 0; col < matrix[0].length; col += 1) {
        currentSum = 0;
        for (let row = 0; row < matrix.length; row += 1) {
            currentSum += matrix[row][col];
        }

        if (currentSum !== sum) {
            isMagic = false;
            console.log(isMagic);
            return;
        }
    }

    console.log(isMagic);
}

// isMatrixMagic([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
// isMatrixMagic([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
isMatrixMagic([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);