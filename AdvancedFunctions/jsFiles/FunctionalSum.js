'use strict';
let add = (function () {
    let sum = 0;

    return function result(number) {
        sum += number;
        
        result.toString = function() {
            return sum;
        }

        return result;
    }
})();

// console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());
