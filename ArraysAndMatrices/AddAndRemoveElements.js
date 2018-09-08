'use strict';
function AddAndRemoveElements (arr) {
    let number = 0;
    let arrNumbers = [];

    for (let i = 0; i < arr.length; i += 1) {
        number += 1;

        if (arr[i] === 'add') {
            arrNumbers.push(number);
        } else if (arr[i] === 'remove') {
            arrNumbers.pop();
        }
    }

    if (arrNumbers.length < 1) {
        console.log('Empty');
    } else {
        arrNumbers.forEach(element => {
            console.log(element)
        });
    }
}

// AddAndRemoveElements(['add', 'add', 'add', 'add']);
// AddAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
AddAndRemoveElements(['remove', 'remove', 'remove']);



