'use strict';
function getSign(arr) {
    let num1 = +arr[0];
    let num2 = +arr[1];
    let num3 = +arr[2];
    let count = 0;

    if (num1 < 0) {
        count += 1;
    }
    if (num2 < 0) {
        count += 1;
    }
    if (num3 < 0) {
        count += 1;
    }

    if (num1 === 0 || num2 === 0 || num3 === 0) {
        console.log('0');
    } else if (count === 1 || count === 3) {
        console.log('-');
    } else {
        console.log('+');
    }
}

getSign(['2', '0', '-2']);