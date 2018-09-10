'use strict';
function getSortedArr(arr) {
    let numbers = new Set();

    for (let index = 0; index < arr.length; index += 1) {
        numbers.add(+arr[index]);     
    }

    Array.from(new Set(numbers)).sort().forEach(element => {
        console.log(element)
    });
    
}

getSortedArr(['6', '3', '4', '1', '5', '2', '6']);