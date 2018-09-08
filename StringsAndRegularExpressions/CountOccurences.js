'use strict';
function getOccurrences(target, text) {
    let index = text.indexOf(target);
    let count = 0;

    while (index >= 0) {
        count += 1;
        text = text.substring(index + 1);
        index = text.indexOf(target);
    }

    console.log(count);
}

getOccurrences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.');