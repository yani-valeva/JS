'use strict';
function getThirdDigit(arr) {
    let strLength = arr[0].length;
    let strNumber = arr[0];
    
    if (strLength >= 3) {
        console.log(strNumber.charAt(strLength - 3));
    } else {
        console.log("The number has less than three digits!");
    }  
}

getThirdDigit(['12']);