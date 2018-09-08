'use strict';
function getCarsInfo(arr) {
    let cars = new Map();

    for (let str of arr) {
        let [brand, model, quantity] = str.split(/\s*\|\s*/).filter(el => el !== '');
        let models = new Map();
        quantity = +quantity;
        models.set(model, quantity);
        cars.has(brand) ? cars.set(brand, cars.get(brand).has(model) ?
                cars.get(brand).set(model, cars.get(brand).get(model) + quantity) : cars.get(brand).set(model, quantity)) :
            cars.set(brand, models);
    }

    for (let [k, v] of cars) {
        console.log(k);
        for (let [ink, inv] of v) {
            console.log(`###${ink} -> ${inv}`);
        }
    }
}

getCarsInfo(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);
