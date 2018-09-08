'use strict';
function extractWords(str) {
    let regex = /\w+/g;
    console.log(str.match(regex).join('|'));
}

// extractWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
extractWords('_(Underscores) are also word characters');