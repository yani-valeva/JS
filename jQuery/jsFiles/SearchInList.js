'use strict';
function search() {
    let target = $('#searchText').val();
    let count = 0;
    $('#towns').find('li').each((i, el) => {
        if ($(el).text().includes(target)) {
            $(el).css('font-weight', 'bold');
            count++;
        } else {
            $(el).css('font-weight', '');
        }
    });

    $('#result').text(`${count} matches found.`);
    $('#searchText').on('click', function () {
        $('#searchText').val('');
    })
}
