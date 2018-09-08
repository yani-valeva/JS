'use strict';
function findVariables(str) {
    let regex = /\b_[A-Za-z0-9]+\b/g;
    console.log(str.match(regex).map(element => element.slice(1)).join(','));
}

// findVariables('The _id and _age variables are both integers.');
// findVariables('Calculate the _area of the _perfectRectangle object.');
findVariables('__invalidVariable _evenMoreInvalidVariable_ _validVariable');

