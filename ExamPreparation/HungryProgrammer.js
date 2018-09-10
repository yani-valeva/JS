'use strict';
function getMeal(arrMeals, arrCommands) {
    let count = 0;

    for (let str of arrCommands) {
        let commandInfo = str.split(/\s+/).filter(el => el !== '');
        switch (commandInfo[0]) {
            case 'Serve':
                if (commandInfo.length === 1 && arrMeals.length >= 1) {
                console.log(`${arrMeals.pop()} served!`);
            }
                break;
            case 'Eat':
                if (commandInfo.length === 1 && arrMeals.length >= 1) {
                    console.log(`${arrMeals.shift()} eaten`);
                    count += 1;
                }
                break;
            case 'Add':
                if (commandInfo.length === 2) {
                    arrMeals.unshift(commandInfo[1]);
                }
                break;
            case 'Consume':
                if (commandInfo.length === 3) {
                    let startIndex = +commandInfo[1];
                    let endIndex = +commandInfo[2] + 1;

                    if ((isNaN(startIndex) === false && isNaN(endIndex) === false) && startIndex <= endIndex && (startIndex >= 0 && startIndex <= arrMeals.length) && (endIndex >= 0 && endIndex <= arrMeals.length)) {
                        let consumeElements = arrMeals.slice(startIndex, endIndex);
                        count += consumeElements.length;
                        arrMeals.splice(startIndex, endIndex - startIndex);
                        console.log('Burp!');
                    }
                }
                break;
            case 'Shift':
                if (commandInfo.length === 3) {
                    let index1 = +commandInfo[1];
                    let index2 = +commandInfo[2];
                    if ((isNaN(index1) === false && isNaN(index2) === false) && (index1 >= 0 && index1 <= arrMeals.length) && (index2 >= 0 && index2 <= arrMeals.length)) {
                        let firstPortion = arrMeals.slice(index1, index1 + 1);
                        let secondPortion = arrMeals.slice(index2, index2 + 1);
                        arrMeals.splice(index1, 1, secondPortion.toString());
                        arrMeals.splice(index2, 1, firstPortion.toString());
                    }
                }
                break;
            case 'End':
                if (commandInfo.length !== 1) {
                    continue;
                }
                if (arrMeals.length >= 1) {
                    console.log(`Meals left: ${arrMeals.join(', ')}`);
                } else {
                    console.log('The food is gone');
                }

                console.log(`Meals eaten: ${count}`);
                return;
        }
    }
}

// getMeal(['chicken', 'steak', 'eggs'], ['Serve', 'Eat', 'End', 'Consume 0 1']);
// getMeal(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'], ['Add spaghetti', 'Shift 0 1', 'Consume 1 4', 'End']);
// getMeal(['carrots', 'apple', 'beet'], ['Consume 0 2', 'End']);
// getMeal(['soup', 'spaghetti', 'eggs'] , ['Consume 0 2', 'Eat', 'Eat', 'Shift 0 1', 'End', 'Eat']);
getMeal([], ['Serve', 'Eat', 'Consume 0 0', 'Add chicken', 'Add rice', 'Eat', 'End']);