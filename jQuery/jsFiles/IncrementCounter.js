'use strict';
function increment() {
    let textarea = $('<textarea class="counter" disabled="disabled">0</textarea>');
    let div = $('#wrapper');
    div.append(textarea);
    let incrementBtn = $('<button class="btn" id="incrementBtn">Increment</button>');
    div.append(incrementBtn);
    let addBtn = $('<button class="btn" id="addBtn">Add</button>');
    div.append(addBtn);
    let unorderedList = $('<ul class="results" />');
    div.append(unorderedList);

    $('#incrementBtn').on('click', function() {
        textarea.val(Number(textarea.val()) + 1);
    });

    $('#addBtn').on('click', function() {
        let li = $('<li>');
        li.text(textarea.val());
        unorderedList.append(li);
    });
}
