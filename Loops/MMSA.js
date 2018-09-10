'use strict';
function getMinMaxSumAvg(arr) {
    let numbers = [];
    let sum = 0.0;
    let average = 0.0;

    for (let index = 0; index < arr.length; index += 1) {
        numbers[index] = +arr[index]; 
        sum += numbers[index];
    }

    average = sum / numbers.length;

    console.log(`min=${(Math.min(...numbers)).toFixed(2)}`);
    console.log(`max=${(Math.max(...numbers)).toFixed(2)}`);
    console.log(`sum=${sum.toFixed(2)}`);
    console.log(`avg=${average.toFixed(2)}`);
}

getMinMaxSumAvg(['3', '5', '5']);
