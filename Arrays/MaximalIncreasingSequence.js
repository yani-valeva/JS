'use strict';
function getMaxIncreasingSystem(arr) {
    let lastElement,
        count = 1,
        maxCount = 0;

    if (arr.length > 0) {
        lastElement = +arr[0];
        maxCount = 1;
    }

    for (let index = 1; index < arr.length; index++) {
        if (lastElement < arr[index]) {
            count += 1;
            if (maxCount < count) {
                maxCount = count;
            }
            continue;
        } 

        count = 1;
        lastElement = arr[index];
    }

    console.log(maxCount);
}

getMaxIncreasingSystem(['8', '7', '3', '2', '3', '4', '5', '2', '2', '4']);