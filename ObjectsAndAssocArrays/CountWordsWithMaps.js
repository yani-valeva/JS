'use strict';
function getWordsCount(arr) {
    let arrWords = arr[0].split(/[\W+]+/).filter(w => w !== '').map(w => w.toLowerCase());
    let words = new Map();

    for (let word of arrWords) {
        words.has(word) ? words.set(word, words.get(word) + 1) : words.set(word, 1);
    }

    let arrKeys = Array.from(words.keys()).sort((k1, k2) => k1.localeCompare(k2))
        .forEach(k => console.log(`'${k}' -> ${words.get(k)} times`));
}

// getWordsCount(['Far too slow, you\'re far too slow.']);
getWordsCount(['JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --']);
