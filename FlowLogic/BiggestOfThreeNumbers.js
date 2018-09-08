function getBiggestNumber(array) {
    array.sort(function (a, b) {
        return a - b;
    });
    console.log(array[2]);
}

getBiggestNumber([43, 43.2, 43.1]);