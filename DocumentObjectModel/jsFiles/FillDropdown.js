'use strict';
function addItem() {
    let text = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');
    let optionTag = document.createElement('option');
    optionTag.textContent = text.value;
    optionTag.value = inputValue.value;
    document.getElementById('menu').appendChild(optionTag);
    text.value = '';
    inputValue.value = '';
}
