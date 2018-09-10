'use strict';
function binarySerach(arr) {
    let count = +arr[0];
    let searchedElement = +arr[arr.length - 1];
    let arrNumbers = [];
    let middle;
    let arrHoldRestNum = [];
    let hasElement = false;

    for (let i = 1; i <= count; i += 1) {
        arrNumbers[i - 1] = +arr[i];
    }

    arrHoldRestNum = new Array(...arrNumbers);
    arrHoldRestNum.sort((a, b) => a - b);

    while (true) {
        middle = (arrHoldRestNum.length % 2 === 0 ? (arrHoldRestNum.length / 2) - 1 : Math.floor(arrHoldRestNum.length / 2));

        if (searchedElement === arrHoldRestNum[middle]) {
            for (let i = 0; i < arrNumbers.length; i += 1) {
                if (searchedElement === arrNumbers[i]) {
                    console.log(i);
                    hasElement = true;
                    break;
                } 
            }
        } else if (searchedElement < arrHoldRestNum[middle]) {
            arrHoldRestNum = arrHoldRestNum.slice(0, middle);
        } else {
            arrHoldRestNum = arrHoldRestNum.slice(middle + 1);
        }

        if (hasElement) {
            break;
        } else if (!hasElement && arrHoldRestNum.length === 1 && searchedElement !== arrHoldRestNum[0]) {
            console.log('-1');
            break;
        } 
    }
}

binarySerach(['3', '32', '20', '4', '32']);