'use strict';
function getNumbers(arr) {
    let number = +arr[0];
    let result = '';

    for (let index = 1; index <= number; index += 1) {
        result += index + ' ';
        
    }

    console.log(result.trim());
}

getNumbers(['15']);