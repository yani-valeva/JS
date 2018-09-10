'use strict';
function getThirdBit(arr) {
    let number = Number(arr[0]);
    let binaryNumber = (number >>> 0).toString(2);
    let length = binaryNumber.length;

    if (length >= 3) {
        console.log(binaryNumber.charAt(length - 3))
    } else {
        console.log(0);
    }
}

getThirdBit(['2']);