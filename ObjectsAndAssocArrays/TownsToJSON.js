'use strict';
function getTownsToJSON(arr) {
    let colNames = getElements(arr.shift());
    let towns = [];

    for (let element of arr) {
        let townsInfo = getElements(element);
        let obj = {
            Town: townsInfo[0],
            Latitude: +townsInfo[1],
            Longitude: +townsInfo[2]
        };

        towns.push(obj);
    }
    console.log(JSON.stringify(towns));

    function getElements(el) {
        return el.split('|').filter(el => el !== '').map(el => el.trim());
    }
}

getTownsToJSON(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |', '| Beijing | 39.913818 | 116.363625 |']);