'use strict';
function listPRocessor(arr) {
    let commandProcessor = (function() {
        let elements = [];

        function add(str) {
            elements.push(str);
        }

        function remove(str) {
            elements = elements.filter(e => e !== str);
        }

        function print() {
            console.log(elements.join(','));
        }

        return {add, remove, print};
    })();

    for (let i = 0; i < arr.length; i++) {
        let [command, value] = arr[i].split(' ');
        commandProcessor[command](value);
    }
}

listPRocessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listPRocessor(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);