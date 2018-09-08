'use strict';
function findOccurrences(sentence, word) {
    let regex = new RegExp('\\b' + word + '\\b', 'gi');
    console.log(sentence.match(regex).length);
}

findOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the');
findOccurrences('How do you plan on achieving that? How? How can you even think of that?', 'how');
findOccurrences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');

//88/100