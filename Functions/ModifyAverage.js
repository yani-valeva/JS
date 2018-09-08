function addNineToNumber(number) {
    let numberAsString = number.toString();

    while (true) {
        let average = getAverage(numberAsString);

        if (average > 5) {
            console.log(numberAsString);
            return;
        }

        numberAsString += 9 + '';
    }

    function getAverage(numStr) {
        let avg = 0;
        for (let i = 0; i < numberAsString.length; i++) {
            avg += parseInt(numberAsString.charAt(i));
        }

        avg /= numberAsString.length;
        return avg;
    }
}

addNineToNumber(5835);