'use strict';
function extractText() {
    let text = $('#items').find('li').toArray().map(e => $(e).text()).join(', ');
    $('#result').text(text);
}

