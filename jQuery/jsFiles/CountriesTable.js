'use strict';
function initializeTable() {
    let create = $('#createLink');
    create.on('click', createCountry);
    addCountryToTable('Bulgaria', 'Sofia');
    addCountryToTable('Germany', 'Berlin');
    addCountryToTable('Russia', 'Moscow');

    function createCountry() {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');
        addCountryToTable(country.val(), capital.val());
        country.val('');
        capital.val('');
    }

    function addCountryToTable(country, capital) {
        let table = $('#countriesTable');
        let row = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>').append($('<a href="#">[Up]</a>').on('click', moveRowUp)).append(' ')
                            .append($('<a href="#">[Down]</a>').on('click', moveRowDown)).append(' ')
                            .append($('<a href="#">[Delete]</a>').on('click', deleteRow)));
        row.css('display', 'none');
        table.append(row);
        row.fadeIn();
        fixRowLinks();
    }

    function deleteRow() {
        let row = $(this).closest('tr');
        row.fadeOut(function() {
            row.remove();
            fixRowLinks();
        })
    }

    function moveRowDown() {
        let row = $(this).closest('tr');
        row.fadeOut(function() {
            row.insertAfter(row.next());
            row.fadeIn();
            fixRowLinks();
        })
    }

    function moveRowUp() {
        let row = $(this).closest('tr');
        row.fadeOut(function() {
            row.insertBefore(row.prev());
            row.fadeIn();
            fixRowLinks();
        })
    }

    function fixRowLinks() {
        $('#countriesTable a').css('display', 'inline');

        $('#countriesTable').find('tr').eq(2).find("a:contains('Up')").css('display', 'none');

        $('#countriesTable').find('tr:last').find("a:contains('Down')").css('display', 'none');    
    }
}

