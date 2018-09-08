'use strict';
function hasEnd(text, end) {
    console.log(text.endsWith(end));
}

// hasEnd('This sentence ends with fun?', 'fun?');
// hasEnd('This is Houston, we have…', 'We have…');
hasEnd('The new iPhone has no headphones jack.', 'o headphones jack.');
