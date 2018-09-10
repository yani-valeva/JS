'use strict';
function sum() {
    let elements = document.getElementsByTagName('td');
    let sum = 0.0;

    for (let i = 1; i < elements.length - 2; i += 2) {
        sum += Number(elements[i].textContent);
    }

    document.getElementById('sum').textContent = sum.toString();
}
