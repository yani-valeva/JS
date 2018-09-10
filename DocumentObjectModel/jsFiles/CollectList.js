'use strict';
function extractText() {
    let elements = document.getElementsByTagName('li');
    let result = '';

    for (let i = 0; i < elements.length; i+=1) {
        result += elements[i].innerHTML + '\n';
    }

    document.getElementById('result').value = result;
}
