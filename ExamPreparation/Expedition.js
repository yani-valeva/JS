'use strict';
function getPath(primaryMatrix, secondaryMatrix, overlayCoordinates, startingCoordinates) {
    let primaryMatrixRows = primaryMatrix.length;
    let primaryMatrixCols = primaryMatrix[0].length;

    for (let arr of overlayCoordinates) {
        let vertical = arr[0];
        let horizontal = arr[1];
        for (let row of secondaryMatrix) {
            for (let el of row) {
                if ((horizontal >= 0 && horizontal < primaryMatrixCols) && (vertical >= 0 && vertical < primaryMatrixRows)) {
                    if ((el === 1) && (primaryMatrix[vertical][horizontal] === 1)) {
                        primaryMatrix[vertical][horizontal] = 0;
                    } else if ((el === 1) && (primaryMatrix[vertical][horizontal] === 0)) {
                        primaryMatrix[vertical][horizontal] = 1;
                    }
                }

                horizontal += 1
            }

            vertical += 1;
            horizontal = arr[1];
        }
    }

    let row = startingCoordinates[0];
    let col = startingCoordinates[1];
    let steps = 0;

    if ((row >= 0 && row < primaryMatrixRows) && (col >= 0 && col < primaryMatrixCols)) {
        steps += 1;
    }
    let helpRow,
        helpCol,
        quadrant,
        previousCoordinates = [],
        currentCoordinates = [];

    while (true) {
        let isFound = false;

        if ((row >= 0 && row < primaryMatrixRows) && (col >= 0 && col < primaryMatrixCols)) {
            helpRow = row;
            helpCol = col - 1;

            if (helpCol >=0 && helpCol < primaryMatrixCols) {
                currentCoordinates = [];
                currentCoordinates.push(helpRow);
                currentCoordinates.push(helpCol);
                if (primaryMatrix[helpRow][helpCol] === 0 && JSON.stringify(previousCoordinates) !== JSON.stringify(currentCoordinates)) {
                    steps += 1;
                    previousCoordinates = [];
                    previousCoordinates.push(row);
                    previousCoordinates.push(col);
                    row = helpRow;
                    col = helpCol;
                    isFound = true;
                }
            }

            helpRow = row - 1;
            helpCol = col;

            if (!isFound && helpRow >= 0 && helpRow < primaryMatrixRows) {
                currentCoordinates = [];
                currentCoordinates.push(helpRow);
                currentCoordinates.push(helpCol);
                if (primaryMatrix[helpRow][helpCol] === 0 && JSON.stringify(previousCoordinates) !== JSON.stringify(currentCoordinates)) {
                    steps += 1;
                    previousCoordinates = [];
                    previousCoordinates.push(row);
                    previousCoordinates.push(col);
                    row = helpRow;
                    col = helpCol;
                    isFound = true;
                }
            }

            helpRow = row;
            helpCol = col + 1;

            if (!isFound && helpCol >=0 && helpCol < primaryMatrixCols) {
                currentCoordinates = [];
                currentCoordinates.push(helpRow);
                currentCoordinates.push(helpCol);
                if (primaryMatrix[helpRow][helpCol] === 0 && JSON.stringify(previousCoordinates) !== JSON.stringify(currentCoordinates)) {
                    steps += 1;
                    previousCoordinates = [];
                    previousCoordinates.push(row);
                    previousCoordinates.push(col);
                    row = helpRow;
                    col = helpCol;
                    isFound = true;
                }
            }

            helpRow = row + 1;
            helpCol = col;

            if (!isFound && helpRow >= 0 && helpRow < primaryMatrixRows) {
                currentCoordinates = [];
                currentCoordinates.push(helpRow);
                currentCoordinates.push(helpCol);
                if (primaryMatrix[helpRow][helpCol] === 0 && JSON.stringify(previousCoordinates) !== JSON.stringify(currentCoordinates)) {
                    steps += 1;
                    previousCoordinates = [];
                    previousCoordinates.push(row);
                    previousCoordinates.push(col);
                    row = helpRow;
                    col = helpCol;
                    isFound = true;
                }
            }
        }

        if (!isFound) {
            console.log(steps);
            let middleRow = (primaryMatrixRows / 2) - 1;
            let middleCol = (primaryMatrixCols / 2) - 1;

            if (row <= middleRow && col <= middleCol) {
                quadrant = 2;
            } else if (row <= middleRow && col > middleCol) {
                quadrant = 1;
            } else if (row > middleRow && col <= middleCol) {
                quadrant = 3;
            } else {
                quadrant = 4;
            }

            console.log(`Dead end ${quadrant}`);
            return;

        } else if (isFound && ((row === 0 || row === primaryMatrixRows - 1) || (col === 0 || col === primaryMatrixCols -1))) {
            console.log(steps);

            if (row === 0) {
                console.log('Top');
            } else if (row === primaryMatrixRows - 1) {
                console.log('Bottom');
            } else if (col === 0) {
                console.log('Left');
            } else if (col === primaryMatrixCols - 1) {
                console.log('Right');
            }

            return;
        }
    }
}

// getPath([[1, 1, 0, 1, 1, 1, 1, 0],
//         [0, 1, 1, 1, 0, 0, 0, 1],
//         [1, 0, 0, 1, 0, 0, 0, 1],
//         [0, 0, 0, 1, 1, 0, 0, 1],
//         [1, 0, 0, 1, 1, 1, 1, 1],
//         [1, 0, 1, 1, 0, 1, 0, 0]],
//     [[0, 1, 1], [0, 1, 0], [1, 1, 0]],
//     [[1, 1], [2, 3], [5, 3]],
//     [0, 2]
// );

getPath([[1, 1, 0, 1],
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [1, 0, 1, 0]],
    [[0, 0, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1]],
    [[0, 0], [2, 1], [1, 0]],
    [2, 0]
);
