'use strict';
function carFactory(requestedCar) {
    let myCar = {
        model: '',
        engine: {
            power: 0,
            volume: 0
        },
        carriage: {
            type: '',
            color: ''
        },
        wheels: []
    }

    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };
    let neededPower = requestedCar.power;
    let neededWheelSize = requestedCar.wheelsize;

    myCar.model = requestedCar.model;
      
    if (neededPower <= 90) {
        myCar.engine = smallEngine;
    } else if (neededPower <= 120) {
        myCar.engine = normalEngine;
    } else {
        myCar.engine = monsterEngine;
    }

    myCar.carriage.type = requestedCar.carriage;
    myCar.carriage.color = requestedCar.color; 
    
    if (neededWheelSize % 2 === 0) {
        neededWheelSize -= 1;
    }
    
    myCar.wheels = [neededWheelSize, neededWheelSize, neededWheelSize, neededWheelSize];
    return myCar;
}

// console.log(carFactory({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 }));
console.log(carFactory({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 }));