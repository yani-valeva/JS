'use strict';
function attachEvents() {
    let element = $('.button');
    element.on('click', function() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });
}
