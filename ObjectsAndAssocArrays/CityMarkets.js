'use strict';
function getSales(arr) {
    let towns = new Map();

    for (let element of arr) {
        let [town, product, amountAndPrice] = element.split(/\s*->\s*/).filter(el => el !== '');
        let [amount, price] = amountAndPrice.split(/\s*:\s*/).filter(el => el !== '').map(el => +el);
        let innerMap = new Map();
        innerMap.set(product, amount * price);
        towns.has(town) ? towns.set(town, towns.get(town).has(product) ? towns.get(town)
                    .set(product, towns.get(town).get(product) + (amount * price))  : towns.get(town)
                    .set(product, amount * price)) : towns.set(town, innerMap);
    }

    towns.forEach((inMap, k) => {
        console.log(`Town - ${k}`);
        towns.get(k).forEach((inv, ink) => {
            console.log(`$$$${ink} : ${inv}`);
        });
    });
}

getSales(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'
]);
