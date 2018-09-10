'use strict';
function getMostFrequentNumber(arr) {
    // let arrNums = [];
    let maxCount = 0,
        count,
        frNum;

    // for (let index = 0; index < arr.length; index += 1) {
    //     arrNums[index] = +arr[index];
    // }

    for (let i = 0; i < arr.length - 1; i += 1) {
        count = 1;
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[i] === arr[j]) {
                count += 1;
            }
        }

        if (maxCount < count) {
            maxCount = count;
            frNum = arr[i];
        }
    }

    console.log(`${frNum} (${maxCount} times)`);
}

getMostFrequentNumber(['1', '2', '2']);