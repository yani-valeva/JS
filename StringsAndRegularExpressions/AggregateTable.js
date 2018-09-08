'use strict';
function aggregateTable(arr) {
    let towns = [];
    let sum = [];
    for (let element of arr) {
        let elements = element.split('|').filter(e => e !== '');
        towns.push(elements[0].trim());
        sum.push(elements[1].trim());
    }

    console.log(towns.join(', '));
    console.log(sum.reduce((a, b) => +a + +b));
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);
