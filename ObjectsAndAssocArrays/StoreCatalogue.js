'use strict';
function storeCatalogue(arr) {
    let catalogue = {};

    for (let element of arr) {
        let [product, price] = element.split(/\s*:\s*/).filter(el => el !== '');

        if (!catalogue.hasOwnProperty(product)) {
            catalogue[product] = +price;
        }
    }

    let sorted = Object.keys(catalogue).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    let startChar = sorted[0].charAt(0),
        currentStartChar,
        count = 1;

    for (let element of sorted) {
        currentStartChar = element.charAt(0);
        count === 1 || startChar !== currentStartChar ? console.log(currentStartChar) : '';
        console.log(`  ${element}: ${catalogue[element]}`);
        startChar = currentStartChar;
        count += 1;
    }
}

// storeCatalogue(['Appricot : 20.4',
// 'Fridge : 1500',
// 'TV : 1499',
// 'Deodorant : 10',
// 'Boiler : 300',
// 'Apple : 1.25',
// 'Anti-Bug Spray : 15',
// 'T-Shirt : 10'
// ]);

storeCatalogue(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'
]);
