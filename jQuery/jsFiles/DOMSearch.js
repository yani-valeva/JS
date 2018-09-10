'use strict';
function domSearch(selector, isCaseSensitive) {
    let outerDiv = $(selector);
    let addControlsDiv = $('<div class="add-controls"></div>');
    let input = $('<input/>');
    let lblEnterText = $('<label>Enter text: </label>');
    input.appendTo(lblEnterText);
    lblEnterText.appendTo(addControlsDiv);
    let addBtn = $('<a class="button" style="display: inline block">Add</a>')
        .css('color', 'white')
        .css('background-color', 'grey')
        .css("border", "black solid 1px");
    addBtn.appendTo(addControlsDiv);
    addControlsDiv.appendTo(outerDiv);
    let searchControlsDiv = $('<div class="search-controls"></div>');
    let target = $('<input/>');
    let targetLabel = $('<label>Search: </label>');
    target.appendTo(targetLabel);
    targetLabel.appendTo(searchControlsDiv);
    searchControlsDiv.appendTo(outerDiv);
    let resultDiv = $('<div class="result-controls"></div>');
    let listItems = $('<ul class="items-list"></ul>');
    listItems.css('list-style-type', 'none');
    listItems.appendTo(resultDiv);
    resultDiv.appendTo(outerDiv);
    let deleteBtn = $('<a class="button">x</a>')
        .css('color', 'white')
        .css('background-color', 'grey')
        .css("border", "black solid 1px");


    addBtn.on('click', function () {
        let li = $('<li class="list-item"></li>');
        let deleteBtn = $('<a class="button">x</a>')
            .css('color', 'white')
            .css('background-color', 'grey')
            .css("border", "black solid 1px");
        deleteBtn.appendTo(li);
        let element = $('<strong>');
        element.text(input.val());
        element.appendTo(li);
        li.appendTo(listItems);

        deleteBtn.on('click', function () {
            $(this).parent().remove();
        });
    });


    input.on('click', function () {
        input.val('');
    });

    if (isCaseSensitive === undefined) {
        isCaseSensitive = false;
    }

    target.on('input', function () {
        let searchedText = target.val();
        let listsElements = $('ul li strong');
        
        if (isCaseSensitive) {
            for (let el of listsElements) {
                if (!el.innerHTML.includes(searchedText)) {
                    $(el).parent().css('display', 'none');
                } else {
                    $(el).parent().css('display', '');
                }
            }
        } else {
            for (let el of listsElements) {
                if (!el.innerHTML.toLowerCase().includes(searchedText.toLowerCase())) {
                    $(el).parent().css('display', 'none');
                } else {
                    $(el).parent().css('display', '');
                }
            }
        }
    });
}
