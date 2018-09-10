'use strict';
function addItem() {
    let item = document.createElement("li");
    let text = document.getElementById('newItemText').value;

    if (text !== '') {
        item.appendChild(document.createTextNode(text));
        document.getElementById('items').appendChild(item);
        document.getElementById('newItemText').value = '';
    }
}

