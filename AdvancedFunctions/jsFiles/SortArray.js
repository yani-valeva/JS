'use strict';
function sortArray(inputArray, orderType) {
    let sortingObj = {
        asc: function(inputArray) {
            return inputArray.sort((a, b) => a - b);
        },
        
        desc: function (inputArray) {
            return inputArray.sort((a, b) => b - a);
        }
    }

    return sortingObj[orderType](inputArray);
}

console.log(sortArray([3, 1, 2, 10, 4, 8, 5, 7, 9, 20, 6], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));
