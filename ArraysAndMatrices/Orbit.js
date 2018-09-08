'use strict';
function getOrbit(arr) {
    let width = arr[0];
    let height = arr[1];
    let x = arr[2];
    let y = arr[3];
    let matrix = [];
    let number = 1;
    let isFill = false;
    let upLeft,
        upRight,
        downLeft,
        downRight,
        helpNumber = 1,
        currentRow,
        currentCol,
        isUpLeft,
        isUpRight,
        isDownLeft,
        isDownRight;

    for (let i = 0; i < width; i += 1) {
        matrix[i] = new Array(height);
    }

    matrix[x][y] = number;
    number += 1;

    while (!isFill) {

        if (x - helpNumber >= 0) {
            currentRow = x - helpNumber;
            upLeft = Math.max(0, y - helpNumber);
            upRight = Math.min(y + helpNumber, height - 1);

            for (let i = upLeft; i <= upRight; i += 1) {
                matrix[currentRow][i] = number
            }

            isUpLeft = true;
        } else {
            isUpLeft = false;
        }

        if (y + helpNumber <= height - 1) {
            currentCol = y + helpNumber;
            downRight = Math.min(x + helpNumber, width - 1);
            upRight = Math.max(x - helpNumber, 0);

            for (let i = upRight; i <= downRight; i += 1) {
                matrix[i][currentCol] = number
            }

            isUpRight = true;
        } else {
            isUpRight = false;
        }

        if (x + helpNumber <= width - 1) {
            currentRow = x + helpNumber;
            downRight = Math.min(y + helpNumber, height - 1);
            downLeft = Math.max(0, y - helpNumber);

            for (let i = downLeft; i <= downRight; i += 1) {
                matrix[currentRow][i] = number;
            }

            isDownRight = true;
        } else {
            isDownRight = false;
        }

        if (y - helpNumber >= 0) {
            currentCol = y - helpNumber;
            downLeft = Math.min(x + helpNumber, width - 1);
            upLeft = Math.max(x - helpNumber, 0);

            for (let i = upLeft; i <= downLeft; i += 1) {
                matrix[i][currentCol] = number
            }

            isDownLeft = true;
        } else {
            isDownLeft = false;
        }

        number += 1;

        if (!isUpLeft && !isUpRight && !isDownLeft && !isDownRight) {
            isFill = true;
        }

        helpNumber += 1;
    }

    matrix.forEach(element => console.log(element.join(' ')));
}

// getOrbit([4, 4, 0, 0]);
// getOrbit([5, 5, 2, 2]);
getOrbit([3, 3, 2, 2]);
