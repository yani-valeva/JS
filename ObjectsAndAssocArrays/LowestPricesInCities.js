'use strict';
function getLowestPrices(arr) {
    let products = new Map();

    for (let element of arr) {
        let [town, product, price]  = element.split(/\s*\|\s*/).filter(el => el !== '');
        let innerMap = new Map();
        innerMap.set(town, +price);
        products.has(product) ? products.get(product).set(town, +price) : products.set(product, innerMap);
    }

    for (let [k, v] of products) {
        let sorted = [...v.entries()].sort((a, b) => a[1] - b[1]);
        for (let el in sorted) {
            console.log(`${k} -> ${products.get(k).get(sorted[el][0])} (${sorted[el][0]})`);
            break;
        }
    }
}

getLowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);

// getLowestPrices(['Sample Town | Sample Product | 5000',
//     'Sample Town | Orange | 10',
//     'Sample Town | Peach | 10',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'
// ]);
//
// getLowestPrices(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'Sample Town | Sample Product | 500',
//     'New York | Burger | 10'
// ]);
