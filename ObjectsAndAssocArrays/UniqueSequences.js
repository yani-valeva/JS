'use strict';
function storeNumbers(input) {
    let matrix = [];
    for (let i in input) {
        let arr = JSON.parse(input[+i]).sort((a, b) => b - a);

        if (+i === 0) {
            matrix.push(arr);
        } else {
            let hasArr = false;
            for (let currArr of matrix) {
                if (JSON.stringify(currArr) === JSON.stringify(arr)) {
                    hasArr = true;
                }
            }

            if (!hasArr) {
                matrix.push(arr);
            }
        }
    }

    matrix.sort((a, b) => a.length - b.length).forEach(a => console.log(`[${a.join(', ')}]`));
}

storeNumbers(['[-3, -2, -1, 0, 1, 2, 3, 4]',
'[10, 1, -17, 0, 2, 13]',
'[4, -3, 3, -2, 2, -1, 1, 0]']);

// storeNumbers(['[7.14, 7.180, 7.339, 80.099]',
// '[7.339, 80.0990, 7.140000, 7.18]',
// '[7.339, 7.180, 7.14, 80.099]']);
