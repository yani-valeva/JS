'use strict';
function getSpiralMatrix(row, col) {
    let matrix = [];
    let number = 1;
    let currentRow = 0;
    let currentCol = col - 1;
    let hasRows = true;
    let helpNumber = 1;

    for (let i = 0; i < row; i += 1) {
        matrix[i] = new Array(col);
    }

    while (hasRows) {
        if (currentRow <= row / 2) {

            for (let j = helpNumber - 1; j <= currentCol; j += 1) {
                matrix[currentRow][j] = number;
                number += 1;
            }
            
            for (let i = currentRow + 1; i < row - (helpNumber - 1); i += 1) {
                matrix[i][currentCol] = number;
                number += 1;
            }

            for (let j = col - helpNumber - 1; j >= currentRow; j -= 1) {
                matrix[row - helpNumber][j] = number;
                number += 1;
            }

            for (let i = row - helpNumber - 1; i >= helpNumber; i -= 1) {
                matrix[i][helpNumber - 1] = number;
                number += 1;
            }

            currentRow += 1;
            currentCol -= 1;
            helpNumber += 1;
        } else {
                hasRows = false;
            }
    }

    for (let arr of matrix) {
        console.log(arr.join(' '));
    }
}

getSpiralMatrix(5, 5);
// getSpiralMatrix(10, 10);
