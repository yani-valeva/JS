'use strict';
function getCarsInfo(input) {
    let carsInfo = (function() {
        let cars = {};
        function create(arr) { 
            let name = arr[0];         
            if (arr.length > 1) {                       
                let parentName = arr[2];
                cars[name] = Object.create(cars[parentName]);   
            } else {
                cars[name] = {};
            }       
        }

        function set(arr) {
            let name = arr[0];
            let prop = arr[1];
            let value = arr[2];
            cars[name][prop] = value;
        }

        function print(arr) {
            let name = arr[0];
            let result = [];
            for(let obj in cars[name]) {
                result.push(`${obj}:${cars[name][obj]}`);
            }
            console.log(result.join(', '));
        }

        return {create, set, print};
    })();

    for(let i = 0; i < input.length; i++) {
        let commands = input[i].split(' ');
        let command = commands.shift();
        carsInfo[command](commands);
    }
}

getCarsInfo(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2']);