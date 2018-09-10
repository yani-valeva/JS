'use strict';
function getMatrix(arr) {
    let num = +arr[0];
    let result = '';

    for (let i = 1; i < num; i += 1) {
       for (let j = i; j < (i + num); j += 1) {
          result += j + ' ';  
       }

       result += '\n';   
    }

    console.log(result);
}

getMatrix(['5']);