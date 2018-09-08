'use strict';
// function getFirstLastSum(arr) {
//     let arr2 = new Array(...arr);
//     console.log(+(arr.shift()) + +(arr2.pop()));
// }

// function getFirstLastSum(arr) {
//     console.log(Number(arr[0]) + Number(arr[arr.length - 1]));
// }

function getFirstLastSum(arr) {
    console.log(+(arr.slice(0, 1)) + +(arr.pop()));
}

getFirstLastSum(['5']);


