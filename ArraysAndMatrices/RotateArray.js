'use strict';
function rotateArray(arr) {
    let count = +(arr.pop());
    let currentElement;

    for (let i = 0; i < count % arr.length; i += 1) {
         currentElement = arr.pop();
         arr.unshift(currentElement);
    }

   console.log(arr.join(' '));
}

// rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
