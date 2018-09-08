function binaryLogarithm(array) {
    for (let index in array) {
        console.log(Math.log2(array[index]));
    }
}

binaryLogarithm([1,2,3]);