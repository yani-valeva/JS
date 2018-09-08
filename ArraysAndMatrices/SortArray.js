'use strict';
function sortArrayByTwoCriteria(arr) {
    arr.sort((a, b) => {
        if (a.length - b.length === 0) {
            return a.localeCompare(b, undefined, { sensitivity: 'base' })
        } else {
            return a.length - b.length
        }
    }).forEach(element => {
        console.log(element)
    });
}

// sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
// sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);
// sortArrayByTwoCriteria(['aBBa', 'Abba']);



