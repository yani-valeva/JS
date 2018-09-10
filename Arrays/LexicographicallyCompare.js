'use strict';
function compareWords(arr) {
    let word1 = arr[0];
    let word2 = arr[1];
    let result = word1.localeCompare(word2);

    if (result === 0) {
        console.log('=');
    } else if (result === 1) {
        console.log('>');
    } else {
        console.log('<');
    }
}

compareWords(['halo', 'hello']);