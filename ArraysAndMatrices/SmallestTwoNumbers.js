'use strict';
function getSmallestTwo(arr) {
    console.log(arr.sort((a, b) => a - b).slice(0, 2).join(' '));
}

getSmallestTwo([30, 15, 50, 5]);
getSmallestTwo([3, 0, 10, 4, 7, 3]);