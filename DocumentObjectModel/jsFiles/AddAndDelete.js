'use strict';
function addItem() {

    function deleteItem(e) {
        e.target.parentNode.remove()
    }

    let item = document.createElement("li");
    let text = document.getElementById('newText').value;

    if (text !== '') {
        let delItemLink = document.createElement('a');
        delItemLink.setAttribute('href', '#');
        delItemLink.innerHTML = '[Delete]';
        delItemLink.addEventListener('click', function (event) {
            deleteItem(event);
        });
        item.appendChild(document.createTextNode(text + ' '));
        item.appendChild(delItemLink);
        document.getElementById('items').appendChild(item);
        document.getElementById('newText').value = '';
    }
}

