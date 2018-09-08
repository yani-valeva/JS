'use strict';
function getLastKNumbers(totalNums, sumNums) {
    let arr = [1];

    for (let i = 1; i < totalNums; i += 1) {
        arr[i] = arr.slice(Math.max(0, i - sumNums), i).reduce((a, b) => a + b, 0);
    }

    console.log(arr.join(' '));
}

getLastKNumbers(6, 3);