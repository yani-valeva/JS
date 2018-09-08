'use strict';
function getPopulations(arr) {
    let towns = new Map();

    for (let element of arr) {
        let [town, population] = element.split(/\s*<->\s*/).filter(el => el !== '');
        towns.has(town) ?  towns.set(town, towns.get(town) + +population)  : towns.set(town, +population);
    }

    towns.forEach((v, k) => console.log(`${k} : ${v}`));
}

// getPopulations(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000'
// ]);

getPopulations(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'
]);
