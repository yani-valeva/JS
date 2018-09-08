function getSquares(number) {
    let row = 0;
    let totalRow = number;

    if (number % 2 == 0) {
        row = (number - 4) / 2;
        totalRow = number - 1;
    } else {
        row = (number - 3) / 2;
    }
    let col = ((2 * number) - 4) / 2;


    let output = '';

    for (let i = 1; i <= totalRow; i++) {
        if (i === 1 || i === 2 + row || i === 3 + (2 * row)) {
            output += getCols(col);
            output += getCols(col);
            output += '+\n';
        } else {
            output += getRows(col);
            output += getRows(col);
            output += '|\n';
        }
    }

    function getCols(col) {
        let output = '+';
        for (let i = 0; i < col; i++) {
            output += '-';
        }

        return output;
    }

    function getRows(col){
        let output = '|';
        for (let i = 0; i < col; i++) {
            output += ' ';
        }

        return output;
    }
    console.log(output);
}

getSquares(4);