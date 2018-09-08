'use strict';
function printLetter(input) {
    for (let i = 0; i < input.length; i += 1) {
        console.log(`str[${i}] -> ${input.charAt(i)}`);
    }
}

// printLetter('Hello, World!');
printLetter('SoftUni');
