'use strict';
function validate() {
    let regex = /\b[a-z]+@[a-z]+\.[a-z]+\b/;
    let email = document.getElementById('email');
    email.addEventListener('change', function () {
        if (regex.test(email.value)) {
            email.removeAttribute('class');
        } else {
            email.className = 'error';
        }
    });
}

