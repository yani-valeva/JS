'use strict';
function extractsDates(arr) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let matches;

    for (let element of arr) {
        while (matches = regex.exec(element)) {
            console.log(`${matches[0]} (Day: ${matches[1]}, Month: ${matches[2]}, Year: ${matches[3]})`)
        }
    }
}

// extractsDates(['I am born on 30-Dec-1994.', 'This is not date: 512-Jan-1996.', 'My father is born on the 29-Jul-1955.']);

extractsDates(['1-Jan-1999 is a valid date.', 'So is 01-July-2000.', 'I am an awful liar, by the way – Ivo, 28-Sep-2016.']);
