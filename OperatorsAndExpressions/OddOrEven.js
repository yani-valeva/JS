'use strict';
function oddOrEven(arr) {
    let number = Number(arr[0])
     console.log(number % 2 ? `odd ${number}` : `even ${number}`);
}

oddOrEven(['4']);