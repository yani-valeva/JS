'use strict';
function exchangeNumbers(arr) {
    let a = +arr[0];
    let b = +arr[1];
    console.log(a > b ? `${b} ${a}` : `${a} ${b}`);
}

exchangeNumbers(['5.2', '3']);