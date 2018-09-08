'use strict';
function capitalizeWords(str) {
    console.log(str.split(' ').map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()).join(' '));
}

// capitalizeWords('Capitalize these words');
capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');
