'use strict';
function getJuiceBottles(arr) {
    let juiceQuantities = new Map();
    let juiceBottles = new Map();
    let currentQuantity;

    for (let element of arr) {
        let [juice, quantity] = element.split(/\s*=>\s*/).filter(el => el !== '');
        juiceQuantities.has(juice) ? juiceQuantities.set(juice, juiceQuantities.get(juice) + +quantity) : juiceQuantities.set(juice, +quantity);

        for (let [k, v] of juiceQuantities) {
           if (v >= 1000) {
               currentQuantity = Math.floor(v / 1000);
               juiceBottles.has(juice) ? juiceBottles.set(juice, juiceBottles.get(juice) + currentQuantity) : juiceBottles.set(juice, currentQuantity);
               juiceQuantities.set(juice, juiceQuantities.get(juice) % 1000);
           }
        }
    }

    juiceBottles.forEach((v, k) => {
        console.log(`${k} => ${v}`);
    });
}

// getJuiceBottles(['Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549'
// ]);

getJuiceBottles(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);
