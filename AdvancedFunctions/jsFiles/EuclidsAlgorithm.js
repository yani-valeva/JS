'use strict';
function getGreatestCommonDivisor(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    while (min != 0)
    {
        let remainder = max % min;
        max = min;
        min = remainder;
    }
   
    return max;
}

console.log(getGreatestCommonDivisor(252, 105));

