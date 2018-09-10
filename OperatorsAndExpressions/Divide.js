'use strict';
function divide(arr) {
    let number = Number(arr[0]);
    let isTrue = number % 7 === 0 && number % 5 === 0;
    console.log(isTrue ? `true ${number}` : `false ${number}`);
}

divide(['1']);