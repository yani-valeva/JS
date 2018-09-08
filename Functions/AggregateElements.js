function aggregateElements(array) {
    function sumElements(arr, initialValue, func) {
        let val = initialValue;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }

    sumElements(array, 0, (a , b) => a + b);
    sumElements(array, 0, (a , b) => a + 1/b);
    sumElements(array, '', (a, b) => a + b);
}

aggregateElements([2, 4, 8, 16]);
