function getRoundedNumber(array) {
    let number = array[0];
    let precision = array[1] > 15 ? 15 : array[1];

    console.log(Number(number.toFixed(precision)));
    // console.log(parseFloat(number.toFixed(precision)));
}

getRoundedNumber([10.5567, 3]);