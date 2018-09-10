'use strict';
function allocateArray(arr) {
    let count = +arr[0];
    let resultArr = [];

    for (let index = 0; index < count; index += 1) {
        resultArr[index] = index * 5;       
    }

    resultArr.forEach(element => {
        console.log(element);
    });
}

allocateArray(['7']);