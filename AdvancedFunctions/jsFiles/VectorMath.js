'use strict';
let operations = (function () {
    return {
        add: (arr1, arr2) => {
            let arr3 = [];
            arr3.push(arr1[0] + arr2[0]);
            arr3.push(arr1[1] + arr2[1]);
            return arr3;
        },
        multiply: (arr1, number) => {
            let arr3 = [];
            arr3.push(arr1[0] * number);
            arr3.push(arr1[1] * number);
            return arr3;
        },
        length: (arr1) => {
            return Math.sqrt((arr1[0] * arr1[0]) + (arr1[1] * arr1[1]));
        },
        dot: (arr1, arr2) => {
            return (arr1[0] * arr2[0]) + (arr1[1] * arr2[1]);
        },
        cross: (arr1, arr2) => {
            return (arr1[0] * arr2[1]) - (arr1[1] * arr2[0]);
        }
    };
})();

// console.log(operations.add([1, 1], [1, 0]));
// console.log(operations.multiply([3.5, -2], 2));
// console.log(operations.length([3, -4]));
// console.log(operations.dot([1, 0], [0, -1]));
console.log(operations.cross([3, 7], [1, 0]));


