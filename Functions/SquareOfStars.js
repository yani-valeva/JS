function getRectangle(input) {
    let number = input === undefined ? 5 : input;

    for (let i = 1; i <= number; i++) {
        console.log('* '.repeat(number).trim());
    }
}

getRectangle(3);