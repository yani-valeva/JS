'use strict';
function getRoomsInfo(roomsArr, guestsArr) {
    let doubleArr = [];
    let tripleArr = [];
    let tripleNumbers = [];
    let allGuests = new Map();
    let tripleGuests = new Map();
    let tripleWithOneEmpty = [];
    let movedCount = 0;
    let tripleEmptyMale = [];
    let tripleEmptyFemale = [];

    for (let room of roomsArr) {
        if (room['type'] === 'double-bedded') {
            doubleArr.push(room['number']);
        } else if (room['type'] === 'triple') {
            tripleArr.push(room['number']);
            tripleNumbers.push(room['number']);
        }
    }

    let test = '';
    for (let guestsInfo of guestsArr) {

        if (guestsInfo['first']['gender'] !== guestsInfo['second']['gender']) {
            if (doubleArr.length > 0) {
                allGuests.set(doubleArr.shift(), guestsInfo);
            } else {
                movedCount += 2;
            }
        } else {
            let gender = guestsInfo['first']['gender'];

            if (gender === 'male') {
                let currentCount = tripleEmptyMale.length;
                if (currentCount === 0 && tripleArr.length > 0) {
                    tripleGuests.set(tripleArr[0], guestsInfo);
                    tripleEmptyMale.push(tripleArr.shift());
                } else if (currentCount !== 0) {
                    for (let i in tripleEmptyMale) {
                        let currentObj = tripleGuests.get(tripleEmptyMale[i]);
                        if (Object.keys(currentObj).length === 1) {
                            currentObj['second'] = {
                                name: guestsInfo['first']['name'],
                                age: guestsInfo['first']['age']
                            };
                            currentObj['third'] = {
                                name: guestsInfo['second']['name'],
                                age: guestsInfo['second']['age']
                            };

                            tripleGuests.set(tripleEmptyMale[i], currentObj);
                            tripleEmptyMale.splice(i, 1);
                            break;
                        } else if (Object.keys(currentObj).length === 2) {
                            currentObj['third'] = {
                                name: guestsInfo['first']['name'],
                                age: guestsInfo['first']['age']
                            };

                            tripleGuests.set(tripleEmptyMale[i], currentObj);
                            tripleEmptyMale.splice(i, 1);

                            if (tripleEmptyMale.length > 0) {
                                currentObj = tripleGuests.get(tripleEmptyMale[0]);
                                currentObj['third'] = {
                                    name: guestsInfo['second']['name'],
                                    age: guestsInfo['second']['age']
                                };

                                tripleGuests.set(tripleEmptyMale[i], currentObj);
                                tripleEmptyMale.splice(i, 1);
                            } else if (tripleArr.length > 0) {
                                currentObj = {};
                                currentObj['first'] = {
                                    name: guestsInfo['second']['name'],
                                    age: guestsInfo['second']['age']
                                };
                                tripleGuests.set(tripleArr[0], currentObj);
                                tripleEmptyMale.push(tripleArr.shift());
                            } else {
                                movedCount += 1;
                            }
                        }
                    }
                } else if (currentCount === 0 && tripleArr.length === 0) {
                    movedCount += 2
                }
            } else {
                let currentCount = tripleEmptyFemale.length;
                if (currentCount === 0 && tripleArr.length > 0) {
                    tripleGuests.set(tripleArr[0], guestsInfo);
                    tripleEmptyFemale.push(tripleArr.shift());
                } else if (currentCount !== 0) {
                    for (let i in tripleEmptyFemale) {
                        let currentObj = tripleGuests.get(tripleEmptyFemale[i]);
                        if (Object.keys(currentObj).length === 1) {
                            currentObj['second'] = {
                                name: guestsInfo['first']['name'],
                                age: guestsInfo['first']['age']
                            };
                            currentObj['third'] = {
                                name: guestsInfo['second']['name'],
                                age: guestsInfo['second']['age']
                            };

                            tripleGuests.set(tripleEmptyFemale[i], currentObj);
                            tripleEmptyFemale.splice(i, 1);
                            break;
                        } else if (Object.keys(currentObj).length === 2) {
                            currentObj['third'] = {
                                name: guestsInfo['first']['name'],
                                age: guestsInfo['first']['age']
                            };

                            tripleGuests.set(tripleEmptyFemale[i], currentObj);
                            tripleEmptyFemale.splice(i, 1);

                            if (tripleEmptyFemale.length > 0) {
                                currentObj = tripleGuests.get(tripleEmptyFemale[0]);
                                currentObj['third'] = {
                                    name: guestsInfo['second']['name'],
                                    age: guestsInfo['second']['age']
                                };

                                tripleGuests.set(tripleEmptyFemale[i], currentObj);
                                tripleEmptyFemale.splice(i, 1);
                            } else if (tripleArr.length > 0) {
                                currentObj = {};
                                currentObj['first'] = {
                                    name: guestsInfo['second']['name'],
                                    age: guestsInfo['second']['age']
                                };
                                tripleGuests.set(tripleArr[0], currentObj);
                                tripleEmptyFemale.push(tripleArr.shift());
                            } else {
                                movedCount += 1;
                            }
                        }
                    }
                } else if (currentCount === 0 && tripleArr.length === 0) {
                    movedCount += 2
                }
            }
        }
    }

    for (let [k, v] of tripleGuests) {
        allGuests.set(k, v);
    }

    for (let room of doubleArr) {
        allGuests.set(room, {});
    }

    for (let room of tripleArr) {
        allGuests.set(room, {});
    }

    let sortedRooms = Array.from(allGuests.keys()).sort((k1, k2) => Number(k1.match(/\d+/g)) - Number(k2.match(/\d+/g)));

    for (let room of sortedRooms) {
        console.log(`Room number: ${room}`);
        let currentRoom = room.toString();
        let properties = Object.keys(allGuests.get(currentRoom));
        let people = new Map();

        for (let property of properties) {
            people.set(allGuests.get(currentRoom)[property]['name'], allGuests.get(currentRoom)[property]['age']);
        }

        let sortedNames = Array.from(people.keys()).sort((n1, n2) => n1.localeCompare(n2));

        for (let name of sortedNames) {
            console.log(`--Guest Name: ${name}`);
            console.log(`--Guest Age: ${people.get(name)}`);
        }

        let isTriple = false;

        for (let number of tripleNumbers) {
            if (number === currentRoom) {
                isTriple = true;
                break;
            }
        }

        if (!isTriple) {
            console.log(Object.keys(allGuests.get(currentRoom)).length === 2 ? `Empty beds in the room: 0` : `Empty beds in the room: 2`);

        } else {
            if (Object.keys(allGuests.get(currentRoom)).length === 3) {
                console.log(`Empty beds in the room: 0`);
            } else if (Object.keys(allGuests.get(currentRoom)).length === 2) {
                console.log(`Empty beds in the room: 1`);
            } else if (Object.keys(allGuests.get(currentRoom)).length === 0) {
                console.log(`Empty beds in the room: 3`);
            } else if (Object.keys(allGuests.get(currentRoom)).length === 1) {
                console.log(`Empty beds in the room: 2`);
            }
        }
    }

    console.log(`Guests moved to the tea house: ${movedCount}`);
}

// getRoomsInfo([{number: '206', type: 'double-bedded'},
//         {number: '311', type: 'triple'}],
//     [{
//         first: {name: 'Tanya Popova', gender: 'female', age: 24},
//         second: {name: 'Miglena Yovcheva', gender: 'female', age: 23}
//     },
//         {
//             first: {name: 'Katerina Stefanova', gender: 'female', age: 23},
//             second: {name: 'Angel Nachev', gender: 'male', age: 22}
//         },
//         {
//             first: {name: 'Tatyana Germanova', gender: 'female', age: 23},
//             second: {name: 'Boryana Baeva', gender: 'female', age: 22}
//         }]);

// getRoomsInfo([{number: '101A', type: 'double-bedded'},
//         {number: '104', type: 'triple'},
//         {number: '101B', type: 'double-bedded'},
//         {number: '102', type: 'triple'}],
//     [{
//         first: {name: 'Sushi & Chicken', gender: 'female', age: 15},
//         second: {name: 'Salisa Debelisa', gender: 'female', age: 25}
//     },
//         {
//             first: {name: 'Daenerys Targaryen', gender: 'female', age: 20},
//             second: {name: 'Jeko Snejev', gender: 'male', age: 18}
//         },
//         {
//             first: {name: 'Pesho Goshov', gender: 'male', age: 20},
//             second: {name: 'Gosho Peshov', gender: 'male', age: 18}
//         },
//         {
//             first: {name: 'Conor McGregor', gender: 'male', age: 29},
//             second: {name: 'Floyd Mayweather', gender: 'male', age: 40}
//         }]);

// getRoomsInfo([{"number": "428", "type": "triple"},
//         {"number": "161", "type": "triple"},
//         {"number": "242", "type": "double-bedded"},
//         {"number": "537", "type": "triple"}],
//     [{"first":{"name":"Nina Diaz","gender":"female","age":29},"second":{"name":"Carol Hansen","gender":"female","age":6}},
//         {"first":{"name":"Georgia Thomas","gender":"female","age":38},"second":{"name":"Freddie Harmon","gender":"male","age":46}},
//         {"first":{"name":"Freddie Harmon","gender":"male","age":30},"second":{"name":"Jesus Terry","gender":"male","age":64}},
//         {"first":{"name":"Tracy Reid","gender":"male","age":41},"second":{"name":"Jordan Garner","gender":"male","age":16}},
//         {"first":{"name":"Kara Burns","gender":"female","age":7},"second":{"name":"Marjorie Butler","gender":"female","age":28}}]);

getRoomsInfo([{"number":"97","type":"triple"},
    {"number":"600","type":"double-bedded"},
    {"number":"924","type":"triple"},
    {"number":"242","type":"double-bedded"},
    {"number":"346","type":"double-bedded"},
    {"number":"537","type":"triple"},
    {"number":"161","type":"triple"},
    {"number":"46","type":"double-bedded"},
    {"number":"428","type":"triple"},
    {"number":"584","type":"double-bedded"},
    {"number":"34","type":"double-bedded"},
    {"number":"636","type":"triple"},
    {"number":"963","type":"double-bedded"}], [{"first":{"name":"Laurie Montgomery","gender":"female","age":16},"second":{"name":"Sadie Carson","gender":"female","age":29}},
    {"first":{"name":"Erin Moreno","gender":"female","age":69},"second":{"name":"Beth Foster","gender":"female","age":48}},
    {"first":{"name":"Georgia Thomas","gender":"female","age":38},"second":{"name":"Freddie Harmon","gender":"male","age":46}},
    {"first":{"name":"Alexis Graham","gender":"female","age":19},"second":{"name":"Marco Arnold","gender":"male","age":4}},
    {"first":{"name":"Freddie Harmon","gender":"male","age":30},"second":{"name":"Jesus Terry","gender":"male","age":64}},
    {"first":{"name":"Nina Diaz","gender":"female","age":29},"second":{"name":"Carol Hansen","gender":"female","age":6}},
    {"first":{"name":"Tracy Reid","gender":"male","age":41},"second":{"name":"Jordan Garner","gender":"male","age":16}},
    {"first":{"name":"Kara Burns","gender":"female","age":7},"second":{"name":"Marjorie Butler","gender":"female","age":28}},
    {"first":{"name":"Ismael Wagner","gender":"male","age":4},"second":{"name":"Claude Schneider","gender":"male","age":63}},
    {"first":{"name":"Ashley Mcguire","gender":"female","age":31},"second":{"name":"Melody Gill","gender":"female","age":38}},
    {"first":{"name":"Joyce Roy","gender":"female","age":41},"second":{"name":"Miguel Kelly","gender":"male","age":23}},
    {"first":{"name":"Chelsea Wilkins","gender":"female","age":59},"second":{"name":"Marianne Boone","gender":"female","age":18}},
    {"first":{"name":"Lori Griffin","gender":"female","age":11},"second":{"name":"Byron Love","gender":"male","age":58}},
    {"first":{"name":"Carol Hansen","gender":"female","age":0},"second":{"name":"Christine Page","gender":"female","age":45}},
    {"first":{"name":"Ronnie Floyd","gender":"male","age":51},"second":{"name":"Steven Todd","gender":"male","age":6}},
    {"first":{"name":"Eva Reyes","gender":"female","age":2},"second":{"name":"Joyce Roy","gender":"female","age":43}},
    {"first":{"name":"Rochelle Sandoval","gender":"female","age":67},"second":{"name":"Matthew Rodriquez","gender":"male","age":36}},
    {"first":{"name":"Malcolm Bishop","gender":"male","age":58},"second":{"name":"Sergio Ferguson","gender":"male","age":0}},
    {"first":{"name":"Essie Stone","gender":"female","age":35},"second":{"name":"Keith Sutton","gender":"male","age":58}},
    {"first":{"name":"Mary Gregory","gender":"female","age":18},"second":{"name":"Marco Arnold","gender":"male","age":44}},
    {"first":{"name":"Tom Dennis","gender":"male","age":15},"second":{"name":"Jim Graham","gender":"male","age":63}}]);