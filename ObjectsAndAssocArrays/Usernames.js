'use strict';
function getUsernames(arr) {
    let usernames = new Set();

    for (let str of arr) {
        usernames.add(str);
    }

    [...usernames].sort((a, b) => {
       return a.length !== b.length ? a.length - b.length : a.localeCompare(b);
    }).forEach(n => console.log(n));
}

// getUsernames(['Ashton',
//     'Kutcher',
//     'Ariel',
//     'Lilly',
//     'Keyden',
//     'Aizen',
//     'Billy',
//     'Braston'
// ]);

getUsernames(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
]);