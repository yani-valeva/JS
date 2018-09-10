'use strict';
function focus() {
    let inputs = document.getElementsByTagName('input');

    for (let input of inputs) {
        input.addEventListener('focus', function (event) {
            input.parentNode.className = 'focused';
        });
        input.addEventListener('blur', function (event) {
            input.parentNode.className = '';
        })
    }
}
