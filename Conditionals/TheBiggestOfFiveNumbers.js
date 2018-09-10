'use strict';
function getBiggestNumber(arr) {
    let num1 = +arr[0];
    let num2 = +arr[1];
    let num3 = +arr[2];
    let num4 = +arr[3];
    let num5 = +arr[4];

    console.log(Math.max(num1, num2, num3, num4, num5));
}

getBiggestNumber(['1', '3', '30', '10', '-1']);