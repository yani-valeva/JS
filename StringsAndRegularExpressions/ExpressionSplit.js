'use strict';
function expressionSplit(str) {
    let regex = /[\s\t\n(),;\.]/g;
    console.log(str.split(regex).filter(e => e !== '').join('\n'));
}

// expressionSplit('let sum = 4 * 4,b = "wow";');
expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');
