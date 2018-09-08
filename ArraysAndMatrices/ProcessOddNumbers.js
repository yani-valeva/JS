'use strict';
function arrangeOddIndexes(arr) {
    console.log(arr.filter((n, i) => i % 2 !== 0).map(n => n * 2).reverse().join(' '));
}

arrangeOddIndexes([3, 0, 10, 4, 7, 3]);

