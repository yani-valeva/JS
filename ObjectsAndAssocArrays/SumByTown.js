'use strict';
function sumByTown(arr) {
    let obj = {};
    for (let i = 0; i < arr.length ;i += 2) {
        obj.hasOwnProperty(arr[i]) ? obj[arr[i]] += +arr[i + 1] : obj[arr[i]] = +arr[i + 1];
    }

    console.log(JSON.stringify(obj));
}

// sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
sumByTown(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);
