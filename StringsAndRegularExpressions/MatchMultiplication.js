'use strict';
function multiplication(str) {
    let regex = /(-?\d+)\s*\*\s*(-?\d+\.?\d+)/g;
    let matches;

    while (matches = regex.exec(str)) {
        str = str.replace(matches[0], +matches[1] * +matches[2]);
    }
    console.log(str);
}

multiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');
