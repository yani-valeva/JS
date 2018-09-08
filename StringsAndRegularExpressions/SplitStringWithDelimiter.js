'use strict';
function splitText(text, delimiter) {
    text.split(delimiter).forEach(element => console.log(element));
}

// splitText('One-Two-Three-Four-Five', '-');
splitText('http://platform.softuni.bg', '.');
