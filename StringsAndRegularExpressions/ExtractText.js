'use strict';
function extractText(text) {
    let arr = [];
    let indexOpen = text.indexOf('(');
    let indexClose = text.indexOf(')');

    while (true) {

        if (indexOpen < 0 || indexClose < 0) {
            break;
        }

        if (indexOpen < indexClose) {
            arr.push(text.substring(indexOpen + 1, indexClose));
        }

        indexOpen = text.indexOf('(', indexOpen + 1);
        indexClose = text.indexOf(')', indexClose + 1);
    }

    console.log(arr.join(', '));
}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');
