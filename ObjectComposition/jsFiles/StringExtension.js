'use strict';
(function () {
    String.prototype.ensureStart = function (str) {
        let result;

        if (this.includes(str)) {
            result = this;
        } else {
            result = str + this;
        }

        return result;
    };

    String.prototype.ensureEnd = function (str) {
        let result;

        if (this.includes(str)) {
            result = this;
        } else {
            result = this + str;
        }

        return result;
    };

    String.prototype.isEmpty = function () {
        if (this === '') {
            return true;
        }

        return false;
    };

    String.prototype.truncate = function (number) {
        let strLength = this.length;

        if (number < 4) {
            return '.'.repeat(number);
        }

        if (strLength < number) {
            return this;
        } else if (strLength > number) {
            let result = this.split(' ');

            if (result.length > 1) {
                result.pop();
                return result.join(' ') + '...';
            } else if (result.length === 1) {
                let count = number - 3;

                if (count <= result[0].length) {
                    return result[0].substring(0, count) + '...';
                }
            }
        } 
    };

    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            let text = "\{" + i + "\}";
            let index = str.indexOf(text);

            while (index >= 0) {
                str = str.replace(text, params[i]);
                index = str.indexOf(text, index + 1);
            }          
        }

        return str;
    }

})();

let str = 'my string';
console.log(str = str.ensureStart('my')); 
console.log(str = str.ensureStart('hello '));
// console.log(str = str.ensureEnd('hello'));
// console.log(str.isEmpty());
// console.log(str = String.format('jumps {0} {1}', 'dog', 'cat'));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
console.log(str = String.format('jumps {0} {1}', 'dog'));
console.log(str = String.format('The {0} {1} {0} fox','quick', 'brown'));


