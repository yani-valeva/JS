'use strict';
function getWordsCount(arr) {
    let words = arr[0].split(/[\W+]+/).filter(el => el !== '');
    let obj = {};

    for (let word of words) {
        obj.hasOwnProperty(word) ? obj[word] += 1 : obj[word] = 1;
    }

    console.log(JSON.stringify(obj));
}

// getWordsCount(['Far too slow, you\'re far too slow.']);
getWordsCount(['JS devs use Node.js for server-side JS.-- JS for devs']);