'use strict';
function getBiggestElement(matrix) {
    console.log(matrix.map(arr => Math.max(...arr)).sort((a, b) => b - a)[0]);
}

getBiggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);