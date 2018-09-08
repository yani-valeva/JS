'use strict';
function extractIncreasingSubsequence(arr) {
    let arrNumbers = [arr[0]];

    for (let i = 1; i < arr.length; i += 1) {
        if (arrNumbers[arrNumbers.length - 1] <= arr[i]) {
            arrNumbers.push(arr[i]);
        }
    }

    arrNumbers.forEach(element => {
        console.log(element)
    });
}

// extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// extractIncreasingSubsequence([1, 2, 3, 4]);
extractIncreasingSubsequence([20, 3, 2, 15, 6, 1]);

