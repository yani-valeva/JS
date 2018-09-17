'use strict';
function aggregate(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let min = arr.reduce((a, b) => Math.min(a, b));
    let max = arr.reduce((a, b) => Math.max(a, b));
    let product = arr.reduce((a, b) => a * b);
    let strConcatenation = arr.reduce((a, b) => '' + a + b);
    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${strConcatenation}`);
}

aggregate([2,3,10,5]);