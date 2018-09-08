'use strict';
function emailValidation(str) {
    let regex = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/g;
    console.log(regex.test(str) ? 'Valid' : 'Invalid');
}

// emailValidation('valid@email.bg');
emailValidation('invalid@emai1.bg');
