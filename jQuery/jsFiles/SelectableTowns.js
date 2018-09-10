'use strict';
function attachEvents() {
    $('#items li').on('click', function() {
        if (!$(this).attr('data-selected')) {
            $(this).attr('data-selected', true);
            $(this).css('background-color', '#DDD');
        } else {
            $(this).removeAttr('data-selected');
            $(this).css('background-color', '');
        }   
    });

    $('#showTownsButton').on('click', function() {
        let selectedElements = $("#items li[data-selected]").toArray().map(o => $(o).text()).join(', ');
        $('#selectedTowns').text(`Selected towns: ${selectedElements}`);
    });
}
