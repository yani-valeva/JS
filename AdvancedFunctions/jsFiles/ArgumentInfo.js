'use strict';
function getArgumentsInfo() {
    let obj = {};

    for (let i = 0; i < arguments.length; i++) {
        let element = arguments[i];
        let type = typeof(element);
        console.log(`${type}: ${element}`);

        if (!obj.hasOwnProperty(type)) {
            obj[type] = 1;
        } else {
            obj[type] += 1;
        }
    }

    let arrKeys = Object.keys(obj).sort((k1, k2) => obj[k2] - obj[k1]);
    
    for (let key of arrKeys) {
        console.log(`${key} = ${obj[key]}`);
    }
}

// getArgumentsInfo('cat', 42, function () { console.log('Hello world!'); });
getArgumentsInfo({ name: 'bob'}, 3.333, 9.999);
// getArgumentsInfo(42, 'cat', [], undefined);