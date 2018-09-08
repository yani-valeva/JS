'use strict';
function getHeroesInfo(arr) {
    let heroes = [];

    for (let element of arr) {
        let [heroName, heroLevel, heroItems] = element.split(/\s*\/\s*/).filter(e => e !== '');
        heroItems === undefined ? heroItems = [] : heroItems = heroItems.split(/,\s*/);

        let hero = {
            name: heroName,
            level: +heroLevel,
            items: heroItems
        };

        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));
}

// getHeroesInfo(['Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]);

// getHeroesInfo(['Jake / 1000 / Gauss, HolidayGrenade']);

getHeroesInfo(['Jake / 1000 / ']);