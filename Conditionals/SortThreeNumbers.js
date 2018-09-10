'use strict';
function sortNumbers(arr) {
    let num1 = +arr[0];
    let num2 = +arr[1];
    let num3 = +arr[2];

    let min = Math.min(num1, num2, num3);
    let max = Math.max(num1, num2, num3);
    let middle;

    if ((max === num1 && min === num2) || (max === num2 && min === num1)) {
        middle = num3;
    } else if ((max === num1 && min === num3) || (max === num3 && min === num1)) {
        middle = num2;
    } else if ((max === num2 && min === num3) || (max === num3 && min === num2)) {
        middle = num1;
    }

    console.log(`${max} ${middle} ${min}`);

}

sortNumbers(['10', '15', '30']);