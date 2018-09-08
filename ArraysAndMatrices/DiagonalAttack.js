'use strict';
function diagonalAttack(input) {
    let currentArr = [];
    let matrix = [],
        mainDiagonal = 0,
        secondaryDiagonal = 0;

    for (let i = 0; i < input.length; i += 1) {
        currentArr = input[i].split(' ').map(element => +element);
        matrix[i] = currentArr;
    }

    for (let row = 0; row < matrix.length; row += 1) {
        mainDiagonal += matrix[row][row];
        secondaryDiagonal += matrix[row][matrix.length - 1 - row];
    }

    if (mainDiagonal === secondaryDiagonal) {
        for (let row = 0; row < matrix.length; row += 1) {
            for (let col = 0; col < matrix[row].length; col += 1) {

                if(!(row === col || col === matrix.length - 1 - row)) {
                    matrix[row][col] = mainDiagonal;
                }
            }
        }
    }

    matrix.forEach(arr => console.log(arr.join(' ')));
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);

// diagonalAttack(['1 1 1',
//     '1 1 1',
//     '1 1 0']
// );

// diagonalAttack(['1 1 1',
//     '1 1 1',
//     '1 1 1']
// );