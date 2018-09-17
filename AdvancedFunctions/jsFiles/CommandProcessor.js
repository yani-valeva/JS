'use strict';
function commandProcessor(arr) {
    let operations = (function() {
        let text = '';
        return {
            append: (str) => text += str,
            removeStart: (number) =>  text = text.substring(number),
            removeEnd: (number) => text = text.substring(0, text.length - number),
            print: () => console.log(text)
        }
    })();

    for(let elem of arr) {
        let [command, data] = elem.split(' ');
        operations[command](data);
    }   
}

commandProcessor(['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print']);
commandProcessor(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']);