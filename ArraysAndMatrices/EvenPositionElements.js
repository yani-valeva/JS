'use strict';
function getSumOfEvenPosition(arr) {
    console.log(arr.filter((element, i) => {
        return i % 2 === 0
    }).join(' '));
}

getSumOfEvenPosition(['20', '30', '40']);