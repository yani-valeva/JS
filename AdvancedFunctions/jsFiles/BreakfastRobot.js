'use strict';
let robot = (function getBreakfastRobot() {
    let availableIngredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let meals = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    return function getResult(input) {
        let commands = input.split(' ');
        let command = commands[0];
        let quantityes = [];

        switch (command) {
            case 'restock':
                availableIngredients[commands[1]] += Number(commands[2]);
                return 'Success';
            case 'prepare':
                let recipe = commands[1];
                let quantity = Number(commands[2]);
                let neededProducts = meals[recipe];
                let arrKeys = Object.keys(neededProducts);

                for(let key of arrKeys) {
                    let neededQuantity = neededProducts[key] * quantity;

                    if (neededQuantity <= availableIngredients[key]) {
                       quantityes.push(availableIngredients[key] - neededQuantity);
                    } else {
                        return `Error: not enough ${key} in stock`;
                    }
                }

                for (let i in arrKeys) {
                    availableIngredients[arrKeys[i]] = quantityes[i];
                }

                return 'Success';
            case 'report':
                return `protein=${availableIngredients.protein} carbohydrate=${availableIngredients.carbohydrate} fat=${availableIngredients.fat} flavour=${availableIngredients.flavour}`;
        }

        return getResult;
    }
})();

// console.log(robot('restock carbohydrate 10'));
// console.log(robot('restock flavour 10'));
// console.log(robot('prepare apple 1'));
// console.log(robot('restock fat 10'));
// console.log(robot('prepare burger 1'));
// console.log(robot('report'));

// ----------------------

// console.log(robot('prepare cheverme 1'));
// console.log(robot('restock protein 10'));
// console.log(robot('prepare cheverme 1'));
// console.log(robot('restock carbohydrate 10'));
// console.log(robot('prepare cheverme 1'));
// console.log(robot('restock fat 10'));
// console.log(robot('prepare cheverme 1'));
// console.log(robot('restock flavour 10'));
// console.log(robot('prepare cheverme 1'));
// console.log(robot('report'));

console.log(robot('restock protein 100'));
console.log(robot('restock carbohydrate 100'));
console.log(robot('restock fat 100'));
console.log(robot('restock flavour 100'));
console.log(robot('report'));
console.log(robot('prepare apple 2'));
console.log(robot('report'));
console.log(robot('prepare apple 1'));
console.log(robot('report'));
// console.log(robot());
// console.log(robot());
// console.log(robot());