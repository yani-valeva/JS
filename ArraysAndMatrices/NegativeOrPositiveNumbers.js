'use strict';
function moveNegativeAndPositiveNumbers(arr) {
    let rearrangedArr = [];

    for (let i = 0; i < arr.length; i += 1) {
        arr[i] >= 0 ? rearrangedArr.push(arr[i]) : rearrangedArr.unshift(arr[i]);
    }

    rearrangedArr.forEach(number => {console.log(number)});
}

moveNegativeAndPositiveNumbers([3, -2, 0, -1]);